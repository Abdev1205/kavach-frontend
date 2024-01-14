import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiChatTeardropTextBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { TbHeartFilled } from "react-icons/tb";
import { MdOutlineVerifiedUser, MdCreate } from "react-icons/md";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
import Comments from "@/components/user/Social/Comments.js";
const FeedChips = ({
  img,
  content,
  likes,
  comments,
  postId,
  likeStatus,
  setRefresh,
  loading,
  name,
  time,
  refresh
}) => {
  const [liked, setLiked] = useState(likeStatus);
  const [like, setLike] = useState(likes);
  const [showComment, setShowComment] = useState(false);
  const [expandImg, setExpandImg] = useState(false);
  const toggleExpandImg = () => {
    setExpandImg(!expandImg);
  };
  const toggleLike = () => {
    setLiked(!liked);
    if(!liked){
      setLike(like + 1);
    }else{
      setLike(like - 1);
    }
    try {
      axios.post(
        `${ApiUrl}/api/updateLike`,
        {
          postId,
        },
        {
          withCredentials: true,
        }
      );
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  let dateObj = new Date(time);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  const dateString = formattedDate.slice(0, 17);

  console.log("Date:", dateString);
  const date = dateObj.toUTCString();

  return (
    <div className=" bg-[#101935] w-full min-h-[73vh] rounded-xl border-borderBg border-[0.2vh] text-fontSec">
      <div className="flex flex-row">
        <div className=" rounded-full w-12 h-12 mt-3 ml-3 bg-black overflow-hidden">
          <img src="https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg" />
        </div>

        <div className="flex flex-col mt-2">
          <div className=" px-3 text-lg flex text-fontCol2 items-center">
            {name}
          </div>
          <div className=" px-3 -mt-1 text-md text-fontCol/70 flex items-center">
            {dateString}
          </div>
        </div>
      </div>
      <div className=" py-3 px-6">{content}</div>
      <div className=" bg-[#25234f] w-full h-[50vh] overflow-hidden hover:cursor-pointer ">
        {<img src={`${img}`} onClick={toggleExpandImg} alt="Uploaded" />}
        {expandImg && (
          <div
            onClick={toggleExpandImg}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <img
              src={`${img}`}
              alt="Expanded"
              className="max-h-full max-w-full"
            />
          </div>
        )}
      </div>
      <div className="px-8 py-2">
        <div className=" flex flex-grow items-center justify-around h-14">
          <div className="text-lg items-center flex flex-row">
            <span className=" p-2">{like}</span>
            {!liked ? (
              <button disabled={loading}>
                <FaRegHeart
                  onClick={toggleLike}
                  className={"h-6 w-6 text-btn hover:cursor-pointer"}
                />
              </button>
            ) : (
              <TbHeartFilled
                onClick={toggleLike}
                className={"h-7 w-7 text-btn hover:cursor-pointer"}
              />
            )}
          </div>
          <div className=" items-center flex flex-row">
            <span className=" p-2">{comments}</span>
            <PiChatTeardropTextBold
              onClick={() => setShowComment(true)}
              className="h-7 w-7 text-btn hover:cursor-pointer"
            />
            {showComment && (
              <div
                onClick={() => setShowComment(false)}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
              >
                <div
                  className="z-60 bg-second2 text-fontCol h-[90vh] w-4/5 p-5 rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="h-full text-4xl text-center">
                    Comments
                    <Divider2 />
                    <Comments postId={postId} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" items-center flex flex-row">
            <span className=" p-2">{likes}</span>
            <LuSend className="h-6 w-6 text-btn hover:cursor-pointer" />
          </div>
          <MdOutlineVerifiedUser className="h-7 w-7 text-btn hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Divider2 = () => (
  <div className="h-[0.1vh] rounded-xl my-4 mx-4 bg-[#4E546B]" />
);

export default FeedChips;
