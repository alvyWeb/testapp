"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import useNews from "@/api/useNews";
import StateNews from "./news/statNews";
import Article from "./news/Article";
import SystemMessage from "./news/system";

const TabComponent = () => {
  const newsData = useNews() || {};
  return (
    <ProtectedRoute>
      <div className="container main_container">
        {newsData?.news?.length > 0 && (
          <div className="containerInner">
            {newsData?.news?.map((article, index) => (
              <Article article={article} key={article?.uri} index={index} />
            ))}
          </div>
        )}
        <div className="sectionActive">
        <StateNews />
        </div>
        <SystemMessage />
      </div>
    </ProtectedRoute>
  );
};

export default TabComponent;