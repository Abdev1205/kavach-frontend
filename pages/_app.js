<<<<<<< HEAD
import "@/styles/globals.css";
import Context from "@/Context/Context";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return <>
    <Context>
      <Component {...pageProps} />
      <Toaster />
    </Context>
  </>;
=======
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDataProvider from '@/context/UserDataProvider';
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react';
import AuthenticatedLayer from './(protectedLayer)/AuthenticatedLayer';
import RoleLayer from './(protectedLayer)/RoleLayer';
import { useRouter } from 'next/router';
import GuestLayer from './(protectedLayer)/GuestLayer';




export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  const router = useRouter();
  const protectedRoutePrefixes = ["admin", "police", "user"];

  const isProtectedRoute = () => {
    const currentRoute = router.pathname;
    return protectedRoutePrefixes.some(prefix => currentRoute.startsWith(`/${prefix}`));
  };
  console.log("is route protercted", isProtectedRoute())

  return (

    <UserDataProvider>
      <NextTopLoader showSpinner={false} color="#6C72FF" />
      {isProtectedRoute() ? (
        <AuthenticatedLayer>
          <RoleLayer>
            <Component {...pageProps} />
          </RoleLayer>
        </AuthenticatedLayer>
      ) : (
        <Component {...pageProps} />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserDataProvider>
  )
>>>>>>> 57488ace3688ee67d5d2bed7e20bf1d00f8884a9
}
