import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer'
import Step1 from '../../../components/List/Step1'
import Step2 from '../../../components/List/Step2'
import Step3 from '../../../components/List/Step3'
import Step4 from '../../../components/List/Step4'
import Step5 from '../../../components/List/Step5'
import { useState } from 'react'

function List(): JSX.Element {
    const [type, setType] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [step, setStep] = useState(1);

  return (
      <div>
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='h-7 flex'>
                <div className={`w-${step}/4 bg-blue-700 flex justify-end items-center`}>
                    <p className='text-white pr-2 text-sm'>STEP {step} ON 4</p>
                </div>
                <div className='flex-grow bg-blue-300'/>
            </div>
            <Step5 />
        </div>
        <Footer />
    </div>
  )
}

export default List
