import React from 'react'
import { useState } from 'react'

// Price, Description
function Step4() {
  const [msquare, setMsquare] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  return (
    <div className='flex-grow flex'>
      {/* Left */}
      <div className='w-1/2 h-full p-20'>
            <h1 className='pb-10 text-[#143d8a] font-bold text-5xl'>Details of your property</h1>
            <div className='pt-7'>
                    <p className='text-[#143d8a] font-bold text-2xl'>Description</p>
                    <p className='py-2 text-gray-500 text-lg'>La cuisine, la salle de bain et les toilettes ne sont pas à prendre en compte</p>
                    <textarea className='bg-[#f5f9fc] w-full h-36 p-3 outline-none'></textarea>
            </div>
            <div className='pt-7 w-1/2'>
              <p className='pb-3 text-[#143d8a] font-bold text-2xl'>Price</p>
              <div className='p-3 flex bg-[#f5f9fc]'>
                  <input className='flex-grow bg-[#f5f9fc] outline-none'
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}></input>
                  <p>$</p>
              </div>
            </div>

            <div className='pt-20'>
                <hr />
            </div>
            
            <div className='pt-20 flex justify-between'>
                <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#979797] via-[#AEAEAE] to-[#C5C5C5] text-white font-bold
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

export default Step4
