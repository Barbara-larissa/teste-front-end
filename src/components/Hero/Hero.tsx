import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1>
            Venha conhecer nossas
            <br />
            promoções
          </h1>

          <p className="hero__promotion">
            <strong>50% Off</strong> nos produtos
          </p>

          <a href="#produtos" className="hero__button">
            Ver produto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;