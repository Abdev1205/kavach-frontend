import React, { useContext, useEffect, useState } from "react";
import { DataLayer } from "../context/UserDataProvider.js";
import { PiSlidersLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdCreate } from "react-icons/md";
import NewsFeed from "@/components/NewsFeed";
import TrendingFeed from "@/components/TrendingFeed";
import ImageUploader from "@/components/ImageUploader.js";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
import FeedChips from "@/components/user/Social/FeedChips.js";
import SortChips from "@/components/user/Social/SortChips.js";
import Cookies from 'js-cookie';
const Feed = () => {
  const { refresh, setRefresh, loading, setLoading } = useContext(DataLayer);
  const [post, setPost] = useState(false);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    console.log("API called: ", refresh);
    setLoading(true);
    console.log("Loading: ", loading);
    const token = Cookies.get('accessToken');
    axios
      .get(`${ApiUrl}/api/fetchFeed?token=${token}`, {
        withCredentials: true,
      })
      .then((res) => {
        setFeed(res.data.updatedUserFeed);
        console.log(res.data.updatedUserFeed)
      });
    console.log("Feed: ");
    console.log(feed);
    setLoading(false);
    console.log("Loading: ", loading);
  }, [refresh]);

  return (
    <>
      {post && (
        <div
          onClick={() => setPost(false)}
          className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div
            className="w-1/3 p-5 rounded-lg z-60 bg-second2 text-fontCol h-2/3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full text-4xl text-center">
              New Post
              <Divider2 />
              <div className="px-4 ">
                <ImageUploader />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-[100vh] h-screen relative">
        <div className="text-fontCol">
          <div className="flex w-full h-20 gap-6 px-6 py-5 ">
            <div className="flex items-center w-24 p-1 text-xl rounded-lg bg-second hover:cursor-pointer">
              <PiSlidersLight className="w-6 h-6 mr-2 mt-[0.5]" />
              Sort
            </div>
            <SortChips text="Jaipur" />
          </div>
        </div>
        <button
          onClick={() => setPost(true)}
          className=" flex items-center justify-center absolute z-10 bg-btn shadow-[0px_0px_12px_10px_#1A202C] h-14 w-14 text-center right-8 bottom-10 rounded-full text-white"
        >
          <MdCreate className="w-8 h-8 " />
        </button>
        <div className="w-full h-[87vh] px-6 py-6 flex flex-grow flex-col items-center gap-6 overflow-auto scroll-m-40 overflow-x-hidden overflow-y-auto">
          {feed.map((item, itemVal) => (
            <FeedChips
              content={item.content}
              key={itemVal}
              postId={item._id}
              img={item.img}
              likes={item.likeCount}
              comments={item.commentCount}
              likeStatus={item.liked}
              name={item.name}
              time={item.timestamp}
              setRefresh={setRefresh}
              loading={loading}
              refresh={refresh}
            />
          ))}
        </div>
      </div>

      <div className=" h-full border-l-[0.2vh] border-borderBg w-[56vh]">
        <div className="flex justify-end p-6 ">
          <div className="relative flex items-center text-fontCol">
            <IoSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
            <input
              width={500}
              className="p-3 pl-10 rounded-lg w-52 bg-second"
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

const Divider2 = () => (
  <div className="h-[0.1vh] rounded-xl my-4 mx-4 bg-[#4E546B]" />
);
export default Feed;
