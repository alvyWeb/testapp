"use client";
import { MainContext } from "@/context";
import { useContext, useState, useEffect } from "react";
import TabComponent from "./home/TabComponent";
import Register from "./regsiterTabComponents/TabComponent";
import Games from "./gamescomponents/TabComponent";

export default function Home() {
  const { user } = useContext(MainContext);
  const authenticateUser = user?.data?.data; // Check if user is authenticated
  const [fragment, setFragment] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;

      // Refresh page once when hash changes
      if (sessionStorage.getItem("lastHash") !== newHash) {
        sessionStorage.setItem("lastHash", newHash);
        window.location.href = window.location.href; // Refresh the page once
      }
    };

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main>
      {authenticateUser ? (
        <Games /> // Always show Games if user is authenticated
      ) : (
        <>
          {fragment === "#0" && <Register />}
          {fragment === "#1" && <Games />}
          {(fragment === "" || fragment === "#") && <TabComponent />}
        </>
      )}
    </main>
  );
}
