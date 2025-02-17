"use client";
import Navbar from "@/components/common/Navbar";
import ProfileHeader from "@/components/common/ProfileHeader";
import Loader from "@/components/common/loader/Loader";
import { auth } from "@/firebase/firebase";
import { useWindowHeight } from "@/hooks/useWindowHeight";
import { MainProvider } from "@/provider";
import { Rubik } from "next/font/google";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/layouts/Layout.module.scss";
import "./global.css";
import "./layout.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);
  const [rtl, setRtl] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();
  const { id } = useParams();
  const childrenHeight = useWindowHeight();

  // const user = useMyProfile(isLogin);
  const [user, loading] = useAuthState(auth);
  const userData = {
    data: user,
    isLoading: loading,
  };

  useEffect(() => {
    const mode = localStorage.getItem("dark");
    if (mode !== null) {
      setDark(mode === "true" ? true : false);
    }
  }, []);

  const pathSplit = pathname?.split("/");
  const isTournamentDetails = pathSplit[1] === "tournaments" && id;

  let isShowNav = true;
  let isOnlyNav = false;
  // if (pathname === "/register" || pathname === "/registerTab") {
  //   isShowNav = false;
  // }

  if (
    pathname === "/" ||
    pathname === "/login" ||
    isTournamentDetails ||
    pathSplit[1] === "match" ||
    !user
  ) {
    isOnlyNav = true;
  }

  const onLogin = () => {
    setIsLogin(!isLogin);
  };

  const onDarkMode = (mode) => {
    setDark(mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "color-scheme",
      dark ? "light" : "dark"
    );
  }, [dark]);

  return (
    <html lang="en">
      <head>
        <title>ATPenn</title>
        <link rel="icon" href="/icon/favicon.png" />
        {/* Google tag (gtag.js)  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D76ZCRDKLC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-D76ZCRDKLC');
              `,
          }}
        />
      </head>
      <body
        className={
          rubik.className +
          ` light` +
          " " +
          ` ${rtl ? "isrtl" : "isltr"}`
        }
      >
        <MainProvider
          user={userData}
          onLogin={onLogin}
          onDarkMode={onDarkMode}
          dark={dark}
        >
          <div className={styles.container}>
            {/* {isShowNav && !isOnlyNav && (
              <ProfileHeader
                dark={dark}
                setDark={setDark}
                rtl={rtl}
                setRtl={setRtl}
              />
            )} */}
            <ProfileHeader
                dark={dark}
                setDark={setDark}
                rtl={rtl}
                setRtl={setRtl}
              />
            <div className="mainlayoutb" style={{ 
              // maxHeight: childrenHeight || "100%", 
              maxHeight: "calc(100vh - 190px)",
              overflowY: "auto", 
              paddingBottom: "100px"
            }}>
              {loading ? <Loader /> : children}
            </div>

            {isShowNav && <Navbar dark={dark} />}
            <ToastContainer
              position="top-right"
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
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
