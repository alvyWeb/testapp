"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import News from "./news/news.js";
import Article from "./news/Article.js";
import SystemMessage from "./news/system";

const TabComponent = () => {
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