import Sidebar from "@/components/sidebar";
import React from "react";

const Complaint = () => {
  return (
    <div className="bg-primary flex">
      <Sidebar />
      <div className=" text-fontCol font-nunito justify-center flex flex-grow">
        <div className="flex flex-col w-1/2 items-center border-r-2 border-l-2 border-borderBg">
          <div className=" p-6 text-4xl border-b-2 w-full text-center border-borderBg">
            Complaint Form
          </div>

          <div className=" gap-2 w-full flex p-4 justify-evenly">
            <div className="flex-col flex">
              <label>Name: </label>
              <input
                width={500}
                className=" p-2 w-56 rounded-lg bg-second"
                placeholder="Enter name"
              />
            </div>
            <div className="flex-col flex">
              <label>Phone No: </label>
              <input
                width={500}
                className=" p-2 w-56 rounded-lg bg-second"
                placeholder="Enter phone no"
              />
            </div>
          </div>
          <div className="gap-2 w-full flex p-2 justify-evenly">
            <div className="flex-col flex">
              <label>Complaint: </label>
              <input
                width={500}
                className=" p-2 w-56 rounded-lg bg-second"
                placeholder="Enter Complaint"
              />
            </div>
            <div className="flex-col flex">
              <label>Complaint Subject: </label>
              <input
                width={500}
                className=" p-2 w-56 rounded-lg bg-second"
                placeholder="Enter Subject"
              />
            </div>
          </div>
          <div className="gap-2 w-full flex-col flex px-12 p-4 justify-evenly">
            <label className=" font-bold">Describe Complaint</label>
            <textarea
              type="textarea"
              className=" resize-none text-lg px-4 w-full py-2 rounded-md bg-second min-h-32 max-h-32"
              placeholder="Describe your complaint"
              required
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Complaint;
