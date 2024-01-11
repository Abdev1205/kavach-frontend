import React from 'react'
import PoliceRoleLayer from '../(protectedLayer)/PoliceRoleLayer'
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from 'react'
import RoleLayer from '../(protectedLayer)/RoleLayer'
import { DataLayer } from '@/context/UserDataProvider'
// import PoliceRoleLayer from '../(protectedLayer)/PoliceRoleLayer'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
// import Layout from './Layout'

const Teams = () => {

  return (
    <>
      <PoliceLayout>
        <div className=' bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ' >
          <Panel />
          <div className=' w-[50%] h-[100vh] flex justify-center items-center text-[#AEB9E1] text-[2rem] ' >
            teams
          </div>
        </div>
      </PoliceLayout>
    </>
  )
}
export default Teams
