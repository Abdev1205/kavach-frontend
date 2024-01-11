import React from 'react'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'

const profile = () => {
  return (
    <>
      <PoliceLayout>
        <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ' >
          <Panel />
          <div className=' w-[50%] h-[100vh] flex justify-center items-center text-[#AEB9E1] text-[2rem] ' >
            Profile
          </div>
        </div>
      </PoliceLayout>
    </>
  )
}

export default profile
