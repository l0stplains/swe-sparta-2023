'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';

interface BallProps {
  frontImage: string;
  backImage: string;
}

const MetaBall: React.FC<BallProps> = ({frontImage, backImage}) => {
      const meshRef = useRef<any>(null);
      const [frontTexture, setFrontTexture] = useState<any>(null);
      const [backTexture, setBackTexture] = useState<any>(null);

      useEffect(() => {
        const loader = new TextureLoader();
        loader.load(frontImage, (texture) => setFrontTexture(texture));
        loader.load(backImage, (texture) => setBackTexture(texture));
      }, [frontImage, backImage]);

      useFrame((state, delta) => {
        if (meshRef.current) {
          meshRef.current.rotation.y += delta * 0.2;
        }
      });
      return (
      <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={true} />
      <Sphere ref={meshRef} args={[1, 32, 32]}>
      </Sphere>
      </>
      );

}

const Ball: React.FC<BallProps> = ({ frontImage, backImage }) => {


  return (
    <Canvas>
      <MetaBall frontImage={frontImage} backImage={backImage} />
    </Canvas>
  );
};

export default Ball;
