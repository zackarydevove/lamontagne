import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';
import MyProfile from '../../components/Profile/MyProfile';
import MySell from '../../components/Profile/MySell';
import MyFavorites from '../../components/Profile/MyFavorites';

type SelectedTab = 'profile' | 'favorite' | 'sell'

function Profile(): JSX.Element {
    const [selected, setSelected] = useState<SelectedTab>('profile');

    const renderSearchComponent = () => {
        console.log('slected', selected);
        switch (selected) {
          case 'profile':
            return <MyProfile />;
          case 'favorite':
            return <MyFavorites />;
            case 'sell':
              return <MySell />;
          default:
            return null;
        }
      };

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
                        <div className={`rounded-l-full ${selected === 'sell' ? 'bg-[#099bd6]' : ''} p-3 flex items-center hover:cursor-pointer`}
                            onClick={() => setSelected('sell')}>
                            <div className='ml-5 h-12 w-12 bg-black rounded-full'/>
                            <p className='px-10'>Sell / Rent my house</p>
                        </div>
                    </div>

                    {/* Logout */}
                    <div className='flex justify-center items-center'>
                        <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'>
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
