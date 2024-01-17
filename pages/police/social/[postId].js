import React, { useState, useContext, useEffect } from 'react'
import PoliceLayout from '@/pages/layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import SortData from '@/components/common/filter/SortData'
import RegisterFirButton from '@/components/police/fir/RegisterFirButton'
import { BiSearch } from "react-icons/bi"
import { TestProfileImage, TestPostImage } from '@/public/assetsManager'
import SocialMediaCard from '@/components/common/socialMedia/SocialMediaCard'
import SocialMediaCardPage from '@/components/common/socialMedia/SocialMediaCardPage'
import { MdAdd } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { LogoImage } from '@/public/assetsManager'
import NewsCard from '@/components/common/socialMedia/NewsCard'
import TrendingCard from '@/components/common/socialMedia/TrendingCard'
import { useRouter } from 'next/router'
import Comment from '@/components/common/socialMedia/Comment'
import { ApiUrl } from "@/utils/BaseUrl.js";
import { DataLayer } from "@/context/UserDataProvider.js";
import axios from 'axios'

const SocialPost = () => {
  const router = useRouter();
  const [feed, setFeed] = useState([]);
  const { refresh, setRefresh, loading, setLoading } = useContext(DataLayer);
  const [postId, setPostId] = useState(router.query.postId)

  const sortOptionData = [
    {
      id: 1,
      option: "Latest",
    },
    {
      id: 2,
      option: "Oldest",
    },
  ]

  const postData = [
    {
      id: 1,
      name: "Neha Sharma",
      createdAt: "14.01.24",
      post: "Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.and again Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.",
      profileImage: TestProfileImage,
      postImage: TestPostImage,
    },
  ]

  const commentData = [
    {
      name: "Priyanshu Ranjan",
      comment: "In mulle ko pakad pakad ke maro jo pathar baji karte hai ,desh ke andar rah kar desh ko barbad kar rahe hai yeh sab desh drohi long",
      profileImage: TestProfileImage,
      createdAt: "14.01.24"
    },
  ]

  const fetchPost = async () => {
    setLoading(true);
    const response = await axios.get(`${ApiUrl}/api/singlePost/${postId}`)
    console.log("response news");
    console.log(response);
    setFeed(response.data.updatedUserFeed);
    setLoading(false); 
  }

  
  useEffect(() => {
    fetchPost();
  }, [refresh])


  console.log(router.query.postId, "postId");

  const [sortValue, setSortValue] = useState(sortOptionData[0].option)
  return (
    <>
      <PoliceLayout>
        {/* <RegisterFir
          visible={registerFir}
          onClose={() => setRegisterFir(false)}
          callback={() => fetchRecentFirData()}
        /> */}
        <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ' >
          <Panel />
          <div className=' w-[81%] h-[100vh] flex flex-col items-center text-[#AEB9E1]  pt-[1rem] px-[1.5rem] ' >

            <div className=' w-[100%] flex justify-between items-center mt-[1rem] ' >
              <SortData sortValue={sortValue} setSortValue={setSortValue} sortOptionData={sortOptionData} />
              <div className=' ml-[-4rem] ' >
                <RegisterFirButton />
              </div>
              <div className=' flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ' >
                <BiSearch className=' text-[1.1rem] ' />
                <input type="text" className=' bg-[#101935] outline-none text-[.9rem] w-[87%] ' />
              </div>
            </div>

            <div className=' w-[100%] flex gap-[2rem] mt-[3rem] h-[80vh]  ' >
              {/* <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] mb-[.5rem] ' >Recent FIR </h2> */}
              <div className='relative flex w-[65%] h-[100%] overflow-auto ' >

                <div className='  flex flex-col justify-between gap-[2rem] w-[100%] z-[3] pb-[1rem] ' >
                  {
                    feed && feed.map((data, index) => {
                      return (
                        <SocialMediaCardPage key={index} data={data} />
                      )
                    })
                  }
                  <div className=' relative  flex justify-between h-[3.2rem] w-[100%] px-[.3rem] ' >
                    <input type="text" className=' bg-[#8C8C9A1F] text-[#AEB9E180] rounded-full outline-none focus:outline-[#6c71ff5c] w-[100%] pr-[6.5rem] pl-[1rem]   ' />
                    <button className=' bg-[#6C72FF] text-white absolute right-[4px] flex justify-center items-center w-[6rem] h-[100%] rounded-full  ' >Add</button>

                  </div>
                </div>
              </div>

              <div className=' flex flex-col w-[30%] gap-[1rem] h-[100%]   ' >

                <div className=' bg-[#101935] border-[2px] border-[#191F35]   w-[100%] h-[100%] rounded-md flex flex-col gap-[.4rem]  ' >
                  <div className=' flex justify-center  items-center bg-[#101935]  border-b-[2px] border-[#191F35] h-[3rem] rounded-t-md  ' >
                    <h2 className=' text-[#AEB9E1] text-[1.3rem] ' >Comments</h2>

                  </div>
                  <div className=' flex w-[100%] flex-col gap-[.8rem] h-[100%] overflow-auto ' >
                    <Comment postId={postId} />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </PoliceLayout>
    </>
  )
}

export default SocialPost
