import { useEffect, useState } from "react";

export function useWindowHeight(offset = 78) {
  const [height, setHeight] = useState(0); // Initial height is 0

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight - offset);
    };

    // Check if window is defined (to avoid errors during SSR)
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight - offset);
      window.addEventListener("resize", updateHeight);
    }

    // Clean up the event listener when the hook is no longer in use
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateHeight);
      }
    };
  }, [offset]);

  return height;
}

// function useWindowHeight(offset = 78) {
//   const [height, setHeight] = useState(window.innerHeight - offset);

//   useEffect(() => {
//     const updateHeight = () => {
//       setHeight(window.innerHeight - offset);
//     };

//     window.addEventListener("resize", updateHeight);

//     // Clean up the event listener when the hook is no longer in use
//     return () => window.removeEventListener("resize", updateHeight);
//   }, [offset]);

//   return height;
// }
