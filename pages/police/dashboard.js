import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from 'react'
import { DataLayer } from '@/context/UserDataProvider'
import { useRouter } from 'next/router'
import axios from 'axios'
import PoliceLayout from '../layout/PoliceLayout'

const PoliceDashboard = () => {
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
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <PoliceLayout>
      <div>
        <h1>Police Dahsboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </PoliceLayout>
  )
}

export default PoliceDashboard
