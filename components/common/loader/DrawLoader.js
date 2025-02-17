import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const DrawLoader = () => {
  return (
    <SkeletonTheme baseColor="#333333" highlightColor="#F5F5F5">
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Skeleton circle={true} height={24} width={24} />
          <Skeleton height={24} width={120} />
        </div>
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div key={item}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ width: "50%" }}>
                <Skeleton
                  style={{
                    borderRadius: "12px",
                    marginBottom: "5px",
                  }}
                  height={60}
                  width="100%"
                  count={2}
                />
              </div>
              <div style={{ width: "50%" }}>
                <Skeleton
                  style={{
                    borderRadius: "12px",
                    marginBottom: "5px",
                  }}
                  height={60}
                  width="100%"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default DrawLoader;
