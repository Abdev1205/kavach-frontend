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
}
