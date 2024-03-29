import React from 'react'
function Button({
    children,
    type="button",
    bgColor = 'bg-blue-500',
    textColor='text-white',
    className='',
    ...props
}) {
  return <button className={`px-4 py-1.5 rounded-lg ${className} ${textColor} ${bgColor} `} {...props} 
  >{children}
  </button>
}

export default Button