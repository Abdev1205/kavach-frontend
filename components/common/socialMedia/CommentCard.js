import React from 'react'
import { TestProfileImage } from '@/public/assetsManager'
import { FcReddit } from "react-icons/fc";
import Image from 'next/image';

const CommentCard = ({ data }) => {
  const sampleData = {
    name: "Priyanshu Ranjan",
    comment: "In mulle ko pakad pakad ke maro jo pathar baji karte hai ,desh ke andar rah kar desh ko barbad kar rahe hai yeh sab desh drohi long",
    profileImage: TestProfileImage,
    createdAt: "14.01.24"
  }
  return (
    <div className=' bg-[#101935]  w-[100%] px-[.5rem] py-[.5rem] rounded-md flex items-start gap-[.5rem] ' >
      <div className=' flex flex-col justify-center items-center    ' >
        <Image
          src={data?.profileImage}
          width={300}
          height={300}
          alt="Profile Picture"
          className={` ${data.profileImage ? " w-[7.5rem]  aspect-square translate-y-[.4rem] " : "hidden"} `}

        />
        <FcReddit className={` ${data.profileImage ? "hidden" : ""} text-[1.6rem] `} />
        {/* <div className=' text-[.75rem] ' >
            {data.createdAt}
          </div> */}
      </div>

      <div className=' flex flex-col gap-[.07rem] bg-[#1F253B] px-[.5rem] py-[.5rem] rounded-md   ' >
        <h2 className=' flex gap-[.4rem] items-center text-[#6C72FF] text-[.85rem] font-[600] font-nunito ' >
          {data.name}
          <span className='  bg-[#1F253B] text-[#AEB9E1] text-[.8rem] font-[500] px-[.2rem] py-[.08rem] rounded-sm  '  >
            {data.createdAt}
          </span>
        </h2>
        <p className=' text-[.9rem]  ' >{data.comment}</p>
      </div>

    </div>
  )
}

export default CommentCard
