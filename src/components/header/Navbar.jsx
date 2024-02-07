import { LogoSvg, SettingsSvg } from '@/svgs'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full p-3 flex items-center justify-between px-4'>
      <div className='rounded-full object-cover h-8 w-8 border'></div>
      <LogoSvg />
      <SettingsSvg />
    </nav>
  )
}

export default Navbar