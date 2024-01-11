'use client'
import React, { useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { DataLayer } from '@/context/UserDataProvider';
import AuthenticatedLayer from './AuthenticatedLayer';
import RoleLayer from './RoleLayer';
import PoliceDashboard from '../police/dashboard';
import AdminDashboard from '../admin/dashboard';
import UserDashboard from '../user/dashboard';

const GuestLayer = ({ children }) => {
  const { isAuthenticated, role } = useContext(DataLayer);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    const userRole = Cookies.get('userRole');


    if (isAuthenticated && token && userRole) {

      switch (userRole) {
        case 'admin':

          break;
        case 'police':

          break;
        case 'public':

          break;
        default:
          break;
      }
    }
  }, [isAuthenticated, role]);
  return (
    <AuthenticatedLayer>
      <RoleLayer>
        {children}
      </RoleLayer>
    </AuthenticatedLayer>
  );
}

export default GuestLayer;
