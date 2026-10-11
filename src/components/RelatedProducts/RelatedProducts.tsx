
import { useRef } from 'react';
import type { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';
import './RelatedProducts.scss';

interface RelatedProductsProps {
    products: Product[];
    onProductClick: (product: Product) => void;
}

function RelatedProducts({
    products,
    onProductClick,
}: RelatedProductsProps) {
    const carouselRef = useRef<HTMLDivElement>(null);

    function scrollCarousel(direction: 'left' | 'right') {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const firstCard =
            carousel.querySelector<HTMLElement>('.related-products__card');

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
            aria-label="Mais produtos"
        >
           <div className="related-products__header">
  <span className="related-products__header-line" />

  <h2 className="related-products__title">
    Produtos relacionados
  </h2>

  <span className="related-products__header-line" />

  <button
    className="related-products__view-all"
    type="button"
    onClick={() => {
      const carousel = carouselRef.current;

      carousel?.scrollTo({
        left: carousel.scrollWidth,
        behavior: 'smooth',
      });
    }}
  >
    Ver todos
  </button>
</div>

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

                <div className="related-products__list" ref={carouselRef}>
                    {products.map((product, index) => (
                        <div
                            className="related-products__card"
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

export default RelatedProducts;

