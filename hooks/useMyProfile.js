import Api from "@/api/api";
import { useEffect, useState } from "react";

const useMyProfile = (isLogin) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await Api.get(`/my-profile`);

      if (response && response.data) {
        setData(response.data);
      }
    } catch (err) {
      //   console.error(err);
      setData(null);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLogin]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useMyProfile;
