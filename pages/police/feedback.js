import React, { useEffect, useState } from 'react'
import PoliceLayout from '@/pages/layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import SortData from '@/components/common/filter/SortData'
import { MdOutlineAddCircle } from "react-icons/md";
import AllFeedback from '@/components/police/feedback/AllFeedback';
import { BiSearch } from "react-icons/bi";

const Feedback = () => {
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
              <div className=' w-[12rem] h-[2.5rem] ml-[-4rem] ' >
                <button className=' register-fir-button w-[100%] h-[100%] text-white flex justify-center items-center gap-[1rem]  ' >
                  <MdOutlineAddCircle className=' text-[1.12rem] ' />
                  Register FIR
                </button>
              </div>
              <div className=' flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ' >
                <BiSearch className=' text-[1.1rem] ' />
                <input onChange={(e) => setQuery(e.target.value)} type="text" className=' bg-[#101935] outline-none text-[.9rem] w-[87%] ' />
              </div>
            </div>

            <div className=' w-[100%] mt-[2rem] ' >
              <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] mb-[.5rem] ' >Recent Feedback </h2>
              <AllFeedback />
            </div>

          </div>
        </div>
      </PoliceLayout>
    </>
  )
}

export default Feedback
