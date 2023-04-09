import React from 'react';
import { useState } from 'react';
import BuySearch from './Search/BuySearch';
import RentSearch from './Search/RentSearch';

type selectedTab = 'Buy' | 'Rent';

function Search(): JSX.Element {
    const [selected, setSelected] = useState<selectedTab>('Buy');

    const renderSearchComponent = () => {
        switch (selected) {
          case 'Buy':
            return <BuySearch />;
          case 'Rent':
            return <RentSearch />;
          default:
            return null;
        }
      };

  return (
    <div>

        <div className='text-[#143d8a] pb-12 font-bold flex flex-col justify-center items-center'>
            <p className='text-7xl'>Found your home</p>
            <p className='text-3xl'>N°1 of trust in 12 years</p>

        </div>

        <div className='xl:w-[900px] xl:h-[360px] bg-white'>
            {/* Top */}
            <div className='flex w-full h-12'>
                <div className={`w-1/2 font-bold flex justify-center items-center hover:cursor-pointer ${selected === 'Buy' ? 'bg-[#1c5eeb] text-white' : 'bg-[#e1e9f0] text-[#143d8a]'}`}
                onClick={() => setSelected('Buy')}>
                    Buy
                </div>
                <div className={`w-1/2 font-bold flex justify-center items-center hover:cursor-pointer ${selected === 'Rent' ? 'bg-[#1c5eeb] text-white' : 'bg-[#e1e9f0] text-[#143d8a]'}`}
                onClick={() => setSelected('Rent')}>
                    Rent
                </div>
            </div>

            {/* Bottom */}
            <div>
                {renderSearchComponent()}
            </div>
        </div>
      
    </div>
  )
}

export default Search
