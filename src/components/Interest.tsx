import React from 'react'

function Interest() {
  return (
    <div className='h-[80dvh] relative bg-orange-600'>
      <div className='flex flex-col justify-start h-full wrapper text-orange-100'>
        <div className='flex justify-center p-4 flex-col'>
          <h1 className='text-5xl font-bold'>My Interest</h1>
          <h2 className='text-2xl font-bold mt-2'>
            I'm interested in Web Development, <br />
            Mobile Development, and UI/UX Design
          </h2>
        </div>
      </div>
      <img src="/blob-haikei.svg" alt="" className='absolute top-10 right-10 scale-75'/>
    </div>
  )
}

export default Interest