import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RankLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      <div style={{ paddingTop: "10px" }}>
        <div style={{ padding: "0 10px" }}>
          <Skeleton
            style={{
              borderRadius: "12px",
              marginBottom: "5px",
            }}
            height={40}
            width="100%"
            count={12}
          />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default RankLoader;
