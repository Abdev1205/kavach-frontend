import React, { useState } from 'react'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import SpeechToTextFeedback from '@/components/police/contact/SpeechToText'
import ContactAdminForm from '@/components/police/contact/ContactAdminForm'
import SortData from '@/components/common/filter/SortData'
import Slider from '@/components/common/filter/Slider'
import { BiSearch } from "react-icons/bi";

const ContactAdmin = () => {
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
          <div className=' w-[81%] h-[100vh] flex flex-col items-center text-[#AEB9E1] pt-[1rem] px-[1.5rem]   ' >
            <div className=' w-[100%] flex  justify-between items-center mt-[1rem] ' >
              <SortData sortValue={sortValue} setSortValue={setSortValue} sortOptionData={sortOptionData} />
              {/* <div className=' flex items-center ' >
                <h2 className=' text-[1.12rem] font-nunito ' >I am avialable</h2>
                <Slider switchOn={switchOn} setSwitchOn={setSwitchOn} />
              </div> */}
              <div className=' flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ' >
                <BiSearch className=' text-[1.1rem] ' />
                <input type="text" className=' bg-[#101935] outline-none text-[.9rem] w-[87%] ' />
              </div>
            </div>
            <div className=' w-[100%] h-[60vh] flex justify-center items-center mt-[2rem] ' >
              {/* <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] mb-[1rem] ' >Active Member </h2> */}

              {/* <AllTeam /> */}

              <ContactAdminForm />
            </div>
          </div>
        </div>
      </PoliceLayout>
    </>
  )
}

export default ContactAdmin
