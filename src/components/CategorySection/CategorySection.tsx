import './CategorySection.scss';

const categories = [
  { id: 'tecnologia', name: 'Tecnologia', icon: 'technology' },
  { id: 'supermercado', name: 'Supermercado', icon: 'store' },
  { id: 'bebidas', name: 'Bebidas', icon: 'drinks' },
  { id: 'ferramentas', name: 'Ferramentas', icon: 'tools' },
  { id: 'saude', name: 'Saúde', icon: 'health' },
  { id: 'esportes', name: 'Esportes e Fitness', icon: 'fitness' },
  { id: 'moda', name: 'Moda', icon: 'fashion' },
];

type CategoryIconProps = {
  name: string;
};

function CategoryIcon({ name }: CategoryIconProps) {
  const commonProps = {
    width: 40,
    height: 40,
    viewBox: '0 0 40 40',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'technology':
      // Monitor com celular sobreposto
      return (
        <svg {...commonProps}>
          <path d="M24 24H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v8" />
          <path d="M10 31h11M15.5 24v7" />
          <rect x="24" y="16" width="12" height="20" rx="2.5" />
          <path d="M28.5 19.5h3M29 33h2" />
        </svg>
      );

    case 'store':
      // Loja com toldo
      return (
        <svg {...commonProps}>
          <path d="M6 14 8.5 6h23L34 14" />
          <path d="M6 14a3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0" />
          <path d="M8 18v16M32 18v16M5 34h30" />
          <rect x="11" y="22" width="8" height="7" />
          <rect x="22" y="22" width="7" height="12" />
        </svg>
      );

    case 'drinks':
      // Garrafa com rótulo e copo
      return (
        <svg {...commonProps}>
          <path d="M15 4h4v6c0 1.5 3 3 3 5.5V32a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V15.5c0-2.5 3-4 3-5.5z" />
          <path d="M15 7h4" />
          <rect x="12" y="21" width="10" height="8" />
          <path d="M26 20h8l-1 14h-6z" />
          <path d="M26.5 25h7" />
        </svg>
      );

    case 'tools':
      // Martelo (topo direito) e chave de fenda (topo esquerdo) cruzados
      return (
        <svg {...commonProps}>
          <defs>
            {/* abre um pequeno vão no martelo, onde a chave de fenda passa por cima */}
            <mask
              id="category-tools-cut"
              maskUnits="userSpaceOnUse"
              x="-10"
              y="-10"
              width="60"
              height="60"
            >
              <rect x="-10" y="-10" width="60" height="60" fill="white" />
              <g transform="rotate(-45 20 20)">
                <rect x="17" y="-2" width="6" height="46" fill="black" stroke="none" />
              </g>
            </mask>
          </defs>

          <g mask="url(#category-tools-cut)">
            <g transform="rotate(45 20 20)">
              {/* cabeça do martelo */}
              <path d="M11 11c.5-5 3-8 8-8h7.5v8z" />
              {/* cabo */}
              <rect x="17.5" y="11" width="5" height="30" rx="2.5" />
              <path d="M17.5 15.5h5" />
            </g>
          </g>

          <g transform="rotate(-45 20 20)">
            {/* haste e ponta */}
            <path d="M18.8 4.5V21h2.4V4.5L20 1z" />
            {/* virola e cabo */}
            <path d="M18.5 21h3v2.5h-3z" />
            <rect x="17" y="23.5" width="6" height="17.5" rx="3" />
          </g>
        </svg>
      );

    case 'health':
      // Coração sobre a mão
      return (
        <svg {...commonProps}>
          <path d="M20 17c-5-3.5-8-6-8-9.5a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 3.5-3 6-8 9.5z" />
          <rect x="4" y="25" width="5" height="10" rx="1" />
          <path d="M9 27h3.5l5-1.5h5.5a2 2 0 0 1 0 4h-6" />
          <path d="M9 33l5 1.5h10l9.5-5.5a2 2 0 0 0-2.3-3.2L24 29.5" />
        </svg>
      );

    case 'fitness':
      // Esteira com corredor
      return (
        <svg {...commonProps}>
          {/* cabeça */}
          <circle cx="20.5" cy="8" r="2.3" />

          {/* corredor */}
          <g strokeWidth="2">
            <path d="M21.8 11.5 19 19.2" />
            <path d="M19 19.2l-3.7 8" />
            <path d="M19 19.2l6.6 3.2 4.7 5.1" />
            <path d="M21.5 12l-3.8 2-3.5-2.6" />
            <path d="M22.3 12.5l4.7 2.8-.5 2.2" />
          </g>

          {/* poste e painel da esteira */}
          <path d="M6.5 11.5v21" />
          <path d="M6.5 11.5l3 1.2M8.5 15h4.5" />

          {/* base, esteira (faixa escura) e rodinhas */}
          <path d="M6.5 32.5h27" />
          <rect
            x="11"
            y="28"
            width="22"
            height="2.5"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="9.5" cy="34.4" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="31" cy="34.4" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );

       case 'fashion':
      // Vestido, diamante e salto alto
      return (
        <svg {...commonProps} strokeWidth={1.05}>
          {/* alças e decote */}
          <path d="M8.7 4.7h2.1c0 3.6 1.6 5.9 4.1 5.9s4-2.3 4-5.9H21" />
          {/* laterais do corpete */}
          <path d="M8.7 4.7c0 3.5.3 7 .9 11.4M21 4.7c0 3.5-.4 7-1.1 11.4" />
          {/* cintura e franzidos */}
          <path d="M9.6 16.1h10.3M12.7 17v4M16.9 17.2v3.6" />
          {/* saia */}
          <path d="M9.9 16.9 6.4 31.6C10 33 14 34.6 17 35c2.5.4 5.5.2 6.7-1.4" />
          <path d="M19.9 16.8l2.6 7.4" />

          {/* diamante */}
          <path d="M23.6 8.2H32l1.7 3.5L28 18l-5.6-6.3z" />
          <path d="M22.4 11.7h11.3M25.6 8.2l-.8 3.5M30 8.2l.8 3.5M27.8 8.2v3.5M25 11.7l3 6.3 3-6.3" />

          {/* salto alto */}
          <path d="M16.5 29.5c-.2-2 1-3.3 3-3.8 1.5-.3 2.5.6 3.1 1.3l4.9-5.4c1.7-1.9 3.3-2.4 4.8-1.8 1.1.6.9 2.7.7 4.2l-.5 4-.8 3.4c-.2.6-1.1.6-1.2 0l-.9-5.8c-.1-.8-.8-.8-1.3-.2l-3.5 4c-.6.6-1 1.2-1 2.2 0 1-1 1.4-2.3 1.1l-4-1.2c-1-.3-1-1.3-1-2z" />
        </svg>
      );

    default:
      return null;
  }
}

function CategorySection() {
  return (
    <section
      className="category-section"
      aria-label="Compre por categoria"
    >
      <div className="category-section__list">
        {categories.map((category, index) => (
          <button
            className={`category-section__item ${
              index === 0 ? 'category-section__item--active' : ''
            }`}
            key={category.id}
            type="button"
            aria-pressed={index === 0}
          >
            <span className="category-section__icon">
              <CategoryIcon name={category.icon} />
            </span>

            <span className="category-section__name">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;