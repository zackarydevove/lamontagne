import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'

function Listing() {
  const [lastname, setLastname] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');


  return (
    <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center py-6 px-20'>
        {/* Images */}
        <div className='flex gap-5'>
          <div className='border h-[300px] md:h-[400px] lg:h-[550px] 2xl:w-[870px] xl:w-[717px] lg:w-[530px] md:w-[690px] w-[510px] max-w-[90vw] bg-sellbg bg-cover bg-center relative'>
            <div className='absolute top-3 right-3 bg-white rounded-full flex justify-center items-center p-1'>
             <AiOutlineHeart size={'1.5em'} />
            </div>
          </div>
          <div className='flex flex-col gap-5 max-lg:hidden 2xl:w-[600px] xl:w-[500px] lg:w-[366px]'>
            <div className='border lg:h-1/2 bg-loginbg bg-cover bg-center'/>
            <div className='border lg:h-1/2 bg-loginbg bg-cover bg-center'/>
          </div>
        </div>
        {/* End Images */}
        <div className='flex justify-center max-lg:flex-col gap-5 pt-5 lg:w-full md:w-[690px] w-[510px] max-w-[90vw] pb-8'>
          {/* Description */}
          <div className='2xl:w-[870px] xl:w-[717px] lg:w-[530px]'>
            <h1 className='text-[#013c84] font-bold text-4xl'>Appartement T5 Colombes</h1>
            <div className='pt-5 flex flex-col'>
              <p className='text-[#009ee3] text-3xl font-bold'>$499 900</p>
              <p className='text-[#009ee3] font-bold'>a partir de $2484 / mois</p>
              <div className='flex gap-3 pt-3 flex-wrap'>
                <div className='py-1 px-4 text-center bg-[#1c5eeb] text-white rounded-2xl'>95.38m2</div>
                <div className='py-1 px-4 text-center bg-[#1c5eeb] text-white rounded-2xl'>5 pieces</div>
                <div className='py-1 px-4 text-center bg-[#1c5eeb] text-white rounded-2xl'>3 chambres</div>
              </div>
            </div>
            <div className='pt-5 flex flex-col gap-3'>
              <h2 className='text-[#013c84] font-bold text-3xl'>Description</h2>
              <p className='text-[#828d99] text-lg'>Dans une résidence de standing de 2007, appartement de quatre pièces en duplex d'environ 95 m² avec belle terrasse de 50 m² exposée sud, avec vue dégagée.
                <br/>
                  Ce bien vous offre un salon/salle à manger très lumineux, une cuisine équipée et aménagée, trois belles chambres dont une avec placard et accès à un balcon de 10 m², une salle d'eau avec WC et une salle de bains avec wc.
                  <br/>
                  Deux places de stationnement et une cave complètent ce bien.
                  <br/>
                  Idéalement situé, au calme proche du T2 et des commerces.
                  <br/> <br/>
                  Conformément au Code monétaire (Articles L. 561-5 et suivants du Code monétaire et financier), une copie de votre pièce d'identité sera demandée pour toute visite.
                  <br/>
                  Avec votre agence LAFORET COLOMBES, numéro 1 de la confiance, estimation offerte et confidentielle de votre bien sous 24 heures.
                  <br/>
                  « Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : www.georisques.gouv.fr »
                  Honoraires à la charge du vendeur
                  <br/> <br/>
                  Montant moyen des charges annuelles : 4800 €</p>
            </div>
          </div>
          {/* End Description */}
          {/* Contact */}
          <div className='flex flex-col gap-4 p-4 pt-6 2xl:w-[600px] xl:w-[500px] lg:w-[366px] border-2 border-[#013c84] rounded-xl'>
            <p className='text-[#013c84] font-bold text-xl'>Vous souhaitez faire une visite ou poser une question ? Contactez-nous !</p>
            <p className='text-[#013c84] font-bold text-lg'>Laissez-nous vos coordonnees</p>
            <div>
              <p>Your lastname *</p>
              <div className='bg-[#f5f9fc] p-3 flex'>
                  <input className='bg-[#f5f9fc] w-full outline-none'
                         placeholder='Lastname'
                         value={lastname}
                         onChange={(e) => setLastname(e.target.value)}></input>
              </div>
            </div>
            <div>
              <p>Your firstname *</p>
              <div className='bg-[#f5f9fc] p-3 flex'>
                  <input className='bg-[#f5f9fc] w-full outline-none'
                         placeholder='Firstname'
                         value={firstname}
                         onChange={(e) => setFirstname(e.target.value)}></input>
              </div>
            </div>
            <div>
              <p>Your email *</p>
              <div className='bg-[#f5f9fc] p-3 flex'>
                  <input className='bg-[#f5f9fc] w-full outline-none'
                         placeholder='Email'
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}></input>
              </div>
            </div>
            <div>
              <p>Your phone number *</p>
              <div className='bg-[#f5f9fc] p-3 flex'>
                  <input className='bg-[#f5f9fc] w-full outline-none'
                         type='tel'
                         placeholder='XXX XXX XXX'
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}></input>
              </div>
            </div>
            <div className='flex-grow'>
              <p>Write a message *</p>
              <div className='bg-[#f5f9fc] p-3 flex h-5/6'>
                  <textarea className='resize-none bg-[#f5f9fc] w-full outline-none'
                         placeholder='Message'
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
            </div>
            <div className='flex gap-2 items-start'>
              <input type='checkbox' />
              <p className='text-sm'>J'accepte la politique de protection des données personnelles du réseau Laforêt accessible ici</p>
            </div>

            <div className='flex justify-center items-center'>
              <button className='py-2 px-8 rounded-3xl bg-gradient-to-r from-[#1abcfa] via-[#65deee] to-[#9af6e6] text-[#013c84] font-bold'>
                Send
              </button>
            </div>
          </div>
          {/* End Contact */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Listing
