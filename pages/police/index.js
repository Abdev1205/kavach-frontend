import React from 'react'
import PoliceRoleLayer from '../(protectedLayer)/PoliceRoleLayer'
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from 'react'
import { DataLayer } from '@/context/UserDataProvider'
import { useRouter } from 'next/router'
import axios from 'axios'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'


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
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <PoliceLayout>
        <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ' >
          <Panel />
          <div className=' w-[50%] h-[100vh] flex justify-center items-center text-[#AEB9E1] text-[2rem] ' >
            POlice dashbaord
          </div>
        </div>
      </PoliceLayout>

    </>
  )
}

export default index
