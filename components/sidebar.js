import React, {useContext, useEffect} from 'react'
import toast from "react-toastify";
import { DataLayer } from "../context/UserDataProvider.js";
import { useRouter } from 'next/router.js';
import PoliceLogo from "@/public/Rajasthan_Police_Logo.png";
import Image from "next/image";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { IoSearch, IoCall, IoPersonSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { MdInsertDriveFile, MdPeopleAlt } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";

const Sidebar = ({User="User"}) => {
  const {isAuthenticated, setIsAuthenticated, loading, setLoading} = useContext(DataLayer);
  const logoutHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.get(`${ApiUrl}/users/logout`, {
        withCredentials: true,
      })
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }
  return (
    <div className="bg-prim w-[45vh] h-screen border-r-[0.2vh] border-borderBg">
      <div className="px-6 py-8 flex justify-center flex-wrap">
        <Image draggable={false} width={50} src={PoliceLogo} />
        <div className=" p-2 text-2xl text-fontCol2 font-semibold flex items-center ">
          {User} Dashboard
        </div>
      </div>

      <div className="flex justify-center pb-8 border-borderBg border-b-[0.2vh]">
        <div className="relative flex items-center text-fontCol">
          <IoSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
          <input
            width={500}
            className="pl-10 p-2 w-64 rounded-lg bg-second"
            placeholder="Search things..."
          />
        </div>
      </div>

      <div className=" text-fontCol2 font-mono pb-12">
        <SidebarIcon
          icon={<GoHomeFill className="w-8 h-8 mr-6 mb-[0.5]" />}
          text="Dashboard"
        />
        <SidebarIcon
          icon={<MdInsertDriveFile className="w-8 h-8 mr-6 mb-[0.5]" />}
          text="Report"
        />
        <SidebarIconmult
          icon={<RiSendPlaneFill className="w-8 h-8 mr-6 mb-[0.5]" />}
          text="Call For Help"
        />
        <SidebarIcon
          icon={<MdPeopleAlt className="w-8 h-8 mr-6 mb-[0.5]" />}
          text="Our Team"
        />
        <SidebarIcon
          icon={<IoCall className="w-6 h-6 mr-6 mb-[0.5]" />}
          text="Contact Admin"
        />
      </div>

      <diV className="border-borderBg border-t-[0.2vh] flex flex-col text-2xl text-fontCol2 px-4">
        <div className="flex pb-4 pl-4 pt-8">
          <IoPersonSharp className="w-8 h-8 mr-8" />
          Your Profile
        </div>
        <button onClick={logoutHandler} className="bg-btn rounded-lg flex items-center justify-center py-2 pr-10 mt-4"><LuLogOut className="w-6 h-6 mr-6"/> Logout</button>
      </diV>
    </div>
  );
};

const SidebarIconmult = ({ icon, text }) => {
  return (
    <div className="flex my-8 items-center px-10 text-[3vh] hover:cursor-pointer">
      {icon}
      {text}
      <IoIosArrowForward className=" text-[#1F2A4A] w-5 h-5 ml-auto" />
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => {
  return (
    <div className="flex my-8 items-center px-10 text-[3vh] hover:cursor-pointer">
      {icon}
      {text}
    </div>
  );
};

export default Sidebar;
