import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search'

function Home() {
  return (
    <div className=' flex flex-col h-screen'>
      <Navbar />
      <div className='bg-homebg bg-cover bg-center flex-grow flex justify-center items-center'>
        <Search />
      </div>
    </div>
  )
}

export default Home
