import React from 'react'
import { FaUser } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiMenuAlt2 } from 'react-icons/hi'
import { useState } from 'react'
import OpenNav from './OpenNav'

function Navbar() {
    const [user, setUser] = useState({});
    const [openNav, setOpenNav] = useState(false);

    const handleClick = () => {
        setOpenNav(prev => !prev);
    }

  return (
    <div className='mx-auto w-full z-50 bg-white'>
        {
            openNav
            ? <OpenNav setOpenNav={setOpenNav} />
            : null
        }
        <div className='flex justify-between h-20 w-full'>

            {/* Left */}
            <div className='flex items-center pl-5'>

                {/* Logo */}
                <a href='/' className='flex items-center bg-black w-12 h-12'/>

                {/* Nav Buttons */}
                <div className='flex items-center pl-5'>
                    <div className='hidden xl:flex items-center ml-4 xl:gap-8'>
                        <a href='/sell' className='w-full block relative'>
                            <div className='flex justify-between'>
                                <div className='flex items-center text-xl hover:text-gray-700'>Sell</div>
                            </div>
                        </a>
                        <a href='/buy' className='w-full block relative'>
                            <div className='flex justify-between'>
                                <div className='flex items-center text-xl hover:text-gray-700'>Buy</div>
                            </div>
                        </a>
                        <a href='/rent' className='w-full block relative'>
                            <div className='flex justify-between'>
                                <div className='flex items-center text-xl hover:text-gray-700'>Rent</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className='flex items-center h-full max-xl:pr-5'>
                <div className='block xl:hidden h-full pr-5'>
                    <div className={`flex h-full p-5 transition ${openNav ? 'bg-[#143d8a] text-white' : ''}`}>
                        <button className='m-auto h-full'
                            onClick={handleClick}>
                            <HiMenuAlt2 size={'2.5em'}/>
                        </button>
                    </div>
                </div>

                <div className='flex items-center h-full'>
                    <a href={`/favorites/${user}`}
                        className='flex h-full items-center font-bold hover:text-gray-700'>
                        <AiOutlineHeart size={'2em'}/>
                        <p className='hidden xl:block text-xl pr-5 pl-2'>My favorites</p>
                    </a>
                    <a href={`/profile/${user}`}
                        className='hidden xl:flex h-full items-center font-bold bg-gray-500 p-5 bg-gradient-to-b from-[#1abcfa] via-[#65deee] to-[#9af6e6] hover:text-gray-700'>
                        <FaUser size={'1.8em'} />
                        <p className='text-xl pl-2'> My account</p>
                    </a>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
