import React from 'react'
import Logo from "../isc2.png"
export default function Navbar() {

  const buttons = [
    'Get Started',
    'Get Certified',
    'Continuing Education',
    'Members',
    'Perspectives',
    'Communities',
    'About Us',
  ];

  return (
    <div className='p-4 shadow-lg rounded-md flex justify-between w-full h-24 items-center'>
      <div className='w-24 h-10'><img className='w-full h-full' src={Logo} alt='Logo'></img></div>
      <div>
        <div className='flex justify-between gap-2 text-sm'>
          {buttons.map((text, index) => (
            <button
              key={index}
              className={'py-2 px-4 hover:bg-gray-700 hover:bg-opacity-10 hover:cursor-pointer rounded'}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
    
  )
}
