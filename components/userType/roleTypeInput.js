import React from 'react'


const RoleTypeInput = ({ user, icon, userType, setUserType }) => {
  return (
    <div onClick={() => setUserType(user)} className={` flex flex-col gap-[2rem] justify-center items-center bg-[#080F254A] px-[1rem] py-[1rem] w-[15rem] h-[15rem] ${userType == user ? "border-[4px] user-selected scale-110 " : "border-[1px] user-not-selected "} border-[#6c71ff50] rounded-md cursor-pointer duration-300 `} >
      <div className={` flex justify-center items-center text-[#dadbf2] text-[2.5rem] w-[6rem] h-[6rem] user-elipse-gradient rounded-full `} >
        {icon}
      </div>
      <h2 className=' font-nunito font-[600] text-[white] ' >{user}</h2>
    </div>
  )
}

export default RoleTypeInput
