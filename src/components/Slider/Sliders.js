import React from 'react';

// Slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// imports the images and descriptions from json file
import Images from '../data.json';

// Custom styling
import './Slider.css';

// Slider function
const Sliders = () => {

  // slider component
  let settings = {
    dots: true,
    infinite: true,
    spaceBetween: 0,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: 'slides',
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // mapping through all the images and descriptions
    <Slider {...settings}>
      {Images.map((Image, i) => {
        return (
          <div key={i} className='slider'>
            <div className='slider-image'>
              <img src={Image.image} alt='img' />
            </div>
            <div className='col-md-6 offset-md-3 my-auto text-center text-white content'>
              <h1 className='text-uppercase mb-2 font-weight-bold'>
                {Image.title}
              </h1>
              <p className='mb-5 medium'>{Image.description}</p>
            </div>

            {/* tooltip*/}
            <div className=' slick-prev'>
              <span className='tooltiptext'>Prev</span>
            </div>

            <div className='slick-next'>
              <span className='tooltiptext'>Next</span>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Sliders;
