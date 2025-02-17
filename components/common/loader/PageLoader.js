import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const PageLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      {[0, 1, 2].map((item) => (
        <div key={item} style={{ padding: "10px" }}>
          <div>
            <Skeleton height={20} width={200} />
            <Skeleton height={24} width="100%" count={2} />
            <div
              style={{
                display: "flex",
                gap: "16px",
                margin: "10px",
              }}
            >
              <Skeleton circle={true} height={18} width={18} />
              <Skeleton height={18} width={60} />
              <Skeleton circle={true} height={18} width={18} />
              <Skeleton height={18} width={60} />
            </div>
          </div>
          <Skeleton height={120} width="100%" />
        </div>
      ))}
    </SkeletonTheme>
  );
};

export default PageLoader;
