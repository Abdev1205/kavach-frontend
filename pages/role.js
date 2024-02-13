'use client'
import React, { useState } from 'react'
import { DataLayer } from '@/context/UserDataProvider';
import { useContext } from 'react';
import RoleTypeInput from '@/components/userType/roleTypeInput';
import { FaUserTie } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from 'next/router';
import { ApiUrl } from '@/utils/BaseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';

const User = () => {
  // const { data: session } = useSession();
  const { role, city, setCity, setIsAuthenticated, setRoleInit } = useContext(DataLayer);
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState("");
  const router = useRouter();

  const submitData = async (e) => {
    console.log("role subamit called")
    if (userType && city) {
      console.log("role subamit data is called")
      const getData = async () => {
        console.log("get data called in submit data in role.js")
        try {
          const res = await axios.get(`${ApiUrl}/api/user`, {
            withCredentials: true
          })
          console.log("PostURL: " + ApiUrl);
          console.log(res)
          return res.data.user;
        } catch (error) {
          console.log(error)
        }
      }
      const user = await getData();
      console.log(user);
      const data = {
        name: user?.name,
        email: user?.email,
        role: userType,
        city: city,
      }
      try {
        const res = await axios.post(`${ApiUrl}/api/role/init`, data, {
          withCredentials: true
        });
        console.log(res)
        if (res.data.user.acknowledged === true) {
          setRoleInit(false);
          toast.success("User role added Successful", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          console.log("PostURL: " + ApiUrl);
          // setLoginInit(true)
          setIsAuthenticated(true)
          var redirect;
          if (res.data.role === "public") {
            redirect = "/user"
          }
          else if (res.data.role) {
            redirect = `/${res.data.role}`
          }
          router.push(redirect);
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
        console.log(error)
      }
    }
  }
  console.log("role", role)
  console.log("userType", userType)

  return (
    <>
      {
        step === 1 ? (
          <div className=' w-[100%] h-[100vh] bg-[#080F25] flex flex-col justify-center items-center gap-[1rem]  ' >
            <h2 className=' text-[#c1c3ff] text-[2rem]  font-[600] tracking-wide mb-[3rem] ' >Select your Role</h2>
            <div className='flex justify-center items-center gap-[8rem]' >
              <RoleTypeInput user={'public'} icon={<FaUserTie />} setUserType={setUserType} userType={userType} />
              <RoleTypeInput user={'police'} icon={<GiPoliceOfficerHead />} setUserType={setUserType} userType={userType} />
              <RoleTypeInput user={'admin'} icon={<RiAdminFill />} setUserType={setUserType} userType={userType} />
            </div>
            <button onClick={() => setStep(2)} className=' flex justify-center items-center gap-[.3rem] bg-[#6C72FF] text-white w-[10rem] px-[.5rem] py-[.5rem] rounded-md mt-[8rem] ' >Continue<MdKeyboardDoubleArrowRight className=' text-[1.3rem] ' /></button>
          </div>
        ) : null
      }
      {
        step === 2 ? (
          <div className=' w-[100%] h-[100vh] bg-[#080F25] flex flex-col justify-center items-center gap-[1rem]  ' >
            <h2 className=' text-[#c1c3ff] text-[2rem]  font-[600] tracking-wide mb-[3rem] ' >Add Your City</h2>
            <div className='flex justify-center items-center gap-[8rem] w-[20rem]' >
              <div className=' flex flex-col gap-[.5rem] w-[100%]  ' >
                <label htmlFor="email" className=' text-[#AEB9E180]  ' >City <span className='text-red-600 ' >*</span></label>
                <input onChange={(e) => setCity(e.target.value)} value={city} className=' bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] w-[100%]  ' type="text" id="city" name="city" placeholder="Enter your City " />
              </div>
            </div>
            <div className=' flex justify-center items-center gap-[3rem] mt-[8rem] ' >
              <button onClick={() => setStep(1)} className=' flex justify-center items-center gap-[.3rem] border-[#6C72FF] border-[2px] text-white w-[10rem] px-[.5rem] py-[.5rem] rounded-md  ' >
                <MdKeyboardDoubleArrowRight className=' text-[1.3rem] rotate-180 ' />
                back
              </button>
              <button onClick={(e) => submitData(e)} className=' flex justify-center items-center gap-[.3rem] bg-[#6C72FF] text-white w-[10rem] px-[.5rem] py-[.5rem] rounded-md  ' >Submit<MdKeyboardDoubleArrowRight className=' text-[1.3rem] ' /></button>
            </div>
          </div>
        ) : null
      }

    </>
  )
}

export default User
