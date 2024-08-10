import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className="min-h-[100dvh] relative bg-blue-950">
      <div className="flex flex-col justify-between h-full wrapper text-white">
        <div className="flex justify-center items-center p-4 flex-col mt-10">
          <h1 className="text-5xl font-bold">My Projects</h1>
          <h2 className="text-2xl font-bold mt-4">
            Here are some of my projects
            <br />
            <br />
          </h2>

          <div className="grid grid-cols-12 gap-4 mt-10">
            <ProjectCard
              title="O.W.C.A."
              description="A python terminal PvP game for the final project of Programming Fundamental Course in ITB."
              image="tubes-daspro.png"
              linkRef="https://github.com/Labpro-21/if1210-2024-tubes-k04-a"
            />

            <ProjectCard
              title="INFEST"
              description="A web for an annual event from KSEP ITB that used to inform the event and competition registration."
              image="infest.png"
              linkRef="https://infestitb2024.com/"
            />

            <ProjectCard
              title="Agrimart"
              description="A web store application from AgriBusiness major students in UNPAD that used to sell groceries."
              image="agrimart.png"
              linkRef="https://github.com/l0stplains/Agrimart"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects