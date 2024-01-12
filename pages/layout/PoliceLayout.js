import React from 'react'
import { useContext } from 'react'
import { DataLayer } from '@/context/UserDataProvider'
import { useRouter } from 'next/router'
import axios from 'axios'
import Panel from '@/components/common/Leftpanel.js/Panel'



const PoliceLayout = ({ children }) => {
  const { setIsAuthenticated } = useContext(DataLayer);
  console.log("i am in police layout")
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
      {/* <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ' >
        <Panel />

        <h2>Abhay</h2>
        {children}
        <div className=' w-[30rem] h-[100%] bg-blue-500 ' >
          <h1>Hello box</h1>
        </div>
      </div> */}
      <div className=' w-[100%] ' >
        {children}
      </div>
    </>
  )
}

export default PoliceLayout
