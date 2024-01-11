import React from 'react'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import SingleLinks from './SingleLinks'
import MultipleLinks from './MultipleLinks'
import { GoHomeFill } from "react-icons/go";
import { MdAssignmentAdd } from "react-icons/md";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { MdCall } from "react-icons/md";

const Panel = () => {

  const firLinkData = [
    {
      name: "Reported",
      href: "/police/fir/report"
    },
    {
      name: "Registered",
      href: "/police/fir/registered"
    },
    {
      name: "Investigation",
      href: "/police/fir/investigation"
    },
    {
      name: "Action taken",
      href: "/police/fir/action"
    },
    {
      name: "Case closed",
      href: "/police/fir/closed"
    },
  ]

  const socialLinkData = [
    {
      name: "Social Media",
      href: "/police/social/media"
    },
    {
      name: "Investigation",
      href: "/police/social/investigate"
    },

  ]

  return (
    <>
      <div className=' bg-[#080F25] panel-shadow border-r-[1px] border-[#1F2A4A] w-[18rem] h-[100vh] flex flex-col  ' >
        <PanelHeader />
        <div className=' scrollbar-hide flex flex-col gap-[.5rem] px-[1.5rem] py-[1.5rem] h-[61.4vh] overflow-y-scroll  ' >
          <SingleLinks name={"Dashboard"} icon={<GoHomeFill />} href={'/police'} />
          <MultipleLinks name={"FIR reports"} icon={<MdAssignmentAdd />} link={'/police/fir'} id={0} data={firLinkData} />
          <SingleLinks name={"Feedback"} icon={<MdMarkUnreadChatAlt />} href={'/police/feedback'} />
          <MultipleLinks name={"Social"} icon={<BsSendFill />} link={'/police/social'} id={1} data={socialLinkData} />
          <SingleLinks name={"Our Teams"} icon={<HiUserGroup />} href={'/police/teams'} />
          <SingleLinks name={"Contact Admin"} icon={<MdCall />} href={'/police/contact'} />
        </div>
        <div className='   ' >
          <PanelFooter />
        </div>
      </div>
    </>
  )
}

export default Panel
