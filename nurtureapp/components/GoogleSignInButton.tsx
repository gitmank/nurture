'use client'

import { useSearchParams } from 'next/navigation'

const GoogleSignInButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') ?? '/profile'

  return (
    <button
      className='w-max self-center mt-10 flex flex-row h-max bg-fusion-purple text-white bg-primary-default rounded-md p-3 items-center justify-between gap-3'
      // onClick={() => signIn('google', { callbackUrl })}
    >
      <svg
        aria-hidden='true'
        focusable='false'
        data-icon='google'
        className='h-6 w-6'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 488 512'
      >
        <path
          fill='white'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
        ></path>
      </svg>
      Verify with Google
    </button>
  )
}

export default GoogleSignInButton