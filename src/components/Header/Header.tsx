import './Header.scss';

function Header() {
  return (<header className="header"> <div className="header__top"> <div className="header__benefit"> <span className="header__benefit-icon" aria-hidden="true">♢</span> <span>Compra <strong>100% segura</strong></span> </div>


    <div className="header__benefit">
      <span className="header__benefit-icon" aria-hidden="true">▣</span>
      <span><strong>Frete grátis</strong> acima de R$ 200</span>
    </div>

    <div className="header__benefit">
      <span className="header__benefit-icon" aria-hidden="true">▤</span>
      <span><strong>Parcele</strong> suas compras</span>
    </div>
  </div>

    <div className="header__main">
      <a href="/" className="header__logo" aria-label="Econverse - Página inicial">
        <span className="header__logo-symbol">ec</span>
        <span className="header__logo-text">onverse</span>
      </a>

      <form
        className="header__search"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="search"
          placeholder="O que você está buscando?"
          aria-label="Buscar produtos"
        />

        <button type="submit" aria-label="Pesquisar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="7.2" />
            <path d="m16 16 5 5" />
          </svg>
        </button>
      </form>

      <div className="header__actions">
        <button type="button" aria-label="Meus pedidos">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 8h18v12H3z" />
            <path d="M7 8V4h10v4M3 14h7l-2 3m2-3-2-3" />
          </svg>
        </button>

        <button type="button" aria-label="Favoritos">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>

        <button type="button" aria-label="Minha conta">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="9" r="3" />
            <path d="M5.8 19a6.5 6.5 0 0 1 12.4 0" />
          </svg>
        </button>

        <button type="button" aria-label="Carrinho de compras">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 3h2l3 13h12l3-9H5" />
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
          </svg>
        </button>
      </div>
    </div>

    <nav className="header__nav" aria-label="Navegação principal">
      <a href="#categorias">Todas categorias</a>
      <a href="#supermercado">Supermercado</a>
      <a href="#livros">Livros</a>
      <a href="#moda">Moda</a>
      <a href="#lancamentos">Lançamentos</a>
      <a className="header__nav-highlight" href="#produtos">Ofertas do dia</a>
      <a className="header__nav-subscription" href="#assinatura">
        <span aria-hidden="true">♛</span> Assinatura
      </a>
    </nav>
  </header>


  );
}

export default Header;
