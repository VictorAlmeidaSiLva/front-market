import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 w-full py-6">
      <h1 className="text-white text-4xl text-center font-bold">Carnes à Venda</h1>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#quem-somos" className="text-white hover:text-gray-200 transition duration-300">
              Quem Somos
            </a>
          </li>
          <li>
            <a href="#fale-conosco" className="text-white hover:text-gray-200 transition duration-300">
              Fale Conosco
            </a>
          </li>
          <li>
            <a href="#produtos" className="text-white hover:text-gray-200 transition duration-300">
              Produtos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
