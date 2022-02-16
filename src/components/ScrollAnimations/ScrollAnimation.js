import React, { useEffect } from "react";
import Aos from "aos";

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return <>{children}</>;
}

export default ScrollAnimation;
