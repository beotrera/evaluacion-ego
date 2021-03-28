import React from "react";
import Slider from "react-slick";
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../img/slider-arrow.png"

function SampleNextArrow(props) {
  const { className,onClick } = props;
  return (
    <button className={className} onClick={onClick}><img src={Arrow}/></button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}><img src={Arrow}/></button>
  );
}

export default function SimpleSlider(props) {
  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
            initialSlide: 2
          }
        },
        {
          breakpoint:700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
            <div>
                <img src={`https://challenge.agenciaego.tech${x.photo}`}/>
                <div>
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