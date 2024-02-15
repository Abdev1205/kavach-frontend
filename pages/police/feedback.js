import React, { useContext, useEffect, useState } from 'react'
import PoliceLayout from '@/pages/layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import SortData from '@/components/common/filter/SortData'
import { MdOutlineAddCircle } from "react-icons/md";
import AllFeedback from '@/components/police/feedback/AllFeedback';
import { BiSearch } from "react-icons/bi";
import RegisterFirButton from '@/components/police/fir/RegisterFirButton';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';
import { DataLayer } from "@/context/UserDataProvider";
import Cookies from 'js-cookie';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { refresh } = useContext(DataLayer);

  const getFeedback = async () => {
    if (sortValue == "Lastest") {
      try {
        const token = Cookies.get('accessToken');
        const feedbackData = await axios.get(`${ApiUrl}/api/getFeedback?token=${token}`, {
          withCredentials: true,
        });
        console.log("feedbackData");
        console.log(feedbackData);
        const mappedFeedbacks = feedbackData.data.feedbacks.map((feedback) => {
          const reportDate = new Date(feedback.createdAt);
          const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const day = daysOfWeek[reportDate.getDay()];
          const dayDate = reportDate.getDate();
          const month = reportDate.getMonth() + 1;
          const year = reportDate.getFullYear() % 100;

          // Format the date as "DD.MM.YY"
          const formattedDate = `${dayDate}.${month}.${year}`;

          return {
            name: feedback.userName,
            age: feedback.userAge,
            report: feedback.userFeedback,
            hero: feedback.hero,
            reportedDate: formattedDate,
            reportedDay: day,
            rating: feedback.rating,
          };
        });
        setFeedbacks(mappedFeedbacks);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const feedbackData = await axios.get(`${ApiUrl}/api/getFeedbackOld`, {
          withCredentials: true,
        });
        console.log("feedbackData");
        console.log(feedbackData);
        const mappedFeedbacks = feedbackData.data.feedbacks.map((feedback) => {
          const reportDate = new Date(feedback.createdAt);
          const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const day = daysOfWeek[reportDate.getDay()];
          const dayDate = reportDate.getDate();
          const month = reportDate.getMonth() + 1;
          const year = reportDate.getFullYear() % 100;

          // Format the date as "DD.MM.YY"
          const formattedDate = `${dayDate}.${month}.${year}`;

          return {
            name: feedback.userName,
            age: feedback.userAge,
            report: feedback.userFeedback,
            hero: feedback.hero,
            reportedDate: formattedDate,
            reportedDay: day,
            rating: feedback.rating,
          };
        });
        setFeedbacks(mappedFeedbacks);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getFeedback();
  }, [refresh]);

  const [query, setQuery] = useState('');
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

  const [sortValue, setSortValue] = useState(sortOptionData[0].option)



  return (
    <>
      <PoliceLayout>
        <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ' >
          <Panel />
          <div className=' w-[81%] h-[100vh] flex flex-col items-center text-[#AEB9E1] pt-[1rem] px-[1.5rem] ' >

            <div className=' w-[100%] flex justify-between items-center mt-[1rem] ' >
              <SortData sortValue={sortValue} setSortValue={setSortValue} sortOptionData={sortOptionData} />
              <div className=' ml-[-4rem] ' >
                <RegisterFirButton />
              </div>
              <div className=' flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ' >
                <BiSearch className=' text-[1.1rem] ' />
                <input onChange={(e) => setQuery(e.target.value)} type="text" className=' bg-[#101935] outline-none text-[.9rem] w-[87%] ' />
              </div>
            </div>

            <div className=' w-[100%] mt-[2rem] ' >
              <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] mb-[.5rem] ' >Recent Feedback </h2>
              <AllFeedback feedbackData={feedbacks} />
            </div>

          </div>
        </div>
      </PoliceLayout>
    </>
  )
}

export default Feedback
