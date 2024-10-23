/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import historia from '../assets/historia.jpeg';
import frente from '../assets/frente.jpeg';
import meat from '../assets/meat.jpg';
import salad from '../assets/salad.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = [
    {
      title: 'ONZE ONZE PREMIUM',
      img: frente,
      description: 'Variedade de carnes nobres, cortes especiais, temperos e acompanhamentos'
    },
    {
      title: 'Nossa História',
      img: historia,
      description: 'Desde 1985 ONZE & ONZE PREMIUM é a mais tradicional casa de carnes de Bauru, sendo reconhecida pela excelência de seu produtos, e principalmente pela qualidade, sabor e frescor de suas carnes.'
    },
    {
      title: 'Quality You Can Trust',
      img: meat,
      description: 'Experience the taste of quality with our selection of meats.'
    },
    {
      title: 'Satisfaction Guaranteed',
      img: salad,
      description: 'Join countless satisfied customers and elevate your dining experience.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
      <div style={{ position: 'relative', height: '600px', overflow: 'hidden', borderRadius: '10px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'transform 0.7s ease-in-out',
              display: index === currentIndex ? 'block' : 'none',
            }}
          >
            <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'fill', objectPosition: 'center',}} alt={item.title} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.8)', padding: '16px' }}>
              <h2 style={{ color: 'white', fontSize: '40px', animation: isAnimating ? 'fadeOut 0.5s' : 'fadeIn 0.5s' }}>{item.title}</h2>
              <p style={{ color: '#ccc', fontSize: '25px', animation: isAnimating ? 'fadeOut 0.5s' : 'fadeIn 0.5s' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mover os botões para baixo */}
      <div style={{ position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'white' : 'gray',
            }}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
        onClick={prevSlide}
      >
        <span style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '50%' }}>
          &#9664;
        </span>
      </button>
      <button
        type="button"
        style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
        onClick={nextSlide}
      >
        <span style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '50%' }}>
          &#9654;
        </span>
      </button>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
