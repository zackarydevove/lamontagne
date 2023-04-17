import React from 'react'
import { useState } from 'react'
import { AiFillPicture } from 'react-icons/ai'

// Pictures
function Step5() {
    const [type, setType] = useState<string>('');
    const [msquare, setMsquare] = useState<number>(0);
    const [rooms, setRooms] = useState<number>(0);
    const [bedrooms, setBedrooms] = useState<number>(0);

  return (
    <div className='flex-grow flex'>
      {/* Left */}
      <div className='w-1/2 h-full p-20'>
            <h1 className='pb-20 text-[#143d8a] font-bold text-5xl'>Pictures</h1>
            <p className='pt-5 text-gray-500 font-bold'>Please add pictures of your property</p>
            
            <div className='pt-5 flex gap-10'>
                <div className='relative w-[220px] h-[220px] border-2 flex flex-col justify-end p-7 items-center gap-5 hover:cursor-pointer transition'>
                <AiFillPicture className='text-gray-500 w-full h-full relative'/>
                </div>
            </div>
  
  
            <div className='pt-20'>
              <hr />
            </div>
  
            <div className='pt-20 flex justify-between'>
                <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#979797] via-[#AEAEAE] to-[#C5C5C5] text-white font-bold transition
                                        hover:bg-[#009ee3] hover:text-white'>
                        PREV
                </button>
                <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold transition
                                        hover:bg-[#009ee3] hover:text-white'>
                        NEXT
                </button>
            </div>
      </div>
      {/* Right */}
      <div className='w-1/2 h-full p-20 bg-[#f5f9fc]'>
      <h1 className='pb-20 text-[#143d8a] font-bold text-4xl'>Your property</h1>
      <div className='flex'>
        <div className='w-1/2'>
            <p className='pb-5 text-[#143d8a] font-bold text-lg'>Address</p>
            <p className='text-gray-500 font-bold'>32 Rue Lecourbe</p>
            <p className='text-gray-500 font-bold'>75015 Paris</p>
        </div>
        <div className='w-1/2'>
            <p className='pb-5 text-[#143d8a] font-bold text-lg'>Essentials</p>
            <p className='text-gray-500 font-bold'>House</p>
            <p className='text-gray-500 font-bold'>{msquare} m²</p>
            <p className='text-gray-500 font-bold'>{rooms} rooms</p>
            <p className='text-gray-500 font-bold'>{bedrooms} bedrooms </p>
        </div>
      </div>
  
      </div>
    </div>
  )
}

export default Step5
