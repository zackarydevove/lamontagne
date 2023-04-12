import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import MyProfile from '../../components/Profile/MyProfile';
import MySell from '../../components/Profile/MyListings';
import MyFavorites from '../../components/Profile/MyFavorites';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/auth';

type SelectedTab = 'profile' | 'favorite' | 'listing'

// Option preSelection if user click on Sell from the Navbar
interface Props {
    preSelected?: SelectedTab;
}

function Profile(props: Props): JSX.Element {
    const [selected, setSelected] = useState<SelectedTab>(props.preSelected || 'profile');
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res: {user: object, message: string} | null = await getUser();
                if (res?.message !== 'User found') {
                    navigate('/login');
                } else {
                    setUser(res.user);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }, [])

    const renderSearchComponent = () => {
        switch (selected) {
          case 'profile':
            return <MyProfile />;
          case 'favorite':
            return <MyFavorites />;
            case 'listing':
              return <MySell />;
          default:
            return null;
        }
      };

      const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/');
      }

  return (
    <div> 
        <div className='h-screen flex flex-col '>
            <Navbar />

            <div className='flex-grow flex'>
                {/* Left */}
                <div className='w-80 h-full bg-[#143d8a] flex-shrink-0'>
                    <div className='h-1/3 flex justify-center items-center gap-1 text-white'>
                        <p className='text-2xl'>Hello</p>
                        <p className='text-2xl font-bold'>Demo</p>
                    </div>


                    {/* Profile nav */}
                    <div className='flex flex-col gap-5 pb-16 text-white font-bold'>
                        <div className={`rounded-l-full ${selected === 'profile' ? 'bg-[#099bd6]' : ''} p-3 flex items-center hover:cursor-pointer`}
                            onClick={() => setSelected('profile')}>
                            <div className='ml-5 h-12 w-12 bg-black rounded-full'/>
                            <p className='px-10'>My profile</p>
                        </div>
                        <div className={`rounded-l-full ${selected === 'favorite' ? 'bg-[#099bd6]' : ''} p-3 flex items-center hover:cursor-pointer`}
                            onClick={() => setSelected('favorite')}>
                            <div className='ml-5 h-12 w-12 bg-black rounded-full'/>
                            <p className='px-10'>My favorites</p>
                        </div>
                        <div className={`rounded-l-full ${selected === 'listing' ? 'bg-[#099bd6]' : ''} p-3 flex items-center hover:cursor-pointer`}
                            onClick={() => setSelected('listing')}>
                            <div className='ml-5 h-12 w-12 bg-black rounded-full'/>
                            <p className='px-10'>My listing</p>
                        </div>
                    </div>

                    {/* Logout */}
                    <div className='flex justify-center items-center'>
                        <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold hover:text-white'
                            onClick={handleLogout}>
                            LOGOUT
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className='flex-grow h-full'>
                    {renderSearchComponent()}
                </div>
            </div>

        </div>
      
        <Footer />
    </div>
  )
}

export default Profile
