"use client";
import { MainContext } from "@/context";
import { useContext, useState, useEffect } from "react";
import TabComponent from "./home/TabComponent";
import Register from "./regsiterTabComponents/TabComponent";
import Games from "./gamescomponents/TabComponent";

export default function Home() {
  const { user } = useContext(MainContext);
  const authenticateUser = user?.data?.data; // Check if user is authenticated
  const [fragment, setFragment] = useState("");

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setFragment(window.location.hash); // Update fragment state
    };

    // Set initial hash
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Log fragment and authentication state for debugging
  useEffect(() => {
    console.log("Current Fragment:", fragment);
    console.log("Authenticated User:", authenticateUser);
  }, [fragment, authenticateUser]);

  return (
    <main>
      {authenticateUser ? (
        // If authenticated, always show Games
        <Games />
      ) : (
        // If not authenticated, show component based on hash
        <>
          {fragment === "#0" && <Register />}
          {fragment === "#1" && <Games />}
          {(fragment === "" || fragment === "#") && <TabComponent />}
        </>
      )}
    </main>
  );
}