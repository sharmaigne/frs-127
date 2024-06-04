'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { LoginFields, SignupFields} from '@/app/(auth)/_api/types'

export const login = async (data: LoginFields) => {
  console.log("logging in...")
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error(error)
    redirect('/error')
  }

  console.log('logged in')
  revalidatePath('/', 'layout')
  redirect('/home')
}


export const signup = async (data: string) => {
  const supabase = createClient()

  const {email, password1} = JSON.parse(data) as SignupFields
  const { error } = await supabase.auth.signUp({email, password: password1})

  if (error) {
    redirect('/error')
  }

revalidatePath('/', 'layout')
  // redirect('/')
}