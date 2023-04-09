import React from 'react'

function MySell(): JSX.Element {
  return (
    <div className='h-full flex flex-col'>
        {/* top */}
        <div className='h-20 bg-blue-500 flex items-center'>
            <p className='text-xl pl-12 text-white font-bold'>My Lamontagne account</p>
        </div>
        {/* bottom */}
        <div className='flex-grow flex justify-around items-center'>
            {/* left information */}
            <div className='p-5 w-[500px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-xl'>
                <div className='flex items-center gap-5 justify-center'>
                    <div className='w-14 h-14 bg-profileModify bg-cover bg-center'/>
                    <p className='text-xl font-bold'>My informations</p>
                </div>
                {/* Sex */}
                <div className='flex items-center gap-2 py-5 pt-8'>
                    <div className='flex gap-1'>
                        <input type='radio' name='sex' className='rounded-radio transition' />
                        <p className='text-gray-500'>M.</p>
                    </div>
                    <div className='flex gap-1'>
                        <input type='radio' name='sex' className='rounded-radio transition'/>
                        <p className='text-gray-500'>Mme</p>
                    </div>
                </div>
                {/* Inputs */}
                <div className='flex flex-col gap-4'>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Last name'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='First name'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Number phone'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Email'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Password'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                </div>
                {/* Delete account and Modify button */}
                <div className='flex items-center justify-between pb-4 pt-8'>
                    <p className='text-sm text-red-500'>Delete my account</p>
                    <div className='relative'>
                        <p className='text-xs text-green-500 absolute translate-y-[-100%]'>Profile modified!</p>
                        <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'>
                            Modify
                        </button>
                    </div>

                </div>

            </div>
            {/* right pictures */}
            <div className='p-5 w-[500px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-xl'>
                <div className='flex items-center gap-5 justify-center'>
                    <div className='w-14 h-14 bg-profileModify bg-cover bg-center'/>
                    <p className='text-xl font-bold'>My informations</p>
                </div>
                {/* Sex */}
                <div className='flex items-center gap-2 py-5 pt-8'>
                    <div className='flex gap-1'>
                        <input type='radio' name='sex' className='rounded-radio transition' />
                        <p className='text-gray-500'>M.</p>
                    </div>
                    <div className='flex gap-1'>
                        <input type='radio' name='sex' className='rounded-radio transition'/>
                        <p className='text-gray-500'>Mme</p>
                    </div>
                </div>
                {/* Inputs */}
                <div className='flex flex-col gap-4'>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Last name'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='First name'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Number phone'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Email'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' min='0' placeholder='Password'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                </div>
                {/* Delete account and Modify button */}
                <div className='flex items-center justify-between pb-4 pt-8'>
                    <p className='text-sm text-red-500'>Delete my account</p>
                    <div className='relative'>
                        <p className='text-xs text-green-500 absolute translate-y-[-100%]'>Profile modified!</p>
                        <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'>
                            Modify
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default MySell
