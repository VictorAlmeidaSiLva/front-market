import React, { useEffect, useState } from 'react';

const newProducts = [
  {
    img: 'https://via.placeholder.com/600x400?text=Produto+Novo+1',
    description: 'Novo produto incrível para o seu churrasco!',
  },
  {
    img: 'https://via.placeholder.com/600x400?text=Produto+Novo+2',
    description: 'Experimente nossa nova linha de carnes premium.',
  },
  {
    img: 'https://via.placeholder.com/600x400?text=Produto+Novo+3',
    description: 'Carnes frescas e suculentas, direto do açougue.',
  },
];

export default function NewProductList() {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    setVisibleProducts(newProducts);
  }, []);

  return (
    <div className="flex flex-col items-center py-8">
      {visibleProducts.map((product, index) => (
        <div key={index} className="flex flex-row gap-10 items-center w-full justify-start mb-8">
          <div className="flex-shrink-0">
            <img
              src={product.img}
              alt={`Produto Novo ${index + 1}`}
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
