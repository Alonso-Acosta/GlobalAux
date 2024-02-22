import React from "react";
import Slider from "react-slick";
import '../css/Carousel.css'

function CaraouselP() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    dotsClass: 'slick-dots custom-dots'
  };
  const cardItems = [
    {
      img: 'images/Proyectos/proyecto26.webp',
      title: 'Lubricacion Progresiva'
    },
    {
      img: 'images/Proyectos/proyecto27.webp',
      title: 'Mantenimientos Sistemas de Lubricación'
    },
    {
      img: 'images/Proyectos/proyecto28C.webp',
      title: 'PETROLEUM GAS'
    },
    {
      img: 'images/Proyectos/proyecto29.webp',
      title: 'PETROLEUM GAS'
    },
    {
      img: 'images/Proyectos/proyecto30.webp',
      title: 'Enfriadores Vortex'
    },
    {
      img: 'images/Proyectos/proyecto31.webp',
      title: 'Lubricacion Progresiva'
    }
  ];

  
  return (
    <div className="slider-container W-75">
          <Slider {...settings}>
          {cardItems.map((item, index) => (
        <div key={index} className="carousel-item ms-4 bg-transparent">
            <div className="card bg-transparent">
              <a href="Proyectos">
                <div className="card-img">
                  <img src={item.img} className="img-fluid" alt={item.title} />

                </div>
              </a>
            </div>
          
        </div>
      ))}
            
          </Slider>
      
    </div>
  );
}

export default CaraouselP;