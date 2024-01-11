'use client'
import React, { useState } from 'react'
import UserTypeInput from '@/components/userType/roleTypeInput';
import { FaUserTie } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from 'next/router';
import { DataLayer } from '@/context/UserDataProvider';
import { useContext } from 'react';
import AuthenticatedLayer from './(protectedLayer)/AuthenticatedLayer';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';
import Cookies from 'js-cookie';

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
