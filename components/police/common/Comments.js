import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl } from "@/utils/BaseUrl.js";
import { FaPlus } from "react-icons/fa6";

const Comments = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = async () => {
    try {
      // Add the comment to the server
      const response = await axios.post(`${ApiUrl}/api/addComment`, {
        postId: postId,
        comment: commentText,
      }, {
        withCredentials: true
      });

      // If the comment is added successfully, update the comments state
      if (response.data.status === 200) {
        setComments([...comments, response.data.data]);
        setCommentText(''); // Clear the comment text input
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  useEffect(() => {
    // Fetch comments for the post when the component mounts
    const fetchComments = async () => {
      try {
        const {data} = await axios.get(`${ApiUrl}/api/postComments?postId=${postId}`,{withCredentials: true});
        console.log("COmments: ");
        setComments(data.result);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]); // Fetch comments whenever postId changes

  return (
    <div className="flex flex-col text-xl">
      
      <div className="flex items-center justify-between p-2">
        {/* Add comment input */}
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          type="textarea"
          className=" resize-none text-lg px-4 w-full mr-2 py-2 placeholder:text-fontCol rounded-md bg-second min-h-14 max-h-14"
          placeholder="Enter Comment"
          required
        />
        {/* Add comment button */}
        <button
          onClick={handleAddComment}
          className="bg-btn text-fontCol2 p-2 rounded-md hover:bg-btn/70"
        >
        <FaPlus className=" w-9 h-9" />
        </button>
      </div>
      <div className="overflow-auto">
        {/* Render comments */}
        {comments.map((item) => (
          <div key={item._id} className="mb-2">
            <strong>{item.name}:</strong> {item.comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
