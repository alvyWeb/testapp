import { useEffect, useState } from "react";
import Api from "./api";

const usePlayerProfile = (arg) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      if (arg?.id) {
        setIsLoading(true);
        setError(null);
        const response = await Api.get(`/profile/${arg?.id}`);

        if (response.status === 200) {
          const resData = response?.data;
          setProfile(resData);
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [arg?.id]);

  return {
    profile,
    isLoading,
    error,
  };
};

export default usePlayerProfile;
