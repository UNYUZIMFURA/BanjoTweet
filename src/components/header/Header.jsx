import React from 'react'
import Navbar from './Navbar'
import SwitchButtons from './SwitchButtons'

const Header = () => {
  return (
    <div className='h-[6.6rem] w-full flex flex-col items-center'>
        <Navbar />
        <SwitchButtons />
    </div>
  )
}

export default Header