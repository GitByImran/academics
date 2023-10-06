import React from "react";
import Works from "../home-contents/works";
import About from "../home-contents/about";
import Testimonials from "../home-contents/testimonials";
import Goal from "../home-contents/goal";
import Subscribe from "../home-contents/subscribe";
import PopularCourses from "../home-contents/popularcourses";
import Banner from "../home-contents/banner";

const HomeContent: React.FC = () => {
  return (
    <div>
      <Banner />
      <Works />
      <About />
      <PopularCourses />
      <Goal />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default HomeContent;
