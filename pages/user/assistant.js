import React, { useState } from "react";
import Panel from "@/components/common/Leftpanel.js/Panel";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { DataLayer } from "@/context/UserDataProvider.js";
import UserPanel from "@/components/common/Leftpanel.js/UserPanel";
import TextFields from "../../components/common/InputFields/TextFields";

const Assistant = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    // Assume you have an API endpoint to send user input to the backend
    const response = await axios.post(`${ApiUrl}/api/chat`, {
      
    },{withCredentials:true} );

    if (response.ok) {
      const responseData = await response.json();
      // Update chat history with the response from the backend
      setChatHistory((prevChat) => [...prevChat, { user: true, message: userInput }, { user: false, message: responseData.message }]);
      // Clear the user input field
      setUserInput("");
    } else {
      console.error("Error sending message to backend");
    }
  };

  return (
    <div className="bg-primary flex flex-grow">
      <UserPanel chatHistory={chatHistory} />
      <div className="flex w-full justify-center">
        <div className=" ">
          {/* Display chat history */}
          {chatHistory.map((item, index) => (
            <div key={index} className={item.user ? "user-message" : "assistant-message"}>
              {item.message}
            </div>
          ))}
        </div>
        <div className="bottom-10 absolute flex h-12">
          {/* Input field for user */}
          <TextFields
              label="Informant Name"
              placeholder="Enter Full Name"
              required={true}
            />
          {/* Button to send message */}
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
