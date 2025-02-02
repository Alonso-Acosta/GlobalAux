import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    ]
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
      img: 'images/Proyectos/proyecto28.webp',
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
    <Slider {...settings}>
      {cardItems.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className="col-md-3">
            <div className="card">
              <div className="card-img">
                <img src={item.img} className="img-fluid" alt={item.title} />
              </div>
              <div className="card-img-overlay">
                <div className="content project-content text-center">
                  <a className="text-decoration-none" href="Proyectos">
                    <h4>{item.title}</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselProject;