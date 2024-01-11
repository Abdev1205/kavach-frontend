import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Data } from "../Context/Context.js";
import { PiSlidersLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { PiChatTeardropTextBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { MdOutlineVerifiedUser, MdCreate } from "react-icons/md";
import NewsFeed from "@/components/NewsFeed";
import TrendingFeed from "@/components/TrendingFeed";
import ImageUploader from "@/components/ImageUploader.js";
import axios from "axios";
import { server } from "@/pages/index.js";
const Feed = () => {
  const { refresh, setRefresh, loading, setLoading } = useContext(Data);
  const [post, setPost] = useState(false);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const { data } = axios
      .get(`${server}/api/fetchFeed`, {
        withCredentials: true,
      })
      .then((res) => {
        setFeed(res.data.userFeed);
      });
    console.log(feed);
  }, [refresh]);

  return (
    <>
      {post && (
        <div
          onClick={() => setPost(false)}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            className="z-60 bg-second2 text-fontCol h-2/3 w-1/3 p-5 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full text-4xl text-center">
              New Post
              <Divider2 />
              <div className=" px-4">
                <ImageUploader />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-[100vh] h-screen relative">
        <div className="text-fontCol">
          <div className=" w-full h-24 py-5 px-6 flex gap-6 ">
            <div className="flex items-center bg-second p-4 rounded-lg w-32 text-xl hover:cursor-pointer">
              <PiSlidersLight className="w-6 h-6 mr-6" />
              Sort
            </div>
            <Chips text="Jaipur" />
          </div>
        </div>
        <button
          onClick={() => setPost(true)}
          className=" flex items-center justify-center absolute z-10 bg-btn shadow-[0px_0px_12px_10px_#1A202C] h-14 w-14 text-center right-8 bottom-10 rounded-full text-white"
        >
          <MdCreate className=" h-8 w-8" />
        </button>
        <div className="w-full h-[87vh] px-6 py-6 flex flex-grow flex-col items-center gap-6 overflow-auto scroll-m-40 overflow-x-hidden overflow-y-auto">
          {feed.map((item, itemVal) => (
            <FeedChips content={item.content} key={itemVal} img={item.img} />
          ))}
        </div>
      </div>

      <div className=" h-full border-l-[0.2vh] border-borderBg w-[56vh]">
        <div className=" p-6 flex justify-end">
          <div className="relative flex items-center text-fontCol">
            <IoSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
            <input
              width={500}
              className="pl-10 p-3 w-52 rounded-lg bg-second"
              placeholder="Search Posts..."
            />
          </div>
        </div>

        <NewsFeed />
        <TrendingFeed />
      </div>
    </>
  );
};

const Chips = ({ text }) => {
  return (
    <div className="flex items-center bg-second p-4 rounded-lg w-32 text-xl hover:cursor-pointer">
      <RxCross1 className="w-6 h-6 mt-1 mr-4" />
      {text}
    </div>
  );
};

const FeedChips = ({ img, content, user }) => {
  return (
    <div className=" bg-[#101935] w-full min-h-[70vh] rounded-xl border-borderBg border-[0.2vh] text-fontSec">
      
      <div className="py-7 px-2">{content}</div>
      <div className=" bg-[#25234f] w-full h-[50vh] overflow-hidden ">
        {<img src={`${img}`} alt="Uploaded" />}
      </div>
      <div className="px-8 py-2">
        <div className=" flex flex-grow items-center justify-around h-14">
          <FaRegHeart className="h-6 w-6 text-btn hover:cursor-pointer" />
          <PiChatTeardropTextBold className="h-7 w-7 text-btn hover:cursor-pointer" />
          <LuSend className="h-6 w-6 text-btn hover:cursor-pointer" />
          <MdOutlineVerifiedUser className="h-7 w-7 text-btn hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
const Divider2 = () => (
  <div className="h-[0.1vh] rounded-xl my-4 mx-4 bg-[#4E546B]" />
);
export default Feed;
