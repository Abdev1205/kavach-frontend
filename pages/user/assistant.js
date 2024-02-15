import React, { useState } from "react";
import Panel from "@/components/common/Leftpanel.js/Panel";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { DataLayer } from "@/context/UserDataProvider.js";
import UserPanel from "@/components/common/Leftpanel.js/UserPanel";
import TextFields from "../../components/common/InputFields/TextFields";
import { FaPlus } from "react-icons/fa";
import Cookies from 'js-cookie';

const Assistant = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    setChatHistory((prevChat) => [
      ...prevChat,
      { user: "user", message: userInput },
    ]);

    try {
      const token = Cookies.get('accessToken');
      const response = await axios.post(
        `${ApiUrl}/api/fetchResponseGPT?token=${token}`,
        {
          text: userInput,
        },
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        const responseData = response.data;
        setChatHistory((prevChat) => [
          ...prevChat,
          { user: "Police bot", message: responseData.data },
        ]);
        console.log("Chat history");
        console.log(chatHistory);
      } else {
        console.error("Error sending message to backend");
      }
    } catch (error) {
      console.error("Error handling message:", error);
    }

    setUserInput("");
  };

  return (
    <div className="flex flex-grow bg-primary">
      <UserPanel />
      <div className="flex flex-col items-center w-full ">
        <div className="flex flex-col w-[50rem] items-center justify-end py-6 h-[100vh] border-2 border-borderBg">
          <span className="text-2xl text-white ">Police Bot</span>
          <div className="w-full mt-8 border-2 border-borderBg" />
          <div className="flex-col flex-grow w-full px-4 overflow-y-auto text-white ">
            {chatHistory &&
              chatHistory.map((item, index) => (
                <div
                  key={`${item.user}-${item.message}-${index}`}
                  className="p-2 my-4 bg-second rounded-xl h-26x"
                >
                  <div>{item.user}</div>
                  <div className="w-full my-2 border-2 border-borderBg" />

                  <div className="px-2">{item.message}</div>
                </div>
              ))}
          </div>
          <div className="flex h-12">
            <input
              className="bg-[#1F253B] text-[#bcc8f080] px-[1rem] py-[.5rem] rounded-md w-[40rem] outline-none focus:outline-[#6c71ff5c]"
              placeholder="Enter Query"
              required={true}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            {/* Button to send message */}
            <button
              className="flex items-center justify-center ml-1 text-white rounded-lg bg-btn w-14"
              onClick={handleSendMessage}
            >
              <FaPlus className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;