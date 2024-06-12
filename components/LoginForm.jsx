import React from 'react'
import {doSocialLogin} from "@/app/actions"
const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
        <button className='bg-red-400 text-white p-1 rounded-md m-1 text-lg' type='submit' name='action' value='google'>
            sign In with Google
        </button>

        <button className='bg-blue-400 text-white p-1 rounded-md m-1 text-lg' type='submit' name='action' value='github'> 
            sign in with GitHub
        </button>
    </form>
  )
}

export default LoginForm
