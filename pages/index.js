'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({})

  const getData = async () => {
    try {
      const res = await axios.get(`${ApiUrl}/api/user`, {
        withCredentials: true
      })
      console.log(res)
      setUser(res.data.user);
    } catch (error) {
      console.log(error)
    }
  }
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
      <div>

        <button onClick={getData} className=' px-[1rem] py-[.5rem] w-[8rem] bg-violet-600 text-white ' >get Data</button>
        <br />
        <button onClick={handleLogout} className='' > Log out </button>
        <div>
          {user.name}
        </div>
      </div>
    </>
  )
}

export default Index
