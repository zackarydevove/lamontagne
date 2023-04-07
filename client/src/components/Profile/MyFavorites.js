import React from 'react'
import HousePost from '../HousePost'

function MyFavorites() {
  return (
    <div className='flex flex-col h-full'>
        {/* top */}
        <div className='h-20 bg-blue-500 flex items-center'>
            <p className='text-xl pl-12 text-white font-bold'>My favorites</p>
        </div>
        {/* bottom */}
        <div className='flex p-5 gap-5 overflow-y-scroll'>
            
            {/* One house */}
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>
            <HousePost/>

        </div>
    </div>
  )
}

export default MyFavorites
