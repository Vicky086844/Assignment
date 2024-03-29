import React from 'react'

function Services({user}) {
    
  return (
    <div className='w-full py-7 px-8 '>
        <h2 className='text-3xl font-bold text-center my-2'>Services</h2>
        <h3 className='text-2xl font-medium text-center py-1 px-4'>What I Do</h3>
        <h3 className='text-xl py-3.5 px-3 text-center '>I develop 3D visuals, user interfaces and web applications</h3>
        <section className='flex  flex-col  w-full md:w-3/4 mx-auto gap-2 '>
        {user?.services.map((item)=>(
            <div key={item._id} className='flex gap-4  w-full px-8 py-6 border flex-col items-center md:flex-row justify-between bg-slate-100 rounded-md shadow-2xl'>
                <img src={item.image.url} alt={item.name || "service"} className='w-[100px] h-[100px] object-contain md:w-auto' />
                <div className='flex flex-col mx-2 gap-2 w-full text-center md:text-start md:justify-center'>
                    <h2 className='text-2xl  font-medium '>{item.name}</h2>
                    <p className='text-lg w-full md:w-3/4'>{item.desc}</p>
                </div>
                <div className='flex md:flex-col gap-2 md:w-1/3 items-center md:items-start lg:items-center justify-center'>
                    <h3 className=' font-medium '>Starts from</h3>
                    <h2 className='text-xl font-bold '>{item.charge}</h2>
                </div>
            </div>
        ))}
        </section>

    </div>
  )
}

export default Services