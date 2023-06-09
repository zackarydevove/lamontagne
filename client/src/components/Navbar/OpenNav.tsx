import React from 'react'
import { RxCross2 } from 'react-icons/rx'

interface OpenNavProps {
    setOpenNav: (open: boolean) => void;
}

function OpenNav({ setOpenNav }: OpenNavProps) {

  return (
    <div className='absolute top-0 left-0 flex w-full h-screen max-h-screen z-[60] text-white'>
        <div className='bg-[#143d8a] w-[275px] max-w-screen flex flex-col'>
            <div className='flex justify-end p-3'
                onClick={() => setOpenNav(false)}>
                <RxCross2 size={'2.3em'}/>
            </div>

            {/* Logo */}
            <div className='px-3'>
                <div className='h-12 bg-logo2 bg-cover bg-center'/>
            </div>

            {/* Nav buttons */}
            <div className='flex flex-col items-start p-5 gap-5'>
                <div className='flex items-center gap-3'>
                    <RxCross2 size={'1.8em'}/>
                    <p className='text-xl'>Sell</p>
                </div>
                <div className='flex items-center gap-3'>
                    <RxCross2 size={'1.8em'}/>
                    <p className='text-xl'>Buy</p>
                </div>
                <div className='flex items-center gap-3'>
                    <RxCross2 size={'1.8em'}/>
                    <p className='text-xl'>Rent</p>
                </div>
            </div>

        </div>

        {/* Black background */}
        <div className='bg-black bg-opacity-20 flex-grow'
            onClick={() => setOpenNav(false)}/>
      
    </div>
  )
}

export default OpenNav
