import React from 'react'

const FeedbackDataCard = ({ data }) => {
  return (
    <div className=' feedback-text flex justify-between items-center gap-[1rem] w-[100%] h-[3.8rem] px-[.8rem] py-[.5rem] border-[1px] border-[#191F35] bg-[#101935] rounded-md  ' >
      <div className=' w-[10%] flex flex-col justify-between ' >
        <h2>{data.name}</h2>
        <h2>{data.age} years</h2>
      </div>
      <div className=' w-[50%] line-clamp-2 ' >
        {data.report}
      </div>
      <div className={` stage-2 text-[#FFAE11] px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center text-[0.8rem] items-center mx-[1rem] `} >        {data.hero}
      </div>
      <div className=' w-[4rem] flex flex-col justify-between ' >
        <h2>{data.reportedDate}</h2>
        <h2>{data.reportedDay}</h2>
      </div>
      <button className=' reply-bg flex justify-center items-center w-[6rem] h-[2rem]  text-white ' >reply</button>
    </div>
  )
}

export default FeedbackDataCard
