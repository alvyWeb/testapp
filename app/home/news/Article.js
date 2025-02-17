// import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { LuDot } from "react-icons/lu";

const Article = ({ article, index }) => {
  const {
    title,
    description,
    image: urlToImage,
    url,
    source: author,
    publishedAt: publishDate,
  } = article || {};

  //const publishedAt = moment(publishDate).fromNow();
  const publishedAt = publishDate;
  const isEven = index % 2 == 0;
  // const isEven = index === 0;

  const router = useRouter;
  const handleDetails = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      {index === 0 && (
        <Link href={url} target="_blank" className="container_lg_heading">
          <div className="container_lg_heading_img">
            <img
              src={urlToImage ?? "/home/news/news-image-h.png"}
              alt={title}
            />
          </div>
          <div className="container_heading_text">
            <div className="container_heading_lg_text">
              <p>
                {title?.slice(0, 70)}
                {title?.length > 70 && "..."}
              </p>
            </div>

            <div className="container_heading_lg_sm_text">
              {author && <p>{author?.title?.slice(0, 20)}</p>}
              {/* <LuDot color="white" /> */}
              <p>
                <span className="time">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1300_2978)">
                      <path
                        d="M6 11.25C3.105 11.25 0.75 8.895 0.75 6C0.75 3.105 3.105 0.75 6 0.75C8.895 0.75 11.25 3.105 11.25 6C11.25 8.895 8.895 11.25 6 11.25ZM6 1.5C3.5175 1.5 1.5 3.5175 1.5 6C1.5 8.4825 3.5175 10.5 6 10.5C8.4825 10.5 10.5 8.4825 10.5 6C10.5 3.5175 8.4825 1.5 6 1.5Z"
                        fill="white"
                      />
                      <path
                        d="M7.50002 7.875C7.43252 7.875 7.36502 7.86 7.30502 7.8225L5.43002 6.6975C5.37449 6.66413 5.32865 6.6168 5.29708 6.56022C5.2655 6.50364 5.24928 6.43979 5.25002 6.375V3.375C5.25002 3.165 5.41502 3 5.62502 3C5.83502 3 6.00002 3.165 6.00002 3.375V6.165L7.69502 7.1775C7.76484 7.22029 7.8188 7.28468 7.84873 7.3609C7.87866 7.43711 7.88292 7.52101 7.86088 7.59987C7.83883 7.67874 7.79167 7.74826 7.72655 7.79791C7.66144 7.84756 7.58191 7.87462 7.50002 7.875Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1300_2978">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="timeInfo">{publishedAt}</span>
                </span>
              </p>
            </div>
          </div>
        </Link>
      )}

      {!isEven && (
        <div onClick={handleDetails} className="container_sm_heading">
          <div className="container_sm_heading_text">
            <div className="container_heading_sm_text">
              <span className="newTag">חדשות</span>
              <p>
                {title?.slice(0, 60)}
                {title?.length > 60}
              </p>
            </div>
            <div className="container_heading_sm_sm_text">
              {/* <p className="description">{description?.slice(0, 25)}...</p> */}
              <p>
                <span className="time">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1300_2978)">
                      <path d="M6 11.25C3.105 11.25 0.75 8.895 0.75 6C0.75 3.105 3.105 0.75 6 0.75C8.895 0.75 11.25 3.105 11.25 6C11.25 8.895 8.895 11.25 6 11.25ZM6 1.5C3.5175 1.5 1.5 3.5175 1.5 6C1.5 8.4825 3.5175 10.5 6 10.5C8.4825 10.5 10.5 8.4825 10.5 6C10.5 3.5175 8.4825 1.5 6 1.5Z" />
                      <path d="M7.50002 7.875C7.43252 7.875 7.36502 7.86 7.30502 7.8225L5.43002 6.6975C5.37449 6.66413 5.32865 6.6168 5.29708 6.56022C5.2655 6.50364 5.24928 6.43979 5.25002 6.375V3.375C5.25002 3.165 5.41502 3 5.62502 3C5.83502 3 6.00002 3.165 6.00002 3.375V6.165L7.69502 7.1775C7.76484 7.22029 7.8188 7.28468 7.84873 7.3609C7.87866 7.43711 7.88292 7.52101 7.86088 7.59987C7.83883 7.67874 7.79167 7.74826 7.72655 7.79791C7.66144 7.84756 7.58191 7.87462 7.50002 7.875Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1300_2978">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="timeInfo">{publishedAt}</span>
                </span>
              </p>
            </div>
          </div>
          <Link href={url} target="_blank" className="container_sm_heading_img">
            <img
              src={urlToImage ?? "/home/news/news-image-b.png"}
              alt={title}
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default Article;
