
import './BrandSection.scss';

const brands = [
  { id: 1, name: 'Econverse' },
  { id: 2, name: 'Econverse' },
  { id: 3, name: 'Econverse' },
  { id: 4, name: 'Econverse' },
  { id: 5, name: 'Econverse' },
];

function BrandSection() {
  return (
    <section
      className="brand-section"
      aria-label="Navegue por marcas"
    >
      <h2 className="brand-section__title">
        Navegue por marcas
      </h2>

      <div className="brand-section__list">
        {brands.map((brand) => (
          <button
            key={brand.id}
            type="button"
            className="brand-section__item"
            aria-label={brand.name}
          >
            <span className="brand-section__logo">
              <span
                className="brand-section__logo-symbol"
                aria-hidden="true"
              >
                ec
              </span>

              <span className="brand-section__logo-text">
                onverse
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default BrandSection;

