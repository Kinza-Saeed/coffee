import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (_jsx(_Fragment, {}));
};
export default About;
