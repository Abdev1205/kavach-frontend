'use client'
import React, { useEffect, useState } from 'react'
import IntialUserNavbar from '@/components/navbar/intialUserNavbar'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { ApiUrl } from '@/utils/BaseUrl';
import { DataLayer } from '@/context/UserDataProvider';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCPass] = useState();
  const [city, setCity] = useState();
  const [valid, setvalid] = useState(false)
  const { role } = useContext(DataLayer)
  const validDataForm = () => {
    if (name && email && pass && city) {
      if (pass === cpass) {
        setvalid(true);
      }
      else {
        setvalid(false)
      }
    }
    else {
      setvalid(false)
    }
  }
  useEffect(() => {
    validDataForm()
  }, [name, city, pass, cpass, email])

  const handleUserReg = async (e) => {
    e.preventDefault()
    try {
      if (name && email && pass && cpass && city && valid) {
        setvalid(true)
        const data = {
          "name": name,
          "email": email,
          "password": pass,
          "role": role,
          "city": city
        }
        const res = await axios.post(`${ApiUrl}/api/register`, data);
        console.log(res);
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        router.push('/login')

      } else {
        setvalid(false);
        toast.error("fill all required details correctly", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
  }
  return (
    <>
      <div className='bg-[#080F25] w-[100%] h-[100vh] ' >
        <IntialUserNavbar />
        <div className=' w-[100%] h-[90vh] flex justify-center items-center   ' >
          <form autoComplete='none' onSubmit={(e) => handleUserReg(e)} className=' flex flex-col gap-[1rem] w-[30rem]  bg-[#101935] border-[1px] border-[#6c71ff37] rounded-md px-[2.5rem] py-[1.5rem]  '  >
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="name" className=' text-[#AEB9E180]  ' >Name <span className=' text-red-600 ' >*</span></label>
              <input onChange={(e) => setName(e.target.value)} className=' bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] ' type="text" id="name" name="name" placeholder="Enter your Name " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="email" className=' text-[#AEB9E180]  ' >Email <span className=' text-red-600 ' >*</span></label>
              <input onChange={(e) => setEmail(e.target.value)} className=' bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] ' type="email" id="email" name="email" placeholder="Enter your Email " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="password" className=' text-[#AEB9E180]  ' >Passowrd <span className=' text-red-600 ' >*</span></label>
              <input onChange={(e) => setPass(e.target.value)} className=' bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] ' type="password" id="password" name="password" placeholder="Enter your password " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="cpassword" className=' text-[#AEB9E180]  ' >Confirm Passowrd <span className=' text-red-600 ' >*</span></label>
              <input onChange={(e) => setCPass(e.target.value)} className=' bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] ' type="password" id="cpassword" name="cpassword" placeholder="Enter your password " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="city" className=' text-[#AEB9E180]  ' >City <span className=' text-red-600 ' >*</span></label>
              <input onChange={(e) => setCity(e.target.value)} className=' bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] ' type="text" id="password" name="city" placeholder="Enter your City " />
            </div>
            <button type='submit' className={`  active:scale-95 duration-300  ${valid ? "opacity-100 cursor-pointer" : "opacity-25 cursor-not-allowed "} bg-[#6C72FF] text-white px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `} >Register</button>


            <div className=' flex justify-center gap-[.4rem] ' >
              <p className='text-[#AEB9E180] ' >Already have account,</p>
              <Link className=' text-[#b1b3ee] underline underline-offset-1 ' href="/login">
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
