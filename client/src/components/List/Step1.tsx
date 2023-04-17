import React from 'react'
import { useState } from 'react'
import { BsFillHouseDoorFill, BsFillBuildingFill } from 'react-icons/bs';
import { MdLocationOn, MdLocationSearching } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { FaUsers, FaMedal } from 'react-icons/fa';

// ADDRESS and city
function Step1() {
  const [type, setType] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [msquare, setMsquare] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);

  return (
    <div className='flex-grow flex'>
      {/* Left */}
      <div className='w-1/2 h-full p-20'>
            <h1 className='pb-20 text-[#143d8a] font-bold text-4xl'>Estimez gratuitement votre bien en ligne avec Laforêt en 3 minutes</h1>
            <div className='flex gap-2'>
              <MdLocationOn className='w-7 h-7' />
              <h1 className='text-[#143d8a] font-bold text-2xl'>Address of  your property</h1>
            </div>
            <div className='pt-7'>
                <div className='p-3 flex items-center bg-[#f5f9fc] w-1/2'>
                    <input className='flex-grow bg-[#f5f9fc] outline-none text-[#20a1d7]'
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}></input>
                    <MdLocationSearching className='w-5 h-5'/>
                </div>
            </div>

            <div className='flex gap-4 pt-10'>
              <div className='flex flex-col items-center gap-3 w-1/3'>
                <AiFillLock className='w-12 h-12'/>
                <p className='text-[#143d8a] font-bold text-center'>TOUTES VOS DONNÉES SONT TRAITÉES DE MANIÈRE CONFIDENTIELLES</p>
                <p className='text-gray-500 font-bold text-center'>Laforêt s'engage à ne pas partager vos données à des services tiers.</p>
              </div>
              <div className='flex flex-col items-center gap-3 w-1/3'>
                <FaUsers className='w-12 h-12'/>
                <p className='text-[#143d8a] font-bold text-center'>FAITES ESTIMER PAR UN PROFESSIONNEL IMMOBILIER LOCAL</p>
                <p className='text-gray-500 font-bold text-center'>Estimer son bien avec Laforêt, c'est bénéficier de l'expertise local d'un réseau national.</p>
              </div>
              <div className='flex flex-col items-center gap-3 w-1/3'>
                <FaMedal className='w-12 h-12'/>
                <p className='text-[#143d8a] font-bold text-center'>UN TRAVAIL D’EXPERTS DEPUIS PLUS DE 31 ANS</p>
                <p className='text-gray-500 font-bold text-center'>Estimer son bien avec laforêt c’est bénéficier de l’expertise d’un réseau de 720 agences partout en France.</p>
              </div>
            </div>
  
  
            <div className='pt-20'>
              <hr />
            </div>
  
            <div className='pt-20 flex justify-end'>
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

export default Step1
