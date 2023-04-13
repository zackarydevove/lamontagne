import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { login } from '../../api/auth'
import { getToken } from '../../utils/getToken';
import { setUser } from '../../reducers/userSlice';
import { useDispatch } from 'react-redux';
import { User } from '../../types/userType';

interface LoginResponse {
    user: User,
    message: string,
    token: string,
}

function Login(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // If user already have a JWT stored in his browser
    // Then redirect him directly to his profile
    useEffect(() => {
        const token: string | null = getToken();
        if (token) {
            navigate('/profile');
        }
      }, []);

    // onClick, try to login the user
    // if successfull, setUser information in the slice and redirect him to his profile
    // Else if an error occured, show the error
    const handleClick = async () => {
        try {
            const res: LoginResponse | null = await login(email, password);
            console.log('res in login:', res);
            if (res && res.message === 'Successfully Authenticated') {
                if (res.user) {
                    dispatch(setUser(res.user));
                }
                navigate('/profile')
            } else if (res) {
                setError(res.message);
            }
        } catch (err) {
            console.error(err);
        }
    };


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
                            {
                                error ?
                                <div className='bg-[#f8d7da] p-3 flex items-center border border-[#b57a7f] border-opacity-25'>
                                    <p className='w-full text-lg text-[#7c3863] font-bold'>{error}</p>
                                    <RxCross2 size={'2em'} onClick={() => setError('')}/>
                                </div>
                                : null
                            }
                            <div className='bg-[#f5f9fc] p-3 flex'>
                                <input className='bg-[#f5f9fc] w-full outline-none'
                                    value={email}
                                    onChange={(e) =>  setEmail(e.target.value)}></input>
                                <p className='text-[#8c96ab]'>Email</p>
                            </div>
                            <div className='bg-[#f5f9fc] p-3 flex'>
                                <input className='bg-[#f5f9fc] w-full outline-none'
                                    value={password}
                                    onChange={(e) =>  setPassword(e.target.value)}></input>
                                <p className='text-[#8c96ab]'>Password</p>
                            </div>
                        </div>
                        <div className='p-10'>
                            <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'
                                onClick={handleClick}>
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
