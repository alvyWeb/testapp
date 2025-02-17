"use client";
import { MainContext } from "@/context";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Loader from "./loader/Loader";

const ProtectedRoute = ({ children }) => {
  const {
    user: { data, isLoading },
  } = useContext(MainContext);
  const [isCheckAuth, setIsCheckAuth] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const link = searchParams.get("link");
  const user = data;

  useEffect(() => {
    setTimeout(() => {
      if (!isLoading) {
        setIsCheckAuth(true);
      }
    }, 1000);
  }, [isLoading, router]);

  if (!isCheckAuth) {
    return <Loader />;
  }
  if (!user && isCheckAuth) {
    // router.push(`/login?link=${link}`);
    router.push(`/login`);
  }

  return <>{user ? children : null}</>;
};

const ProtectedRoute222 = ({ children }) => {
  const {
    user: { data, isLoading, error },
  } = useContext(MainContext);
  const [isCheckAuth, setIsCheckAuth] = useState(false);

  const router = useRouter();
  const user = data?.data;

  useEffect(() => {
    setTimeout(() => {
      if (!isLoading) {
        setIsCheckAuth(true);
      }
    }, 1000);
  }, [isLoading, router]);

  if (!isCheckAuth) {
    return <Loader />;
  }
  if (!isLoading && !user && isCheckAuth) {
    router.push("/login");
  }

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
