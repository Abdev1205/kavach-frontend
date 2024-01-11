'use client'
import React from 'react'
import { useRouter } from 'next/router'
import GuestLayer from './(protectedLayer)/GuestLayer';

const Unauthorized = () => {
  const router = useRouter();
  return (
    <div>
      <p>hello i am disturebd</p>
      {/* <h1>You are not authorized</h1>
      <button onClick={() => router.push('/register')} >login</button> */}
    </div>
  )
}

export default Unauthorized
