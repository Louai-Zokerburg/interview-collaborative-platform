'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import { FaCode, FaCog, FaUserCircle } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"


const NavLinks = () => {

    const pathname = usePathname()

    return (
        <>
            <ul className='nav-links'>
                <Link href='/dashboard' className={`nav-link ${pathname === '/dashboard' && 'selected-nav-link'}`}>
                    <FaHouse size={20} />
                    <p className='text-xs'>Dashboard</p>
                </Link>


                <Link href='/dashboard/interviews' className={`nav-link ${pathname.includes('/dashboard/interviews') && 'selected-nav-link'}`}>
                    <FaCode size={20} />
                    <p className='text-xs'>Interviews</p>
                </Link>


                <Link href='/dashboard/profile' className={`nav-link ${pathname === '/dashboard/profile' && 'selected-nav-link'}`}>
                    <FaUserCircle size={20} />
                    <p className='text-xs'>Profile</p>
                </Link>

            </ul>

            <Link href='/dashboard/settings' className={`nav-link ${pathname === '/dashboard/settings' && 'selected-nav-link'}`}>
                <FaCog size={20} />
                <p className='text-xs'>Settings</p>
            </Link>
        </>
    )
}

export default NavLinks