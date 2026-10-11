import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductModal from './components/ProductModal/ProductModal';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import BrandSection from './components/BrandSection/BrandSection';





import Footer from './components/Footer/Footer';


import CategorySection from './components/CategorySection/CategorySection';
import { fetchProducts } from './services/productService';
import type { Product } from './types/Product';



import './App.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchProducts();

        setProducts(data);
      } catch (err) {
        console.error('Erro ao carregar os produtos:', err);

        setError(
          'Não foi possível carregar os produtos. Tente novamente.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  function handleOpenModal(product: Product) {
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">

        <Hero />
        <CategorySection />

        {isLoading && (
          <p className="loading-message" role="status">
            Carregando produtos...
          </p>
        )}

        {!isLoading && error && (
          <div className="error-message" role="alert">
            <p>{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!isLoading && !error && (
          <ProductGrid
            products={products}
            onProductClick={handleOpenModal}
          />
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
      <Partners />


      {!isLoading && !error && (<RelatedProducts products={products} onProductClick={handleOpenModal} />)}
      <Partners />

      {!isLoading && !error && (<RelatedProducts products={products} onProductClick={handleOpenModal} />)}

      <Partners />

      <BrandSection />

      {!isLoading && !error && (<RelatedProducts products={products} onProductClick={handleOpenModal} />)}

 <Footer />



    </div>

  );

}

export default App;