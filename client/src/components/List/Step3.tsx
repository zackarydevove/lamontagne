import React from 'react'
import { useState } from 'react'

// m2, rooms, bedrooms
function Step3() {
    const [msquare, setMsquare] = useState<number>(0);
    const [rooms, setRooms] = useState<number>(0);
    const [bedrooms, setBedrooms] = useState<number>(0);

  return (
    <div className='flex-grow flex'>
      {/* Left */}
      <div className='w-1/2 h-full p-20'>
            <h1 className='pb-20 text-[#143d8a] font-bold text-5xl'>Details of your property</h1>
            <h1 className='text-[#143d8a] font-bold text-3xl'>Surface habitable de votre bien</h1>
            <p className='pt-5 text-gray-500 font-bold'>Pour calculer votre superficie loi Carrez, mesurez vos pièces une par une depuis l’intérieur des murs et cloisons.</p>
            <div className='pt-7'>
                <p className='pb-3 text-[#143d8a] font-bold text-2xl'>Surface</p>
                <div className='p-3 flex bg-[#f5f9fc] w-1/2'>
                    <input className='flex-grow bg-[#f5f9fc] outline-none'
                        type='number'
                        value={msquare}
                        onChange={(e) => setMsquare(Number(e.target.value))}></input>
                    <p>m²</p>
                </div>
            </div>

            <div className='pt-7 flex items-center justify-between'>
                <div>
                    <p className='text-[#143d8a] font-bold text-2xl'>Nombre de pieces</p>
                    <p className='pt-2 text-gray-500 text-lg'>La cuisine, la salle de bain et les toilettes ne sont pas à prendre en compte</p>
                    <div className='pt-4 flex gap-2'>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#1c5eeb] text-white rounded-full p-4 hover:cursor-pointer'
                            onClick={() => setRooms(prev => prev - 1)}>+</div>
                        <input className='bg-[#f5f9fc] text-center outline-none'
                                type='number'
                                value={rooms}
                                onChange={(e) => setRooms(Number(e.target.value))}></input>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#1c5eeb] text-white rounded-full p-4 hover:cursor-pointer'
                            onClick={() => setRooms(prev => prev + 1)}>+</div>
                    </div>
                </div>
                <div>
                    <p className='text-[#143d8a] font-bold text-2xl'>Nombre de chambres</p>
                    <p className='pt-2 text-gray-500 text-lg'>Pour être comptabiliser, les chambres doivent faire 8m² minimum</p>
                    <div className='pt-4 flex gap-2'>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#1c5eeb] text-white rounded-full p-4 hover:cursor-pointer'
                            onClick={() => setBedrooms(prev => prev - 1)}>-</div>
                        <input className='bg-[#f5f9fc] text-center outline-none'
                                type='number'
                                value={bedrooms}
                                onChange={(e) => setBedrooms(Number(e.target.value))}></input>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#1c5eeb] text-white rounded-full p-4 hover:cursor-pointer'
                            onClick={() => setBedrooms(prev => prev + 1)}>+</div>
                    </div>
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
                <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold
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

export default Step3
