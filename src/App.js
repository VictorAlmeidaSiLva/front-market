import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import NewProductList from './components/NewProductList'; // Importando o novo componente
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <Banner />
      <main className="flex-grow flex flex-col items-center">
        <ProductList />
        <NewProductList />
      </main>
      <Footer />
    </div>
  );
}
