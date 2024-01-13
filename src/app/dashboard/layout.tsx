import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='min-h-screen w-full'>
            <Header />
            <Sidebar />
            {children}
        </main>
    )
}

export default layout