import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TournamentScoreLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      {[0, 1, 2].map((item) => (
        <div key={item}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              margin: "5px 0",
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
              height={60}
              width="100%"
              count={3}
            />
          </div>
        </div>
      ))}
    </SkeletonTheme>
  );
};

export default TournamentScoreLoader;
