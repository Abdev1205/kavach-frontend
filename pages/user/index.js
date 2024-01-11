import React from 'react'
import PublicRoleLayer from '../(protectedLayer)/PublicRoleLayer'
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from 'react'
import { DataLayer } from '@/context/UserDataProvider'
import UserLayout from '../layout/UserLayout'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'

const index = () => {
  const { setIsAuthenticated } = useContext(DataLayer);
  const router = useRouter()
  const handleLogout = async () => {
    console.log('logout clicked')
    try {
      const reponse = await axios.get('http://localhost:4000/api/logout', {
        withCredentials: true
      });
      console.log(reponse)
      if (reponse.data.success == true) {
        console.log('response sucess');
        Cookies.remove('accessToken')
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UserLayout>
      <h1>Apun Am Admi hai</h1>
      <button onClick={handleLogout}>Logout</button>
    </UserLayout>
  )
}

export default index
