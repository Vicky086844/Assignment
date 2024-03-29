import React from 'react'
import 'animate.css/animate.min.css';


function HeroSection({user}) {
  const { name, title, avatar } = user.about ;
  return (
    <div className='flex md:flex-row flex-col py-8 px-6 gap-5    bg-neutral-600 '>
        <div className=' w-full md:w-3/4 flex justify-center md:justify-end animate__animated animate__fadeInLeft '> 
          <img src={avatar.url} alt={name || 'User Avatar'} className='w-[400px] h-[400px] object-cover rounded-md' />       
        </div>
        <div className='flex animate__animated animate__fadeInRight w-full font-medium items-center justify-center flex-col'>
         <h3 className='text-3xl'>{name}</h3>
        {title && <p className='text-xl'>{title}</p>}
           <button className='bg-neutral-500 hover:bg-neutral-400 text-white py-2.5 px-8 rounded-md my-4 transition duration-300
          '>About me</button>
        </div>
    </div>
  )
}

export default HeroSection

// import React from 'react';
// import 'animate.css/animate.min.css';

// function HeroSection({ user }) {
//   const { title, name } = user?.about;

//   return (
//     <div className='bg-gray-900 py-16'>
//       <div className='container mx-auto flex md:flex-row flex-col gap:5 justify-center items-center'>
//         <div className='flex flex-col items-center order-2'>
//           <div className='animate__animated animate__fadeInRight '>
//             <h3 className='text-3xl text-white mb-2'>{name}</h3>
//             <p className='text-lg text-gray-400'>{title}</p>
//             <button className='bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition duration-300'>About me</button>
//           </div>
//         </div>
//         <div className='ml-8'>
//           <img src={user?.about?.avatar?.url} alt="john" className='rounded-full w-64 h-64 object-cover animate__animated animate__fadeInLeft' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
