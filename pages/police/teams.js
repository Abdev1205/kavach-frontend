import React from 'react'
import PoliceRoleLayer from '../(protectedLayer)/PoliceRoleLayer'
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from 'react'
import RoleLayer from '../(protectedLayer)/RoleLayer'
import { DataLayer } from '@/context/UserDataProvider'
// import PoliceRoleLayer from '../(protectedLayer)/PoliceRoleLayer'
import PoliceLayout from '../layout/PoliceLayout'

const Teams = () => {

  return (
    <PoliceLayout>
      <h1>Apun policewala hai re</h1>
      <button onClick={handleLogout}>Logout</button>
    </PoliceLayout>
  )
}
export default Teams
