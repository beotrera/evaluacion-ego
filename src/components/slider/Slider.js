import React from "react";
import Slider from "react-slick";
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../img/slider-arrow.png"

function SampleNextArrow(props) {
  const { className,onClick } = props;
  return (
    <button className={className} onClick={onClick}><img src={Arrow} alt=">"/></button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}><img src={Arrow} alt="<"/></button>
  );
}

export default function SimpleSlider(props) {
  const settings = {
      dots:true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#f7f7f7",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}>
          <ul className="list-paging" style={{ margin: "0px" }}>{dots}</ul>
        </div>
      ),
      customPaging: i => (
        <p className="paging" id={i + 1}/>
      ),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
          }
        },
        {
          breakpoint:700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: "60px"
          }
        }
      ]
  };
  var Data={"model_features": []}
  Data = props.item;

  return (
    <Slider {...settings}>
      {Data.model_features.map(x=>
        {
          return(
            <div className="slider-item-container">
                <img className="slide-img" alt="slide" src={`${process.env.PUBLIC_URL}${x.photo}`}/>
                <div className="slider-text-container">
                  <h3 >{x.name}</h3>
                  <p >{x.description}</p>
                </div>
            </div>
          )
        }
        )}
    </Slider>
  );
}