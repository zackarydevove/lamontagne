import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search'
import Footer from '../../components/Footer';
import BuyingAdvice from '../../components/BuyingAdvice';
import { BsTrophyFill } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';
import { BiTransferAlt } from 'react-icons/bi';
import { GiFrance } from 'react-icons/gi';

function Home() {
  return (
    <div>
      <div className=' flex flex-col h-screen'>
        <Navbar />
        <div className='bg-homebg bg-cover bg-center flex-grow flex justify-center items-center'>
          <Search />
        </div>
      </div>
        <div className='bg-white pb-8 pt-14 px-48'>
          <h1 className='text-4xl font-bold'>Trouver son bien en location avec une agence Laforêt ?</h1>
          <h1 className='text-4xl font-bold'>Rien de plus simple.</h1>
          <p className='pt-5 text-xl'>Vous souhaitez louer un appartement ou une maison ? Nos agences Laforêt se tiennent à votre écoute pour vous accompagner dans votre recherche de location et vous proposer le bien immobilier qui correspond à vos attentes.</p>
        </div>

        {/* Steps */}
        <div className='px-32 py-20 bg-[#f5f9fc] text-[#013c84]'>
          <div className='flex gap-10'>
            <div className='w-1/4 flex flex-col items-center'> 
              <div className='h-32 w-32 p-1 border-2 border-[#013c84] rounded-full flex justify-center items-center'>
                  <div className='h-28 w-28 rounded-full bg-step1 bg-cover bg-center'/>
              </div>
              <p className='text-center pt-5 text-xl font-bold'>ETAPE 1: VISIT</p>
              <p className='text-center pt-10 text-md'>Faites visiter et estimer votre bien en vision accompagne de votre agent immobilier lamontagne</p>
            </div>

            <div className='w-1/4 flex flex-col items-center'> 
              <div className='h-32 w-32 p-1 border-2 border-[#013c84] rounded-full flex justify-center items-center'>
                  <div className='h-28 w-28 rounded-full bg-step2 bg-cover bg-center'/>
              </div>
              <p className='text-center pt-5 text-xl font-bold'>ETAPE 2: DEPOSIT YOUR FOLDER</p>
              <p className='text-center pt-10 text-md'>Achetez un bien immobilier couvert pendant 24 mois en cas de vices cachés !</p>
            </div>

            <div className='w-1/4 flex flex-col items-center'> 
              <div className='h-32 w-32 p-1 border-2 border-[#013c84] rounded-full flex justify-center items-center'>
                  <div className='h-28 w-28 rounded-full bg-step3 bg-cover bg-center'/>
              </div>
              <p className='text-center pt-5 text-xl font-bold'>ETAPE 3: SIGN</p>
              <p className='text-center pt-10 text-md'>La signature électronique est simple, fluide et 100% sécurisée</p>
            </div>

            <div className='w-1/4 flex flex-col items-center'> 
              <div className='h-32 w-32 p-1 border-2 border-[#013c84] rounded-full flex justify-center items-center'>
                  <div className='h-28 w-28 rounded-full bg-step4 bg-cover bg-center'/>
              </div>
              <p className='text-center pt-5 text-xl font-bold'>ETAPE 4: TAKE THE KEYS</p>
              <p className='text-center pt-10 text-md'>Des photos d’un professionnel pour metre en valeur votre bien</p>
            </div>
          </div>
        </div>

        {/* Data */}
        <div className='bg-white px-32 py-10 flex gap-48 justify-center items-center text-[#013c84]'>
          <div className='flex flex-col justify-center items-center'>
            <BsTrophyFill size={'2.3em'} />
            <h1 className='text-2xl font-extrabold'>92%</h1>
            <p>OF SATISFIED CLIENTS</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <FaMedal size={'2.3em'} />
            <h1 className='text-2xl font-extrabold'>31 years</h1>
            <p>OF EXPERIENCE</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <BiTransferAlt size={'2.3em'} className='text-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6]' />
            <h1 className='text-2xl font-extrabold'>45000</h1>
            <p>ANNUAL TRANSACTIONS</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <GiFrance size={'2.3em'} />
            <h1 className='text-2xl font-extrabold'>720</h1>
            <p>AGENCIES</p>
          </div>
        </div>
        <BuyingAdvice />
        <Footer />
    </div>
  )
}

export default Home
