import React, { useContext, useEffect, useState } from "react";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { DataLayer } from "@/context/UserDataProvider.js";
import SortData from "@/components/common/filter/SortData";
import { TestProfileImage } from "@/public/assetsManager";
import SocialMediaCard from "@/components/common/socialMedia/SocialMediaCard";
import { MdModeEdit } from "react-icons/md";
import NewsCard from "@/components/common/socialMedia/NewsCard";
import TrendingCard from "@/components/common/socialMedia/TrendingCard";
import { useRouter } from "next/router";
import CreatePost from "@/components/modals/CreatePost";
import CreateNews from "@/components/modals/CreateNews";
import axios from "axios";
import UserLayout from "../layout/UserLayout";
import UserPanel from "@/components/common/Leftpanel.js/UserPanel";
import dynamic from "next/dynamic";
import Link from "next/link";
import Cookies from 'js-cookie';

const Index = () => {
  const router = useRouter();
  const sortOptionData = [
    {
      id: 1,
      option: "Latest",
    },
    {
      id: 2,
      option: "Oldest",
    },
  ];

  const { refresh, setRefresh, loading, setLoading } = useContext(DataLayer);
  const [feed, setFeed] = useState([]);
  const [news, setNews] = useState([]);

  const trendingData = [
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
    {
      name: "Neha Sharma",
      createdAt: "14.01.24",
      profileImage: TestProfileImage,
      post: "Finally Yogi Sarkar me lathi charge suru huya kabja karne aur pathar fekne walo ko uppar. Police Wale bahut accha kaam kar rahe hai",
    },
  ];

  const getFeed = async () => {
    setLoading(true);
    const token = Cookies.get('accessToken');
    const response = await axios.get(`${ApiUrl}/api/fetchFeed?token=${token}`, {
      withCredentials: true,
    });
    console.log("response");
    console.log(response);
    setFeed(response.data.updatedUserFeed);
    console.log("Feed");
    console.log(feed);
    setLoading(false);
  };

  const handlePostRedirect = (postId) => {
    console.log("post rediect called");
    router.push(`/social/${postId}`);
  };

  const fetchNewsFeed = async () => {
    setLoading(true);
    const token = Cookies.get('accessToken');
    const response = await axios.get(`${ApiUrl}/api/fetchNewsChips?token=${token}`, {
      withCredentials: true,
    });
    console.log("response news");
    console.log(response);
    setNews(response.data.news);
    setLoading(false);
  };

  const [sortValue, setSortValue] = useState(sortOptionData[0].option);
  const [createPost, setCreatePost] = useState(false);
  const [createNews, setCreateNews] = useState(false);

  const GPSCall = dynamic(
    () => {
      return import("../../components/police/fir/GPSCall");
    },
    { ssr: false }
  );

  useEffect(() => {
    getFeed();
    fetchNewsFeed();
  }, [refresh]);

  return (
    <>
      <UserLayout>
        <CreatePost
          visible={createPost}
          onClose={() => setCreatePost(false)}
          callback={() => getFeed()}
        />
        <CreateNews
          visible={createNews}
          onClose={() => setCreateNews(false)}
          callback={() => fetchNewsFeed()}
        />
        <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ">
          <UserPanel />
          <div className=" w-[81%] h-[100vh] flex flex-col items-center text-[#AEB9E1]  pt-[1rem] px-[1.5rem] ">
            <div className=" w-[100%] flex justify-between items-center mt-[1rem] ">
              <SortData
                sortValue={sortValue}
                setSortValue={setSortValue}
                sortOptionData={sortOptionData}
              />
              <div className=" ml-[-4rem] ">
                <GPSCall />
              </div>
              <Link href={"/user/assistant"} className=" mr-7 flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ">
                <button className="">Assistant Chat</button>
              </Link>
            </div>

            <div className=" w-[100%] flex gap-[2rem] mt-[3rem] h-[80vh]  ">
              {/* <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] mb-[.5rem] ' >Recent FIR </h2> */}
              <div className="relative flex w-[65%] h-[100%] overflow-auto ">
                <div className="  flex flex-col gap-[2rem] w-[100%]  h-[100%] ">
                  {feed &&
                    feed.map((data, index) => {
                      return <SocialMediaCard key={index} data={data} />;
                    })}
                  <div
                    onClick={() => setCreatePost(true)}
                    className=" post-social-button cursor-pointer active:scale-95 duration-300 shadow-md sticky bottom-[.5rem] left-[98%] flex justify-center items-center z-[10] bg-[#6C72FF] text-white w-[4rem] py-[1rem]    "
                  >
                    <MdModeEdit className=" text-white text-[2rem] " />
                  </div>
                </div>
              </div>

              <div className=" flex flex-col w-[30%] gap-[1rem]   ">
                <div className=" bg-[#101935] border-[1px] border-[#191F35] px-[1rem] py-[.9rem] w-[100%] h-[38.8vh] rounded-md flex flex-col gap-[.4rem]  ">
                  <div className="flex items-center justify-between ">
                    <h2 className=" text-[#6C72FF] text-[1.03rem] ">
                      News Around you
                    </h2>
                  </div>
                  <div className=" flex w-[100%] flex-col gap-[.8rem] h-[32vh] overflow-auto ">
                    {news &&
                      news.map((data, index) => {
                        return <NewsCard key={index} data={data} />;
                      })}
                  </div>
                </div>

                <div className=" bg-[#101935] border-[1px] border-[#191F35] px-[1rem] py-[.9rem] w-[100%] h-[38.8vh] rounded-md flex flex-col gap-[.4rem]  ">
                  <div className="flex items-center justify-between ">
                    <h2 className=" text-[#6C72FF] text-[1.03rem] ">
                      Trending Around you
                    </h2>
                  </div>
                  <div className=" flex w-[100%] flex-col gap-[.8rem] h-[32vh] overflow-auto ">
                    {trendingData &&
                      trendingData.map((data, index) => {
                        return <TrendingCard key={index} data={data} />;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
};

export default Index;