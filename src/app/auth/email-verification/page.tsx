import createSupabaseServereComponentClient from '@/lib/supabase/createSupabaseServereComponentClient'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const supabase = createSupabaseServereComponentClient()

    const { data: { session } } = await supabase.auth.getSession()

    if (session) {
        redirect('/')
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <h1 className="text-4xl">
                Verify your email
            </h1>
        </div>
    )
}

export default page