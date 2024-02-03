import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import AdminLayout from '../layout/AdminLayout'
import Cookies from 'js-cookie'

const Index = () => {
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
    <>
      <AdminLayout>
        <div>

          <h1>Apun admin hai re tero ko samjh nahi aa raha hai </h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </AdminLayout>
    </>
  )
}

export default Index
