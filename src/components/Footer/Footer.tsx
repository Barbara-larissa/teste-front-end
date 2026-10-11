
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <section className="footer__newsletter">
        <div className="footer__newsletter-content">
          <div className="footer__newsletter-info">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
              da Econverse.
            </p>
          </div>

          <form
            className="footer__newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="footer__newsletter-fields">
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                aria-label="Digite seu nome"
              />

              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                aria-label="Digite seu e-mail"
              />

              <button type="submit">INSCREVER</button>
            </div>

            <label className="footer__newsletter-terms">
              <input type="checkbox" name="terms" />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </section>

      {/* Conteudo principal do rodape */}
      <section className="footer__content">
        {/* Marca e redes sociais */}
        <div className="footer__brand">
        <a href="/" className="footer__logo" aria-label="Econverse">
  <span className="footer__logo-symbol">
    <span className="footer__logo-letters">ec</span>
  </span>
  <span className="footer__logo-text">onverse</span>
</a>

          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit.
          </p>

          {/* Redes sociais */}
          <div className="footer__social">
            <a href="#instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.2"
                  cy="6.8"
                  r="0.6"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a href="#facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 21v-8.5h2.8l.5-3.5h-3.3V6.8c0-1 .4-1.8 1.9-1.8h1.6V2c-.3 0-1.3-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.4V9H8.5v3.5h2.7V21" />
              </svg>
            </a>

            <a href="#linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.5 9.5V19" />
                <path d="M4.5 5v.1" />
                <path d="M9.5 19V9.5" />
                <path d="M9.5 13.5c0-2.5 1.6-4 3.6-4s3.4 1.3 3.4 3.8V19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colunas de links ao lado da marca */}
        <nav className="footer__links" aria-label="Links do rodape">
          <div className="footer__column">
            <h3>Institucional</h3>
            <a href="#sobre">Sobre Nos</a>
            <a href="#movimento">Movimento</a>
            <a href="#trabalhe-conosco">Trabalhe conosco</a>
          </div>

          <div className="footer__column">
            <h3>Ajuda</h3>
            <a href="#suporte">Suporte</a>
            <a href="#contato">Fale Conosco</a>
            <a href="#perguntas">Perguntas Frequentes</a>
          </div>

          <div className="footer__column">
            <h3>Termos</h3>
            <a href="#termos">Termos e Condicoes</a>
            <a href="#privacidade">Politica de Privacidade</a>
            <a href="#trocas">Troca e Devolucao</a>
          </div>
        </nav>
      </section>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}

export default Footer;

