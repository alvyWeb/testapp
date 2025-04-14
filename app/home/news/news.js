"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";


import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import "./news.scss";
import AtPennMessage from "./atpenn";
import StateNews from "./statNews";

const News = ({ newsData }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
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

        // Sort articles by date & time (ascending)
        const sortedArticles = fetchedArticles
          .filter((article) => article.articleDateTime >= now)
          .sort((a, b) => a.articleDateTime - b.articleDateTime);

        setArticles(sortedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className="news_app">
      <div className="main_container_app">
        {loading ? (
          <NewsPageLoader />
        ) : articles.length > 0 ? (
          <div className="container">
            {articles.map((article, index) => (
              <div key={article.id || index}>
                <Article article={article} index={index} />

                {/* Insert StateNews every 2 articles */}
                {(index + 1) % 2 === 0 && (
                  <StateNews key={`stat-${index}`} offset={index + 1} limit={2} />
                )}

                {/* Insert AtPennMessage every 3 articles */}
                {(index + 1) % 3 === 0 && <AtPennMessage key={`atpenn-${index}`} />}
              </div>
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