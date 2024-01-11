import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { server } from "@/pages/index.js";
import axios from "axios";
import { Data } from "../Context/Context.js";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/userDash");
    }
  }, [isAuthenticated, router]);

  return (
    <form onSubmit={submitHandler}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
