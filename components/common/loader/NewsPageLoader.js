import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const NewsPageLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      <div style={{ paddingTop: "20px" }}>
        {[0, 1, 2].map((item) => (
          <div key={item} style={{ padding: "0 10px" }}>
            <div>
              <Skeleton
                style={{
                  borderRadius: "12px",
                }}
                height={150}
                width="100%"
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                paddingTop: "10px",
              }}
            >
              <div style={{ width: "40%" }}>
                <Skeleton
                  style={{ borderRadius: "12px" }}
                  height={80}
                  width="100%"
                />
              </div>
              <div style={{ width: "60%" }}>
                <Skeleton height={24} width="100%" count={2} />
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    margin: "10px 0",
                  }}
                >
                  <Skeleton circle={true} height={18} width={18} />
                  <Skeleton height={18} width={80} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default NewsPageLoader;
