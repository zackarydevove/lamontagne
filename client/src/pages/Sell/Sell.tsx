import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

function Sell(): JSX.Element {
  return (
    <div>
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-col bg-sellbg bg-cover bg-center flex-grow justify-center items-center'>

            <div className='text-[#143d8a] pb-12 font-bold flex flex-col justify-center items-center'>
                <p className='text-5xl'>Vendre sereinement avec Lamontagne</p>
                <p className='text-3xl'>N°1 de la confiance depuis 12 ans</p>
            </div>

            <div className='p-6 px-10 flex flex-col justify-around items-center xl:w-[900px] xl:h-[250px] bg-white'>
                <p className='text-[#143d8a] font-bold'>Estimez votre bien en ligne avec Laforêt en 3 minutes</p>
                <div className='h-[60px] w-full bg-[#f5f9fc] flex items-center px-5'>
                    <input type='text' 
                            min='0' 
                            placeholder="Saisissez l'adresse du bien a estimer et selectionner la suggestion"
                            className='bg-[#f5f9fc] outline-none flex-grow'/>
                </div>
                <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold
                                    hover:bg-[#009ee3] hover:text-white'>
                    ESTIMATE MY HOUSE ONLINE
                </button>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Sell
