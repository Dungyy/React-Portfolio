import React, { useEffect } from "react";
import Aos from "aos";

function ScrollAnimation({ children }) {
    useEffect(() =>       {
        Aos.init();
    }, []);
    return <>{children}</>;
}

export default ScrollAnimation