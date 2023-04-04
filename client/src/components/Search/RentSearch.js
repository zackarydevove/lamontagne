import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs';

function RentSearch() {
  return (
    <div className='p-7 px-10'>

        {/* Search */}
        <div className='flex gap-6'>
            <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                <input type='text' placeholder='Which city ? Area ?'
                    className='bg-[#f5f9fc] outline-none flex-grow'>
                </input>
                    <AiOutlineSearch size={'2em'}/>
            </div>
            <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                <p></p>
                <BsCurrencyDollar />
                <input type='number' min='0' placeholder='0'
                    className='bg-[#f5f9fc] outline-none flex-grow'>
                </input>
                <p className=''>Max budget</p>
            </div>
        </div>

        {/* Filter */}
        <div className='flex justify-center items-center py-5'>
            <ul className='flex gap-3'>
                <li className='flex border border-gray-500 px-1 rounded-lg gap-1'>
                    <input type='checkbox'/>
                    <p className='text-lg'>House</p>
                </li>
                <li className='flex border border-gray-500 px-1 rounded-lg gap-1'>
                    <input type='checkbox'/>
                    <p className='text-lg'>Appartment</p>
                </li>
                <li className='flex border border-gray-500 px-1 rounded-lg gap-1'>
                    <input type='checkbox'/>
                    <p className='text-lg'>Field</p>
                </li>
            </ul>
        </div>

        {/* Good founded */}
        <div className='flex justify-center items-center py-5'>
            <p className='text-xl text-gray-500'>3494 property founded!</p>
        </div>

        {/* Search Button */}
        <div className='flex justify-center items-center pb-5'>
            <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'>
                Search
            </button>
        </div>
    </div>
  )
}

export default RentSearch
