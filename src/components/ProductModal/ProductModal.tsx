
import { useState } from 'react';
import type { Product } from '../../types/Product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const formattedPrice = Number(product.price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div
      className="product-modal"
      onClick={onClose}
      role="presentation"
    >
      <section
        className="product-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <div className="product-modal__image-container">
          <img
            className="product-modal__image"
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <div className="product-modal__details">
          <h2 id="product-modal-title">
            {product.productName}
          </h2>

          <p className="product-modal__price">
            {formattedPrice}
          </p>

          <p className="product-modal__shipping">
            {product.descriptionShort ||
              'Descricao nao disponivel para este produto.'}
          </p>

          <button
            type="button"
            className="product-modal__more"
          >
            Veja mais detalhes do produto &gt;
          </button>

          <div className="product-modal__actions">
            <div
              className="product-modal__quantity"
              aria-label="Quantidade do produto"
            >
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                aria-label="Diminuir quantidade"
              >
                −
              </button>

              <span>{String(quantity).padStart(2, '0')}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy-button"
              onClick={onClose}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;

