"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import useNews from "@/api/useNews";
import News from "./news/news.js";
import Article from "./news/Article.js";
import SystemMessage from "./news/system";

const TabComponent = () => {
  const newsData = useNews() || {};
  return (
    <ProtectedRoute>
      <div className="container">
        <div className="sectionActive">
          <Article/>
          <News newsData={newsData} />
        </div>
        <SystemMessage />
      </div>
    </ProtectedRoute>
  );
};

export default TabComponent;