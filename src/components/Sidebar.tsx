
import React from 'react'
import NavLinks from './NavLinks'


const Sidebar = () => {

    return (
        <aside className='bg-muted fixed left-0 top-[60px] w-[88px] border-r h-[calc(100vh-60px)] flex flex-col justify-between items-center p-2'>

            <NavLinks />


        </aside>
    )
}

export default Sidebar