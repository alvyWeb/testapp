import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MatchStatsLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      <div style={{ paddingTop: "20px" }}>
        <div style={{ padding: "0 10px" }}>
          <div>
            <Skeleton
              style={{
                borderRadius: "12px",
              }}
              height={140}
              width="100%"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              paddingTop: "10px",
            }}
          >
            <div style={{ width: "60%" }}>
              <Skeleton height={24} width="100%" count={2} />
            </div>
            <div style={{ width: "40%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "10px",
                }}
              >
                <Skeleton circle={true} height={18} width={18} />
                <Skeleton circle={true} height={18} width={18} />
                <div style={{ width: "50%" }}>
                  <Skeleton height={18} width="100%" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "10px",
                  margin: "10px 0",
                }}
              >
                <Skeleton circle={true} height={18} width={18} />
                <Skeleton circle={true} height={18} width={18} />
                <div style={{ width: "50%" }}>
                  <Skeleton height={18} width="100%" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Skeleton
              style={{
                borderRadius: "12px",
                marginBottom: "5px",
              }}
              height={60}
              width="100%"
              count={8}
            />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MatchStatsLoader;
