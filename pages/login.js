"use client";
import React, { useState } from "react";
import IntialUserNavbar from "@/components/navbar/intialUserNavbar";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { useContext } from "react";
import { DataLayer } from "@/context/UserDataProvider";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  console.log(email, "email");
  console.log(pass, "pass");
  const {
    role,
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading,
    setRoleInit,
    loginInit,
    setLoginInit,
  } = useContext(DataLayer);

  const handleUserLogin = async (e) => {
    try {
      e.preventDefault();
      if (email && pass) {
        const data = {
          email: email,
          password: pass,
        };
        const res = await axios.post(`${ApiUrl}/api/login`, data);
        console.log(res);
        Cookies.set("accessToken", res.data.token);
        toast.success("User Looged in Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsAuthenticated(true);
        var redirect;
        if (res.data.redirectURL === "/public") {
          redirect = "/user";
        } else if (res.data.redirectURL) {
          redirect = `${res.data.redirectURL}`;
        }
        console.log(redirect);
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
      setIsAuthenticated(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      console.log("before goggle", role);
      // // Redirect to the Google login endpoint on the server
      window.location.href = `http://localhost:4000/api/auth/google`;
      // setLoginInit(true)
      // const result = await signIn('google', { redirect: '/role' });
      console.log("I am here and i can do something, ", result);
      console.log("after google", role);
      // console.log(session?.user)
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <>
      <div className="bg-[#080F25] w-[100%] h-[100vh] ">
        <IntialUserNavbar />
        <div className=" w-[1
        
        00%] h-[90vh] flex justify-center items-center   ">
          <div className=" flex flex-col w-[30rem]   bg-[#101935] border-[1px] border-[#6c71ff37] rounded-md px-[2.5rem] py-[2.5rem] ">
            <form
              onSubmit={(e) => handleUserLogin(e)}
              className=" flex flex-col gap-[1rem]   "
            >
              <div className=" flex flex-col gap-[.5rem] ">
                <label htmlFor="email" className=" text-[#AEB9E180]  ">
                  Email <span className="text-red-600 ">&#42;</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className=" bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email "
                />
              </div>
              <div className=" flex flex-col gap-[.5rem] ">
                <label htmlFor="password" className=" text-[#AEB9E180]  ">
                  Passowrd <span className="text-red-600 ">&#42;</span>
                </label>
                <input
                  onChange={(e) => setPass(e.target.value)}
                  className=" bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password "
                />
              </div>
              <button
                className={` active:scale-95 duration-300   ${
                  email && pass ? "opacity-100" : "opacity-25"
                } bg-[#6C72FF] text-white px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `}
              >
                Login
              </button>

              <div className=" flex justify-center items-center gap-[.3rem] mt-[1rem] ">
                <div className=" w-[40%] h-[1px]  bg-[#6C72FF] " />
                <span className=" text-[#6C72FF] ">Or</span>
                <div className=" w-[40%] h-[1px] bg-[#6C72FF] " />
              </div>
            </form>
            <button
              onClick={handleGoogleLogin}
              className=" active:scale-95 duration-300 bg-[#e2eaf8] flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.5rem] rounded-md font-nunito font-[600] text-[1.02rem] mt-[2rem]   "
            >
              <FcGoogle className=" text-[1.2rem] " />
              Login with Google
            </button>
            <div className=" flex justify-center gap-[.4rem] mt-[.6rem] ">
              <p className="text-[#AEB9E180]">Don&apos;t have account,</p>
              <Link
                className=" text-[#b1b3ee] underline underline-offset-1 "
                href="/register"
              >
                register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
