import React from 'react'
import HousePost from '../HousePost'

function MySell(): JSX.Element {
  return (
    <div className='flex flex-col h-full'>
        {/* top */}
        <div className='h-20 bg-blue-500 flex items-center'>
            <p className='text-xl pl-12 text-white font-bold'>My listings</p>
        </div>
        {/* bottom */}
        <div className='h-full flex flex-wrap p-5 gap-5 overflow-hidden'>
            {/* One house */}
            <HousePost/>
            <HousePost/>
            <HousePost/>
        </div>
    </div>
  )
}

export default MySell
