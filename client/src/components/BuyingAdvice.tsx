import React from 'react'

function BuyingAdvice(): JSX.Element {
  return (
    <div className='bg-[#f5f9fc] px-20 py-10 pb-20 flex flex-col text-[#013c84] font-bold items-center'>
        <div>
            {/* Top */}
            <div>
                <h1 className='text-5xl py-5 pb-10'>Our advices to buy better</h1>
            </div>

            {/* Middle */}
            <div className='flex gap-7 justify-center'>
                <div className=' h-[330px] flex shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]'>
                    <div className='flex-shrink-0 w-[210px] bg-orange-200'/>
                    <div className='flex-grow bg-white p-3 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-'>OUR ADVICES</p>
                            <p className='text-2xl font-extrabold'>Guide pour acheter</p>
                            <p className='text-sm text-gray-500'>Acheter un bien immobilier est un operation complexe: les prix des biens, les...</p>
                        </div>
                        <p className='text-xl'>En savoir plus</p>
                    </div>
                </div>

                <div className='h-[330px] flex shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]'>
                    <div className='flex-shrink-0 w-[210px] bg-orange-200'/>
                    <div className='flex-grow bg-white p-3 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-'>OUR ADVICES</p>
                            <p className='text-2xl font-extrabold'>Guide pour acheter</p>
                            <p className='text-sm text-gray-500'>Acheter un bien immobilier est un operation complexe: les prix des biens, les...</p>
                        </div>
                        <p className='text-xl'>En savoir plus</p>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className='flex justify-end'>
                <h1 className='text-lg py-5 pb-10 underline'>See all our advices</h1>
            </div>
        </div>
    </div>
  )
}

export default BuyingAdvice
