import React, { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { DataLayer } from '@/context/UserDataProvider';
import Login from '../login';
import UserDashboard from '../user/dashboard';
import UserLayout from '../layout/UserLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';

const PublicRoleLayer = ({ children }) => {
  const { isAuthenticated } = useContext(DataLayer);
  const [userRole, setUserRole] = useState("");
  const [userToken, setUserToken] = useState("");
  const router = useRouter();

  const getData = async () => {
    try {
      const res = await axios.get(`${ApiUrl}/api/user`, {
        withCredentials: true
      });
      console.log(res.data.user);
      setUserRole(res.data.user.role);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setUserToken(token);

    const checkUserRole = async () => {
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      try {
        await getData();
        const isUserPublic = userRole === 'public';
      } catch (error) {
        console.log(error);
      }
    };

    checkUserRole();
  }, [isAuthenticated, userRole, router]);

  return userToken && userRole === 'public' ? (
    <UserLayout>{children}</UserLayout>
  ) : null;
}

export default PublicRoleLayer;
