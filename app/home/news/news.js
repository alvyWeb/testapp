"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";

import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import Article from "./Article";
import "./news.scss";
import AtPennMessage from "./atpenn";
import StateNews from "./statNews";

const News = ({ newsData }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const fetchNews = async () => {
      try {
        const snapshot = await getDocs(collection(db, "news"));
        const articles = snapshot.docs.map((doc) => {
          const data = doc.data();
          const fullDateTime = new Date(`${data.date}T${data.time}:00`);
          return {
            id: doc.id,
            ...data,
            fullDateTime,
          };
        });

        // Get current time
        const now = new Date();

        // Sort articles by how close the time is to now (future times first)
        const sortedArticles = articles.sort((a, b) => {
          const aDiff = a.fullDateTime - now;
          const bDiff = b.fullDateTime - now;

          // Prioritize future articles over past ones
          const aAbs = aDiff >= 0 ? aDiff : Infinity;
          const bAbs = bDiff >= 0 ? bDiff : Infinity;

          // If both are in the future, sort by soonest
          if (aAbs !== bAbs) return aAbs - bAbs;

          // If both are past, sort by recent past
          return a.fullDateTime - b.fullDateTime;
        });

        setNewsData(sortedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className="news_app">
      <div className="main_container">
        {loading ?  (
          <NewsPageLoader />
        ) : newsData.length > 0 ? (
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