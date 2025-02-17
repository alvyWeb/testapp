import { useEffect, useRef, useState } from "react";

const useContainerHeight = (round) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const contentRef = useRef(null);

  const calculateContainerHeight = () => {
    if (contentRef.current) {
      const height = contentRef.current.clientHeight;
      setContainerHeight(height);
    }
  };

  useEffect(() => {
    calculateContainerHeight();

    const handleResize = () => {
      calculateContainerHeight();
    };

    // window.addEventListener("resize", handleResize);

    // // Cleanup
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [round]);

  return { containerHeight, contentRef };
};

export default useContainerHeight;
