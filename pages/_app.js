import { Bai_Jamjuree } from "@next/font/google";
import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bai = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-bai",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const active = router.pathname.split("/")[1];
  return (
    <div
      className={bai.className}
      style={{
        color: "white",
      }}
    >
      {/* <!-- Start of HubSpot Embed Code --> */}
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/27183448.js"
      ></Script>
      {/* <!-- End of HubSpot Embed Code --> */}

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.ANALYTICS_ID}');
          `}
      </Script>
      <Navbar active={active} />
      <Component {...pageProps} />
      <ToastContainer />

      <Footer />
    </div>
  );
}
