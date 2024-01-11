import React from 'react'
import UserDash from '../userDash'

const UserLayout = ({ children }) => {
  return (
    <>
      <UserDash />
      {children}
    </>
  )
}

export default UserLayout
