// 'use client'
import React, { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';
import { useSession, signIn, signOut } from "next-auth/react"
import LoadingAnimation from '@/components/animation/LoadingAnimation';
import Cookies from 'js-cookie';

export const DataLayer = createContext(null)

// export const getServerSideProps = async () => {

// }


const UserDataProvider = ({ children }) => {
  // const { data: session } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [loginInit, setLoginInit] = useState(false)
  const [roleInit, setRoleInit] = useState(false)
  const [role, setRole] = useState("");
  const [city, setCity] = useState("")
  const router = useRouter()
  console.log(isAuthenticated)
  console.log(router.asPath)
  console.log("role-->", role)
  const token = Cookies.get('accessToken');
  const userRole = Cookies.get('userRole');
  console.log("access token", token, " lenght")
  console.log("role token", userRole)
  // if (token) {
  //   setIsAuthenticated(true);
  // }
  // setIsAuthenticated(token)





  useEffect(() => {
    // const loginProcess = async () => {

    //   if (session) {
    //     setLoading(true)
    //     try {
    //       const data = {
    //         name: session?.user.name,
    //         email: session?.user.email,
    //       }
    //       const res = await axios.post(`${ApiUrl}/api/login/init`, data);
    //       console.log(res.data.existingUserWithEmail, res.data.existingUserWithEmail[0].role);
    //       setUser(res.data.existingUserWithEmail[0] || res.data.newUser)
    //       console.log("user data", user)
    //       if (res.data.existingUserWithEmail[0].role === false || res.data.existingUserWithEmail[0].role === undefined) {
    //         setRoleInit(true);
    //         setLoading(false)
    //         router.push('/role')
    //       }
    //       else if (res.data.existingUserWithEmail[0].role !== undefined) {
    //         router.push(`/${res.data.existingUserWithEmail[0].role}`);
    //       }
    //       setLoginInit(false)
    //       setLoading(false)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // }
    // const UserData = async () => {
    //   const res = await axios.get(`${ApiUrl}/api/user`, {
    //     withCredentials: true,
    //   })
    //   console.log(res)
    //   // setUser(res);
    // }
    // if (session && loginInit) {
    //   // setIsAuthenticated(true)
    //   // if (loginInit) {
    //   //   loginProcess(session)
    //   // }
    //   // else if (roleInit) {
    //   //   router.push('/role')
    //   // }
    //   // loginProcess();
    // }

    // else {
    //   // router.push('/login')
    // }
    // if (router.asPath == "/?success=true") {
    //   setIsAuthenticated(true);
    // }
    // console.log(session?.user)
    if (token) {
      setIsAuthenticated(true);
    }
    if (userRole) {
      setRole(userRole)
    }

  }, [isAuthenticated, loading, role])

  useEffect(() => {
    if (typeof window !== 'undefined' && loading === false) {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    } else if (loading === true) {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'flex';
    }
  }, []);

  useEffect(() => {
    if (loading) {
      // Disable scrolling on the body when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling on the body when the modal is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup: Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);
  return (
    <DataLayer.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading, user, setUser, role, setRole, roleInit, setRoleInit, city, setCity, loginInit, setLoginInit }} >
      <LoadingAnimation />
      {children}
    </DataLayer.Provider>
  )
}

export default UserDataProvider
