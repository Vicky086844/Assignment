import React, { useState, useEffect } from 'react'

function Testimonial({ user }) {
    
    const [current, setCurrent] = useState(1)

    const slider = () => {
        setCurrent((current) => current >= user.testimonials.length - 1 ? 0 : current + 1)
    }
    useEffect(() => {
        const id = setInterval(slider, 4200);
        return () => clearInterval(id);
    }, [user?.testimonials?.length])

    function prevSlide() {
        setCurrent(current === 0 ? user.testimonials.length : current - 1)

    }
    function nextSlide() {
        setCurrent(current === user.testimonials.length - 1 ? 0 : current + 1)
    }
    return (
        <div className='py-8 my-8 bg-slate-50'>
            <h2 className='text-center text-3xl font-medium   '>Review</h2>
            <div className='flex gap-2 justify-center   py-10 '>
                {user?.testimonials?.map((item, index) => current == index && (
                    <div key={item._id} className='flex flex-col md:flex-row justify-center items-center  max-w-7xl gap-4 h-fit border py-6 px-8 bg-blue-400/10 rounded-md shadow-2xl w-3/4'>
                        <img src={item.image.url} alt={item.name || "review "} className='w-[200px] h-[150px] rounded-full self-center  ' />
                        <div className='flex flex-col  gap-3 py-2 h-fit items-center justify-center flex-wrap '>
                            <p className='text-xl md:text-2xl font-medium'>{item.name}</p>
                            <p className='text-lg md:text-xl '>Position - {item.position}</p>
                            <p className=' lg:text-lg py-4  bg-blue-100/30   text-blue-900 font-medium px-8 '><q> {item.review} </q></p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='flex  items-center justify-center gap-4  '>
                <button className='font-medium  bg-blue-300 rounded-md  py-1.5 px-4 ' onClick={prevSlide}>Prev</button>
                {[...Array(user.testimonials.length)].map((_, index) => (
                    <button className={`py-1 px-1 mx-1 text-emerald-950 font-medium outline-offset-[2.5px] outline rounded-full outline-slate-400 ${current === index ? 'bg-slate-600' : 'bg-slate-100'}`}
                    key={index}
                    onClick={() => setCurrent(index)}>
                    </button>
                    ))}
                <button className='font-medium  bg-blue-300 rounded-md  py-1.5 px-4 ' onClick={nextSlide}> Next</button>
            </div>
        </div>)
}

export default Testimonial