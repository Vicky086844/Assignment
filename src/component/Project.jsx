import React from 'react'

function Project({ user }) {

  const sortedProjects = [...user.projects].sort((a, b) => a.sequence - b.sequence);
  return (
    <div className='bg-slate-50'>
      <h1 className='text-center text-4xl font-bold my-4 py-6'> Recent Projects </h1>
      <div className='flex flex-wrap justify-center gap-4 px-8 py-4'>
        {sortedProjects.map((item) => (
          <div key={item.sequence} className=' relative cursor-pointer w-fit hover:bg-emerald-600  rounded-md shadow-xl'>
            <img src={item.image.url} alt={item.title || 'Project'} className='w-[240px] h-[150px] object-contain rounded-t-md  hover:opacity-45' />
            <h3 className='text-xl text-center font-medium  py-2'>{item.title}</h3>
            {/* <div className='absolute text-white top-[15%] left-[15%] translate-x-2/4 translate-y-2/4 opacity-0 z-10 text-center  hover:opacity-100  font-medium px-6 py-2'> view code</div> */}
            <div className='absolute'> view code</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project