import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import Article from "./Article";
import "./news.scss";
import AtPennMessage from "./atpenn";
import StateNews from "./statNews";

const News = () => {
  const staticArticles = [
    {
      title: "1 לורם איפסום הוא כינוי לטקסט כה חסר משמעות לחלוטין - הנקרא לפעמים",
      description: "לורם איפסום הוא כינוי לטקסט כה חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle554.jpg",
      url: "#",
      source: "אדמין",
      publishedAt: "4 דק’ קריאה",
    },
    {
      title: "2 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "3 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "4 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "5 לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
  ];

  // Assume this is the data for the Article component
  const articleData = null; // Replace with actual data or null if no data is available

  return (
    <main className="news_app">
      <div className="main_container">
        {staticArticles.length > 0 ? (
          <div className="container">
            {/* Display first article normally if articleData is not available */}
            {articleData ? (
              <Article article={articleData} key={0} index={0} />
            ) : (
              <Article article={staticArticles[0]} key={0} index={0} />
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