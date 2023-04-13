import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';

function MyProfile(): JSX.Element {
    const [firstname, setFirstname] = useState<string | undefined>('');
    const [lastname, setLastname] = useState<string | undefined>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string | undefined>('');
    const [password, setPassword] = useState<string>('');
    
    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        setFirstname(user?.firstname);
        setLastname(user?.lastname);
        setEmail(user?.email);
    }, [user]);

  return (
    <div className='h-full flex flex-col'>
        {/* top */}
        <div className='h-20 bg-blue-500 flex items-center'>
            <p className='text-xl pl-12 text-white font-bold'>My Lamontagne account</p>
        </div>
        {/* bottom */}
        <div className='flex-grow flex justify-center items-center'>
            {/* Profile's information box */}
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
                        <input type='text'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder='Last name'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder='First name'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text' 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder='Number phone'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                    </div>
                    <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                        <input type='text'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
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

export default MyProfile
