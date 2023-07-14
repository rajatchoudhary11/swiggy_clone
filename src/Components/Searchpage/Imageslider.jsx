import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Images from "./Images";
import React from "react";

function Imageslider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoading: "progressive",
    useCSS: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <>
      <div style={{ background: "#171a29", padding: "30px 100px" }}>
        <div className="container my-5">
          <Slider {...settings}>
            {Images.map((item) => (
              <div className="py-3" key={item.id}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Imageslider;
