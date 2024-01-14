import React from 'react'
import CommentCard from './CommentCard'

const Comment = ({ data }) => {
  return (
    <div className='  px-[1rem] py-[.9rem] w-[100%]  rounded-md flex flex-col gap-[.4rem]  ' >

      <div className=' flex w-[100%] flex-col gap-[.8rem] overflow-auto ' >
        {data && data.map((comment, index) => {
          return (
            <CommentCard key={index} data={comment} />
          )
        })}
      </div>
    </div>
  )
}

export default Comment
