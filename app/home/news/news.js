import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import Article from "./Article";
import "./news.scss";
import AtPennMessage from "./atpenn";


const News = ({ newsData }) => {
  // const { news, isLoading } = useNews() || {};

  // const isLoading = false;
  // const news = newsData;

  const staticArticles = [
    {
      title: "לורם איפסום הוא כינוי לטקסט כה חסר משמעות לחלוטין - הנקרא לפעמים",
      description: "לורם איפסום הוא כינוי לטקסט כה חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle554.jpg",
      url: "#",
      source: "אדמין",
      publishedAt: "4 דק’ קריאה",
    },
    {
      title: "לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    {
      title: "לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים",
      image: "/home/news/Rectangle491.png",
      url: "#",
      source: "אדמין",
      publishedAt: "לפני שעה",
    },
    
    // Add more static articles as needed
  ];

  // const articlesToRender = useStaticContent ? staticArticles : newsData?.news;

  return (
    <main className="news_app">
      {newsData?.isLoading ? ( 
        <NewsPageLoader />
      ) : (
        <div className="main_container">
           {Array.isArray(staticArticles) && staticArticles.length > 0 ? (
            <div className="container">
              {staticArticles.map((article, index) => {
                // Check if it's the third item (index 2, 5, 8, etc.)
                const isAfterThirdItem = index % 4 === 3;

                return (
                  <>
                    <Article article={article} key={article?.uri} index={index} />
                    {/* Display AtPennMessage after every third article */}
                    {isAfterThirdItem && <AtPennMessage />}
                  </>
                );
              })}
            </div>
          ) : (
            <p>אין חדשות זמינות</p>
          )}
        </div>
      )}
    </main>
  );
};

export default News;
