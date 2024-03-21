import { useEffect, useState } from "react";

function UseWindowResizeTest() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleResize(); // Set initial window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return windowSize;
}

export default UseWindowResizeTest;
