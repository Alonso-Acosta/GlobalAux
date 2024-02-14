import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselProject = () => {
  // Carousel items
  const items = [
    {
      img: 'images/Proyectos/proyecto26.jpg',
      title: 'PETROLEUM GAS',
      desc: 'Inyectora PDI',
    },
    {
      img: 'images/Proyectos/proyecto27.jpg',
      title: 'PETROLEUM GAS',
      desc: 'Lubricación CerroMatoso',
    },
    {
      img: 'images/Proyectos/proyecto28.JPG',
      title: 'PETROLEUM GAS',
      desc: 'Lubricación Doble Línea para Siderurgia',
    },
    {
      img: 'images/Proyectos/proyecto29.jpg',
      title: 'PETROLEUM GAS',
      desc: 'Chemical',
    },
    {
      img: 'images/Proyectos/proyecto30.jpg',
      title: 'PETROLEUM GAS',
      desc: 'Chemical',
    },
    {
      img: 'images/Proyectos/proyecto31.jpeg',
      title: 'PETROLEUM GAS',
      desc: 'Chemical',
    },
  ];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      swipeable={false}
      emulateTouch={true}
      className="project-carousel"
    >
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className="card">
            <div className="card-img">
              <img src={item.img} className="img-fluid" alt={item.title} />
            </div>
            <div className="card-img-overlay">
              <div className="content project-content text-center">
                <a className="text-decoration-none" href="project-single.html">
                  <h4>{item.title}</h4>
                </a>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselProject;