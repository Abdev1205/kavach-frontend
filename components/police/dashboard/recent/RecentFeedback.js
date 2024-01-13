import React from 'react'
import FeedbackDataCard from '../../common/FeedbackDataCard'

const RecentFeedback = () => {
  const feedbackData = [
    {
      name: "Vijay Singh",
      age: 38,
      report: "I thank you to all police men who investigate my problem and solved within short period of time , I love Rajasthan Police",
      hero: "Sher Singh",
      reportedDate: "25.12.23",
      reportedDay: "Monday",
    },
    {
      name: "Vijay Singh",
      age: 38,
      report: "I thank you to all police men who investigate my problem and solved within short period of time , I love Rajasthan Police",
      hero: "Sher Singh",
      reportedDate: "25.12.23",
      reportedDay: "Monday",
    },
  ]
  return (
    <div className=' w-[100%] flex flex-col gap-[1rem] text-[#AEB9E1] text-[.9rem] ' >
      <div className=' flex justify-between items-center  w-[100%] text-[#6C72FF] pr-[.8rem] mb-[-.5rem]  ' >
        <div className=' w-[10%] flex flex-col justify-between ' >
          <h2>Accused Details</h2>
        </div>
        <div className=' w-[50%] flex justify-center  line-clamp-2 ' >
          Report
        </div>
        <div className={`  px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `} >
          Hero
        </div>
        <div className=' w-[5rem] flex flex-col justify-between ' >
          Reported at
        </div>
        <div className='  flex justify-center items-center w-[6rem]  ' >Reply</div>
      </div>
      {
        feedbackData && feedbackData.map((data, index) => {
          return (
            <FeedbackDataCard data={data} key={index} />
          )
        })
      }
    </div>
  )
}

export default RecentFeedback
