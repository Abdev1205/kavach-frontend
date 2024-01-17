import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';

const CreateFeedback = ({ visible, onClose = () => { }, callback = () => { } }) => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [feedback, setFeedback] = useState("")
  const { setLoading, setRefresh } = useContext(DataLayer);
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


  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    console.log("Creating")
    try {
      console.log("Calling");
      console.log(selectedImage);

      const { data } = await axios.post(
        `${ApiUrl}/api/createNewsChips`,
        {
          content: caption,
        },
        {
          withCredentials: true,
        }
      );

      console.log("After Call");
      setCaption("");
      onClose();
      callback();
      // setRefresh((prev) => !prev);
      setLoading(false);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
    >
      <div className=' register-fir-bg flex flex-col items-center w-[30rem]  px-[2rem] py-[2rem] register-fir-bg  ' >
        <form onSubmit={submitHandler} className=' flex flex-col w-[100%] gap-[1rem] text-[#AEB9E180] ' >
          <TextFields value={caption} setValue={setCaption} label="News" placeholder="Enter News" required={true} />
          <TextFields value={city} setValue={setCity} label="City" placeholder="Enter City" required={true} />

          <button
            type="submit"
            className="bg-[#6C72FF] mt-[1.2rem] text-white rounded-md flex justify-center items-center w-[100%] h-[2.8rem] "
          >
            Create News
          </button>
        </form>
      </div>


    </div>
  )
}

export default CreateFeedback
