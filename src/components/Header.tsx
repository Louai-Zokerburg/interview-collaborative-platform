import React from 'react'
import Logo from './Logo'
import UserBtn from './UserButton'

const Header = () => {
  return (
    <header className='bg-muted fixed top-0 w-full flex h-[60px] justify-between items-center px-4 py-2 border-b'>
      <Logo />

      <UserBtn />
    </header>
  )
}

export default Header