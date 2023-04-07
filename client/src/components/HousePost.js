import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

function HousePost() {
  return (
    <div className='flex flex-col w-[360px] h-[400px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)]'>
      {/* Top image */}
      <div className='w-full h-1/2 bg-homebg bg-cover bg-center relative'>
        <AiFillHeart size={'1.8em'} className='text-red-500 absolute top-2 right-2 hover:cursor-pointer'/>
      </div>
      {/* Bottom information */}
      <div className='flex-grow flex flex-col justify-around p-5 bg-[#f5f9fc]'>
        <div className='flex justify-between'>
            <p className='text-blue-900 font-bold text-xl'>House</p>
            <p className='text-blue-400 font-bold text-xl'>$1 035 000</p>
        </div>
        <p className='text-xl py-5'>LOS ANGELES</p>
        <div className='flex gap-3'>
            <div className='p-2 bg-blue-800 text-white rounded-3xl text-center'>
                168 m2
            </div>
            <div className='p-2 bg-blue-800 text-white rounded-3xl text-center'>
                7 rooms
            </div>
            <div className='p-2 bg-blue-800 text-white rounded-3xl text-center'>
                5 bedrooms
            </div>
        </div>
      </div>
    </div>
  )
}

export default HousePost
