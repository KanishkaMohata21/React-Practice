import React from "react";
import ReactDOM from "react-dom";
import Faq from "./components/faq/app";
import RandomColorGenerator from "./components/random_color_generator/app";
import Review from "./components/star_review/app";
import Slider from "./components/image_slider/app";

ReactDOM.render(
  <div>
    <Faq />
    <RandomColorGenerator />
    <Review noofStars={5}/>
    <Slider url = {"https://picsum.photos/v2/list"} limit={'5'} page={1} />
  </div>,
  document.getElementById("root")
);

