import React, { useEffect, useState } from 'react';
import './styles/ProductList.css';

const products = [
  'https://via.placeholder.com/600x400?text=Carne+1',
  'https://via.placeholder.com/600x400?text=Carne+2',
  'https://via.placeholder.com/600x400?text=Carne+3',
  'https://via.placeholder.com/600x400?text=Carne+4',
  'https://via.placeholder.com/600x400?text=Carne+5',
];

export default function ProductList() {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleProducts((prev) => [
            ...prev,
            ...products.slice(prev.length, prev.length + 3),
          ]);
        }
      });
    });

    const sentinel = document.getElementById('sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [visibleProducts]);

  return (
    <div className="flex flex-col items-center py-8">
      <div className="grid grid-cols-1 gap-6 px-4">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className={`transition-transform transform ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} bg-white p-4 rounded-lg shadow-lg`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={product}
              alt={`Produto ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div id="sentinel" className="h-10" />
    </div>
  );
}
