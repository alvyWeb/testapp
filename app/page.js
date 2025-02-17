"use client";
import TennisIframe from "@/components/common/TennisIframe";
import { MainContext } from "@/context";
import { useContext, useState } from "react";
import TabComponent from "./home/TabComponent";
export default function Home() {
  const { user, hashLink: hash } = useContext(MainContext);
  const authenticateUser = user?.data?.data;
  const [fragment, setFragment] = useState("");

  return (
    <main>
      {hash ? <TennisIframe hash={hash} /> : <TabComponent />}

      {/* {authenticateUser ? <Games /> : <TabComponent />} */}
    </main>
  );
}
