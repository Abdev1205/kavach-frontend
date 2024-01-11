import Sidebar from '@/components/sidebar'
import React, {useContext, useEffect} from 'react'
import Feed from './Feed'
import toast from 'react-hot-toast';
import { Data } from '../Context/Context.js';
import { useRouter } from 'next/router.js';
  
const UserDash = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(Data);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
  return (
    <div className="flex w-screen h-screen bg-primary">
      <Sidebar />
      <Feed />
    </div>
  )
}

export default UserDash