import React from 'react'
import { MdEdit, MdDeleteForever } from "react-icons/md";

const MainFirDataCard = ({ data }) => {
  return (
    <div className=' flex justify-between items-center gap-[1rem] w-[100%] h-[3.8rem] px-[.8rem] py-[.5rem] border-[1px] border-[#191F35] bg-[#101935] rounded-md  ' >
      <div className=' w-[10%] flex flex-col justify-between ' >
        <h2>{data.name}</h2>
        <h2>{data.age} years</h2>
      </div>
      <div className=' w-[50%] line-clamp-2 ' >
        {data.report}
      </div>
      <div className={` stage-2 text-[#FFAE11] px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `} >
        {data.hero}
      </div>
      <div className=' w-[4rem] flex flex-col justify-between ' >
        <h2>{data.reportedDate}</h2>
        <h2>{data.reportedDay}</h2>
      </div>
      <div className=' flex justify-center items-center gap-[.5rem] ' >
        <button className=' text-[#6C72FF] fir-edit-bg px-[.3rem] py-[.3rem]  ' >
          <MdEdit />
        </button>
        <button className=' text-[#FD001EA8] fir-delete-bg px-[.25rem] py-[.25rem] ' >
          <MdDeleteForever className=' text-[1.02rem] ' />
        </button>
      </div>
    </div>
  )
}

export default MainFirDataCard
