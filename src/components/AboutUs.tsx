import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      

      

    </>
  );
};

export default About;
