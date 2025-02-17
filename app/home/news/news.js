import NewsPageLoader from "@/components/common/loader/NewsPageLoader";
import Article from "./Article";
import "./news.scss";
const News = ({ newsData }) => {
  // const { news, isLoading } = useNews() || {};

  // const isLoading = false;
  // const news = newsData;

  return (
    <main className="news_app">
      {newsData?.isLoading ? (
        <NewsPageLoader />
      ) : (
        <div className="main_container">
          {newsData?.news?.length > 0 && (
            <div className="container">
              {newsData?.news?.map((article, index) => (
                <Article article={article} key={article?.uri} index={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default News;
