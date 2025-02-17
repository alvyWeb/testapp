import { formatDate } from "@/utils/formatDate";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const useNews = (arg) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get("https://gnews.io/api/v4/search?q=tennis&lang=en&country=us&max=10&apikey=4531de487cae7c54089fb73b9d9d5aec");

      if (response.status === 200) {
        const resData = response?.data?.articles;
        setNews(resData);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return {
    news,
    isLoading,
    error,
  };
};

export default useNews;