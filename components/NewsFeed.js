import React from "react";

const NewsFeed = () => {
  return (
    <div className="p-4">
      <div className="bg-second w-full px-4 py-2 text-btn text-2xl h-[48vh] border-borderBg border-[0.2vh] rounded-xl">
        <span className="p-2">News around you</span>
        <Divider />
        <div className="py-4 overflow-y-auto overflow-hidden h-[40vh]">
          <NewsChip />
          <NewsChip />
          <NewsChip />
          <NewsChip />
          <NewsChip />
        </div>
      </div>
    </div>
  );
};
const Divider = () => <hr className="sidebar-hr mt-2" />;
const Divider2 = () => <div className="h-[0.1vh] rounded-xl mx-4 bg-[#4E546B] mt-2" />;
const NewsChip = () => {
  return (
    <div className=" w-full my-2 bg-second2 rounded-xl border-borderBg border-[0.2vh]">
      <div className="flex px-4 py-2 text-fontCol2 font-roboto font-semibold">
        <div className=" bg-second h-12 w-12 rounded-full"></div>
        <div className="ml-2 ">
          <div className="text-lg">Rajasthan Police</div>
          <div className=" text-fontSec -mt-2 text-[1.8vh]">24-12-23</div>
        </div>
      </div>
      <Divider2 />
      <div className=" text-[2vh] font-nunito text-fontSec px-5 py-2">
        AS per Bhavisya Malika book and Indian MDA our city is going to hit
        massive earthqake, and cyclone. So all citizen are requested to stay in
        home
      </div>
    </div>
  );
};
export default NewsFeed;
