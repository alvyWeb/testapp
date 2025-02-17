import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TournamentsPageLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div style={{ padding: "0 10px" }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              margin: "10px 0",
            }}
          >
            <Skeleton circle={true} height={24} width={24} />
            <Skeleton height={24} width={120} />
          </div>
          <div>
            <Skeleton
              style={{
                borderRadius: "12px",
                marginBottom: "5px",
              }}
              height={100}
              width="100%"
              count={3}
            />
          </div>

          {[0, 1]?.map((item) => (
            <div key={item}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "5px",
                }}
              >
                <Skeleton circle={true} height={24} width={24} />
                <Skeleton height={24} width={120} />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  paddingTop: "10px",
                }}
              >
                {[0, 1, 2]?.map((item) => (
                  <div key={item} style={{ width: "33%" }}>
                    <Skeleton
                      style={{ borderRadius: "12px" }}
                      height={100}
                      width="100%"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default TournamentsPageLoader;
