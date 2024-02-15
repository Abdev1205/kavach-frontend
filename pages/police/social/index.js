import React, { useContext, useEffect, useState } from "react";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { DataLayer } from "@/context/UserDataProvider.js";
import PoliceLayout from "@/pages/layout/PoliceLayout";
import Panel from "@/components/common/Leftpanel.js/Panel";
import SortData from "@/components/common/filter/SortData";
import RegisterFirButton from "@/components/police/fir/RegisterFirButton";
import { BiSearch } from "react-icons/bi";
import { TestProfileImage, TestPostImage } from "@/public/assetsManager";
import SocialMediaCard from "@/components/common/socialMedia/SocialMediaCard";
import { MdAdd } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { LogoImage } from "@/public/assetsManager";
import NewsCard from "@/components/common/socialMedia/NewsCard";
import TrendingCard from "@/components/common/socialMedia/TrendingCard";
import { useRouter } from "next/router";
import CreatePost from "@/components/modals/CreatePost";
import CreateNews from "@/components/modals/CreateNews";
import axios from "axios";
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

  const postData = [
    {
      id: 1,
      name: "Neha Sharma",
      createdAt: "14.01.24",
      post: "Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.and again Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.",
      profileImage: TestProfileImage,
      postImage: TestPostImage,
    },
    {
      id: 2,
      name: "Neha Sharma",
      createdAt: "14.01.24",
      post: "Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.and again Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.",
      postImage: TestPostImage,
    },
    {
      id: 3,
      name: "Neha Sharma",
      createdAt: "14.01.24",
      post: "Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.and again Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.",
      profileImage: TestProfileImage,
      postImage: TestPostImage,
    },
    {
      id: 4,
      name: "Neha Sharma",
      createdAt: "14.01.24",
      post: "Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.and again Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.",
      postImage: TestPostImage,
    },
  ];

  const newsData = [
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
    {
      name: "Rajasthan Police",
      createdAt: "14.01.24",
      profileImage: LogoImage,
      post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
    },
  ];

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
    const response = await axios.get(`${ApiUrl}/api/fetchNewsChips`, {
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

  useEffect(() => {
    getFeed();
    fetchNewsFeed();
  }, [refresh]);

  return (
    <>
      <PoliceLayout>
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
          <Panel />
          <div className=" w-[81%] h-[100vh] flex flex-col items-center text-[#AEB9E1]  pt-[1rem] px-[1.5rem] ">
            <div className=" w-[100%] flex justify-between items-center mt-[1rem] ">
              <SortData
                sortValue={sortValue}
                setSortValue={setSortValue}
                sortOptionData={sortOptionData}
              />
              <div className=" ml-[-4rem] ">
                <RegisterFirButton />
              </div>
              <div className=" flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ">
                <BiSearch className=" text-[1.1rem] " />
                <input
                  type="text"
                  className=" bg-[#101935] outline-none text-[.9rem] w-[87%] "
                />
              </div>
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
                    <button
                      onClick={() => setCreateNews(true)}
                      className=" active:scale-95 bg-[#6C72FF] text-[.8rem] text-white flex justify-center items-center w-[3.5rem] gap-[.3rem] h-[1.2rem] rounded-sm "
                    >
                      <MdAdd />
                      Add
                    </button>
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
                    {/* <button className=' active:scale-95 bg-[#6C72FF] text-[.8rem] text-white flex justify-center items-center w-[3.5rem] gap-[.3rem] h-[1.2rem] rounded-sm ' >
                      <MdAdd />
                      Add
                    </button> */}
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
      </PoliceLayout>
    </>
  );
};

export default Index;
