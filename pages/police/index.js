import React from 'react'
import PoliceRoleLayer from '../(protectedLayer)/PoliceRoleLayer'
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from 'react'
import { DataLayer } from '@/context/UserDataProvider'
import { useRouter } from 'next/router'
import axios from 'axios'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import AnalyticsCard from '@/components/police/dashboard/analytics/AnalyticsCard'
import { FirAnalyticsImage, FeedbackAnalytics, CaseAnaytics, CrimeAnalytics } from "../../public/assetsManager"
import RecentFir from '@/components/police/dashboard/recent/RecentFir'
import RecentFeedback from '@/components/police/dashboard/recent/RecentFeedback'


const index = () => {
  const { setIsAuthenticated } = useContext(DataLayer);
  const router = useRouter()

  const analyticsData = [
    {
      id: 0,
      name: "FIR reports",
      count: 1250,
      increased: true,
      percent: 4.8,
      img: FirAnalyticsImage
    },
    {
      id: 1,
      name: "Feedback",
      count: 1732,
      increased: true,
      percent: 9.8,
      img: FeedbackAnalytics
    },
    {
      id: 2,
      name: "Case Solved",
      count: 2768,
      increased: true,
      percent: 15.3,
      img: CaseAnaytics
    },
    {
      id: 3,
      name: "Crime Rate",
      count: 57,
      increased: false,
      percent: 1.35,
      img: CrimeAnalytics
    }
  ]


  return (
    <>

      <PoliceLayout>
        <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ' >
          <Panel />
          <div className=' w-[81%] h-[100vh] flex flex-col items-center px-[2.5rem] pt-[1rem] text-[#AEB9E1] text-[2rem] ' >
            <div className=' flex justify-between w-[100%]   ' >
              {
                analyticsData && analyticsData.map((data, index) => {
                  return (
                    <AnalyticsCard key={index} data={data} />
                  )
                })
              }
            </div>
            <div>
              <div className=' w-[100%] mt-[1rem]  ' >
                <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] ' >Recent FIr </h2>
                <RecentFir />
              </div>
              <div className=' w-[100%] mt-[1.5rem]  ' >
                <h2 className=' text-[#6C72FF] text-[1.1rem]  w-[15rem] ' >Recent Feedback</h2>
                <RecentFeedback />
              </div>
            </div>
          </div>
        </div>
      </PoliceLayout>

    </>
  )
}

export default index
