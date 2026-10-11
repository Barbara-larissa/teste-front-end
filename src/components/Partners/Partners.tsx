import './Partners.scss';

const PARTNER_IMAGE = '/images/imagem.jpg';// ajuste a extensão se necessário

const partners = [
  { id: 1, title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
  { id: 2, title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
];

function Partners() {
  return (
    <section className="partners" aria-label="Parceiros">
      <div className="partners__grid">
        {partners.map((partner) => (
          <article className="partners__card" key={partner.id}>
            <img
              className="partners__image"
              src={PARTNER_IMAGE}
              alt=""
              loading="lazy"
            />
            <div className="partners__content">
              <h2 className="partners__title">{partner.title}</h2>
              <p className="partners__text">{partner.text}</p>
              <a className="partners__button" href="#parceiros">
                Confira
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Partners;