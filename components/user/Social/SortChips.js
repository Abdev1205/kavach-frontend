import { RxCross1 } from "react-icons/rx";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
const SortChips = ({ text }) => {
  return (
    <div className="flex items-center bg-second p-4 rounded-lg w-32 text-xl hover:cursor-pointer">
      <RxCross1 className="w-6 h-6 mt-1 mr-4" />
      {text}
    </div>
  );
};

export default SortChips;