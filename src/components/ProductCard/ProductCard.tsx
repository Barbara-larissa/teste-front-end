
import type { Product } from '../../types/Product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

function ProductCard({ product, onProductClick }: ProductCardProps) {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const originalPrice = product.price * 1.07;

  const formattedOriginalPrice = originalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const installmentValue = (product.price / 2).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__details"
        onClick={() => onProductClick(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          className="product-card__image"
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />

        <div className="product-card__information">
          <p className="product-card__description">
            {product.descriptionShort}
          </p>

          <div className="product-card__pricing">
            <p className="product-card__old-price">
              {formattedOriginalPrice}
            </p>

            <p className="product-card__price">
              {formattedPrice}
            </p>

            <p className="product-card__installments">
              ou 2x de {installmentValue} sem juros
            </p>

            <p className="product-card__shipping">
              Frete grátis
            </p>
          </div>
        </div>
      </button>

      <button
        type="button"
        className="product-card__buy-button"
        onClick={() => onProductClick(product)}
        aria-label={`Comprar ${product.productName}`}
      >
        COMPRAR
      </button>
    </article>
  );
}

export default ProductCard;

