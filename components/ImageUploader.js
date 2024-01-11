import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { DataLayer } from "../context/UserDataProvider.js";
import axios from "axios";

const ImageUploader = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");
  const { setLoading, setRefresh } = useContext(DataLayer);

  const submitHandler = async (e) => {
    setLoading(true);

    try {
      console.log("Calling");
      console.log(selectedImage);

      const { data } = await axios.post(
        `${ApiUrl}/api/newPost`,
        {
          content: caption,
          img: selectedImage,
        },
        {
          withCredentials: true,
        }
      );

      console.log("After Call");
      setCaption("");
      setRefresh((prev) => !prev);
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

  return (
    <>
      <form onSubmit={() => submitHandler}>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          type="textarea"
          className=" resize-none text-lg px-4 w-full py-2 placeholder:text-fontCol rounded-md bg-second min-h-32 max-h-32"
          placeholder="Enter caption"
          required
        />
        <div className="mt-4 flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col w-full h-full items-center justify-center pt-5 pb-6">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover mb-4"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              )}
            </div>
            <input
              id="dropzone-file"
              accept=".gif, .png, .jpg, .jpeg, .webp"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-btn text-white/70 rounded-lg text-2xl w-full h-14 my-4"
        >
          Create Post
        </button>
      </form>
    </>
  );
};

export default ImageUploader;
