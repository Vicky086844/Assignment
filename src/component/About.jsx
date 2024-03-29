import React from 'react'
import SkillsList from './SkillsList';

function About({user}) {
  if (!user || !user.about) {
    return <div>Loading...</div>; // Add loading indicator or error message
  }
  
    const{name,address,phoneNumber,contactEmail,description,subTitle }=user?.about;
    
  return (
    <div  id="about" className='flex flex-col md:flex-row bg-neutral-100 max-w-7xl mx-auto '>

    <div className='flex flex-col w-full px-8 py-3 border-r-2 border-black-400'>
        <h2 className='text-center font-medium text-gray-600 py-4 px-6 text-2xl mb-2  border-b-2 border-black-400'>About me</h2>
        <h2 className='text-3xl font-medium py-3'>{subTitle}</h2>
        <br />
        <p className='text-lg text-gray-600 '>{description}</p>
        <div className='flex flex-col font-normal  justify-evenly gap-3 my-4 flex-wrap '>
        <p><span className='font-medium'>Name:</span> {name}</p>
        <p><span className='font-medium'>Address:</span> {address}</p>
        <p><span className='font-medium'>Phone No: </span>{phoneNumber}</p>
        <p><span className='font-medium'>Email Address:</span> {contactEmail}</p>
        <div className='flex  gap-4'><span className='font-medium'>Social Network :</span>{user.social_handles.map((item)=>(<div key={item._id} className=' inline-flex gap-3 justify-center items-center'>
          <img src={item.image.url} alt={item.name} className='w-[24px] cursor-pointer '/>

        </div>
          ))}</div>
        </div>

    </div>
    <div className='w-full py-3 px-8 '>
    <h2 className='text-center font-medium py-4 text-gray-600 px-6 text-2xl border-b-2 border-black-400 '>Skills</h2>
    <SkillsList user= {user}/>
    </div>
    
       
        
    </div>

  )
}

export default About