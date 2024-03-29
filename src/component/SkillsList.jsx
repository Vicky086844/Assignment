import React from 'react';

function SkillsList({ user }) {

  return (
    <div className='w-full flex justify-center gap-4 flex-wrap bg-slate-100 py-4 px-8'>
      {user.skills.map((skill) => (
        <div key={skill._id} className=' bg-white px-8 py-3 w-[120px] rounded-md shadow-lg'>
          {skill.enabled && (
            <img src={skill.image.url} alt={skill.name} className='w-[50px] h-[50px] ' />)}
          <div className='bg-white  flex gap-2 items-center justify-center '>
            <h3 >{skill.name}</h3>
            <p className=' text-gray-500 text-sm'> {skill.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
