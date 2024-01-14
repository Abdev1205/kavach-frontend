import React, { useEffect, useState } from 'react'
import DeleteLottieAnimation from '../animation/DeleteLottieAnimation';

const DeleteFir = ({ visible, onClose = () => { }, callback = () => { } }) => {
  const [deletingCard, setDeletingCard] = useState(false)
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
    >
      <div className=' flex flex-col items-center w-[22rem]  px-[2rem] py-[2rem] register-fir-bg  ' >
        <DeleteLottieAnimation />
        <p className=' font-inter font-[500] text-[.9rem] ' >Are you sure want to delete this Card</p>
        <div className='  flex flex-col gap-[1rem] w-[100%] mt-[1rem]  ' >
          <button onClick={(e) => deleteCardById(e)} className={` ${deletingCard ? "animate-pulse" : ""} flex gap-[.8rem] justify-center items-center bg-[#DC2626] py-[.6rem] text-white rounded-md mt-[2rem] `} > {deletingCard ? "Deleting Card" : "Delete card"}
            <div className={` ${deletingCard ? "" : "hidden"} w-[1rem] h-[1rem] border-t-2  border-white rounded-[50%] animate-spin `} />
          </button>
          {/* <button className=' rounded-md  px-[1rem] py-[.6rem] bg-[#DC2626] text-white font-inter  ' >Delete</button> */}
          <button onClick={() => onClose()} className=' rounded-md   py-[.6rem] stage-no-select  ' >Cancel</button>
        </div>
      </div>
    </div>


  )
}

export default DeleteFir
