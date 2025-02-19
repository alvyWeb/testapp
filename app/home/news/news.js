import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import Article from "./Article";
import "./news.scss";
import AtPennMessage from "./atpenn";


const News = ({ newsData }) => {
  return (
    <main className="news_app">
      {newsData?.isLoading ? ( 
        <NewsPageLoader />
      ) : (
        <div className="main_container">
           {Array.isArray(newsData?.news) && newsData?.news.length > 0 ? (
            <div className="container">
              {newsData?.news.map((article, index) => {
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
