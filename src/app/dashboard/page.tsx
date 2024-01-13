import Header from '@/components/Header'
import React from 'react'
import createSupabaseServereComponentClient from '@/lib/supabase/createSupabaseServereComponentClient'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const supabase = createSupabaseServereComponentClient()

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth')
  }
  return (
    <section className='w-full h-screen pt-[60px] pl-[88px] flex justify-center items-center '>
      <h1>Dashboard</h1>
    </section>
  )
}

export default DashboardPage