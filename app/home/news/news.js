"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";

// import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import Article from "./Article";
import "./news.scss";
import AtPennMessage from "./atpenn";
import StateNews from "./statNews";

const News = ({ newsData }) => {
  const [articles, setArticles] = useState([]);

  // const staticArticles = [
  //   {
  //     title: "1 לורם איפסום הוא כינוי לטקסט כה חסר משמעות לחלוטין - הנקרא לפעמים",
  //     description: "לורם איפסום הוא כינוי לטקסט כה חסר משמעות לחלוטין - הנקרא לפעמים",
  //     image: "/home/news/Rectangle554.jpg",
  //     url: "#",
  //     source: "אדמין",
  //     message: "26 תגובות",
  //     publishedAt: "4 דק’ קריאה",
  //   },
  //   {
  //     title: "2 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
  //     image: "/home/news/Rectangle491.png",
  //     url: "#",
  //     source: "אדמין",
  //     message: "26 תגובות",
  //     publishedAt: "לפני שעה",
  //   },
  //   {
  //     title: "3 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
  //     image: "/home/news/Rectangle491.png",
  //     url: "#",
  //     source: "אדמין",
  //     message: "26 תגובות",
  //     publishedAt: "לפני שעה",
  //   },
  //   {
  //     title: "4 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
  //     image: "/home/news/Rectangle491.png",
  //     url: "#",
  //     source: "אדמין",
  //     message: "26 תגובות",
  //     publishedAt: "לפני שעה",
  //   },
  //   {
  //     title: "5 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
  //     image: "/home/news/Rectangle491.png",
  //     url: "#",
  //     source: "אדמין",
  //     message: "26 תגובות",
  //     publishedAt: "לפני שעה",
  //   },
  // ];

  // Assume this is the data for the Article component
  // const articleData = null; // Replace with actual data or null if no data is available

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, "your_news_collection"));
      const now = new Date();

      const fetchedArticles = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Combine date and time to a Date object
        const dateTimeStr = `${data.date} ${data.time}`;
        const articleDateTime = new Date(dateTimeStr);

        fetchedArticles.push({
          id: doc.id,
          ...data,
          articleDateTime,
        });
      });

      // Sort by closest future time to now
      const sortedArticles = fetchedArticles
        .filter(article => article.articleDateTime >= now) // only future or current articles
        .sort((a, b) => a.articleDateTime - b.articleDateTime); // ASC

      setArticles(sortedArticles);
    };

    fetchArticles();
  }, []);

  return (
    <main className="news_app">
      <div className="main_container">
        {newsData.length > 0 ? (
          <div className="container">
            {/* Display first article normally if articleData is not available */}

            {newsData?.news?.length > 0 && (
              <div className="containerInner">
                {newsData?.news?.map((article, index) => (
                  <Article article={article} key={article?.uri} index={index} />
                ))}
              </div>
            )}

            {/* Loop through static articles in chunks of two */}
            {staticArticles.slice(1).map((article, index) => (
                <>
                {index % 2 === 0 && (
                    <StateNews key={`stat-${index}`} offset={index + 1} limit={2} />
                )}

                {/* Display AtPennMessage after every two static articles */}
                {(index + 1) % 2 === 0 && <AtPennMessage key={`atpenn-${index}`} />}
                </>
            ))}
            </div>
        ) : (
          <p>אין חדשות זמינות</p>
        )}
      </div>
    </main>
  );
};

export default News;