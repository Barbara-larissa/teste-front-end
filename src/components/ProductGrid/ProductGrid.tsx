
import { useRef, useState } from 'react';
import type { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.scss';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const categories = [
  'Celular',
  'Acessorios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos',
];

function ProductGrid({ products, onProductClick }: ProductGridProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('Ver todos');

  function scrollCarousel(direction: 'left' | 'right') {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard =
      carousel.querySelector<HTMLElement>('.product-grid__card');

    const cardWidth = firstCard?.getBoundingClientRect().width ?? 278.1;
    const gap = 10;
    const distance = (cardWidth + gap) * 2;

    carousel.scrollBy({
      left: direction === 'right' ? distance : -distance,
      behavior: 'smooth',
    });
  }

  return (
    <section
      className="related-products"
      aria-label="Produtos relacionados"
    >
      <div className="related-products__heading">
        <span className="related-products__line" />
        <h2>Produtos relacionados</h2>
        <span className="related-products__line" />
      </div>

      <nav
        className="related-products__categories"
        aria-label="Categorias de produtos"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`related-products__category ${
              activeCategory === category
                ? 'related-products__category--active'
                : ''
            }`}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="related-products__carousel">
        <button
          className="related-products__arrow related-products__arrow--left"
          type="button"
          aria-label="Ver produtos anteriores"
          onClick={() => scrollCarousel('left')}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="product-grid" ref={carouselRef}>
          {products.map((product, index) => (
            <div
              className="product-grid__card"
              key={`${product.productName}-${index}`}
            >
              <ProductCard
                product={product}
                onProductClick={onProductClick}
              />
            </div>
          ))}
        </div>

        <button
          className="related-products__arrow related-products__arrow--right"
          type="button"
          aria-label="Ver proximos produtos"
          onClick={() => scrollCarousel('right')}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ProductGrid;

