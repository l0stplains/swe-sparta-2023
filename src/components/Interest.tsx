import React from 'react'

function Interest() {
  return (
    <div className='h-[60vh] relative bg-blue-950'>
      <div className='flex flex-col justify-between h-full wrapper text-white'>
        <div className='flex justify-center p-4 flex-col mt-10'>
          <h1 className='text-5xl font-bold'>My Interest</h1>
          <h2 className='text-2xl font-bold mt-4'>
            I'm interested in Software Engineering<br />
          </h2>
          <p>Web Development   ·   AI   ·   Competitive Programming</p>
          
        </div>

        <div className='flex justify-center items-end p-4 flex-col mb-10'>
          <h1 className='text-5xl font-bold'>My Hobbies</h1>
          <h2 className='text-2xl font-bold mt-4'>
            I love exploring new experiences
          </h2>
          <p>Exploring Nature   ·   Reading Books   ·   Playing Games</p>

        </div>
      </div>
    </div>
  )
}

export default Interest