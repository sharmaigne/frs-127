'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { LoginFields, SignupFields} from '@/app/(auth)/_api/types'
import useAddProfile from '@/hooks/mutations/useAddProfile'

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


export const signup = async (signupData: string) => {
  const supabase = createClient()

  console.log("signing up...")

  const {email, password1} = JSON.parse(signupData) as SignupFields
  const {first_name, middle_initial, last_name} = JSON.parse(signupData)
  const { error, data } = await supabase.auth.signUp({
    email, 
    password: password1,
    options: {data: {first_name, middle_initial, last_name}} // metadata
  })

  if (error) {
    console.error(error)
    redirect('/error')
  } else {
    console.log('signed up')
    const {mutate} = useAddProfile()
    mutate({user_id: data.user?.id, first_name, middle_initial, last_name, email})
  }

  revalidatePath('/', 'layout')
  redirect('/')
}