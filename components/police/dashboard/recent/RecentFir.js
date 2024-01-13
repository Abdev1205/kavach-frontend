import React from 'react'
import FirDataCard from '../../common/FirDataCard'

const RecentFir = () => {
  const firData = [
    {
      name: "Neha Sharma",
      age: 29,
      report: "Husband beaten him brutually after knowing her extra marital affair. He also need official divorce so she have to leave her house immediately",
      stage: 1,
      reportedDate: "25.12.23",
      reportedDay: "Monday",
    },
    {
      name: "Neha Sharma",
      age: 29,
      report: "Husband beaten him brutually after knowing her extra marital affair. He also need official divorce so she have to leave her house immediately",
      stage: 2,
      reportedDate: "25.12.23",
      reportedDay: "Monday",
    },
    {
      name: "Neha Sharma",
      age: 29,
      report: "Husband beaten him brutually after knowing her extra marital affair. He also need official divorce so she have to leave her house immediately",
      stage: 3,
      reportedDate: "25.12.23",
      reportedDay: "Monday",
    },
    {
      name: "Neha Sharma",
      age: 29,
      report: "Husband beaten him brutually after knowing her extra marital affair. He also need official divorce so she have to leave her house immediately",
      stage: 4,
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
          Stages
        </div>
        <div className=' w-[5rem] flex flex-col justify-between ' >
          Reported at
        </div>
        <div className='  flex justify-center items-center w-[6rem]  ' >Investigate</div>
      </div>
      {
        firData && firData.map((data, index) => {
          return (
            <FirDataCard data={data} key={index} />
          )
        })
      }
    </div>
  )
}

export default RecentFir
