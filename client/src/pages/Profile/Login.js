import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

function Login() {
  return (
    <div>
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-grow'>

                {/* Left picture */}
                <div className='max-lg:hidden w-1/2 bg-loginbg bg-cover bg-center'/>

                {/* Right login */}
                <div className='w-full lg:w-1/2 p-28 bg-[#f9f9f9] h-full flex justify-center items-center'>
                    <div className='w-full h-fit bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]'>
                        <div className='flex justify-center items-center p-10'>
                            <h1 className='text-[#02408f] font-extrabold text-xl'>Already have an account?</h1>
                        </div>
                        <div className='flex flex-col p-10 gap-5'>
                            <div className='bg-[#f5f9fc] p-3 flex'>
                                <input className='bg-[#f5f9fc] w-full outline-none'></input>
                                <p className='text-[#8c96ab]'>Email</p>
                            </div>
                            <div className='bg-[#f5f9fc] p-3 flex'>
                                <input className='bg-[#f5f9fc] w-full outline-none'></input>
                                <p className='text-[#8c96ab]'>Password</p>
                            </div>
                        </div>
                        <div className='p-10'>
                            <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'>
                                LOGIN
                            </button>
                        </div>
                        <div className='flex gap-1 p-10 justify-center items-center'>
                            <h1 className='text-[#02408f] font-extrabold text-xl'>No account?</h1>
                            <a href='/register' className='text-[#0b9bd7] font-extrabold text-xl'>Register</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


        <Footer />
    </div>
  )
}

export default Login
