import styles from './Hero.module.css';

const categories = ['Serviços', 'Veículos', 'Imóveis', 'Empregos', 'Eventos', 'Eletrônicos', 'Móveis', 'Moda', 'Kids', 'Esporte & Hobby'];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.badge}>Para brasileiros na Florida</div>
          <h1>O que você procura está mais perto do que imagina.</h1>
          <p className={styles.description}>
            O app da braelo conecta você a serviços, produtos e oportunidades da comunidade brasileira perto de você. Em português, com segurança, clareza e decisão rápida.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#como-funciona" className={styles.ctaPrimary}>Ver como funciona</a>
            <a href="#negocios" className={styles.ctaSecondary}>Anunciar meu negócio</a>
          </div>
          <div className={styles.features}>
            <span>🎯 Busca por ZIP</span>
            <span>🌐 Em português</span>
            <span>💬 Contato direto</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.phone}>
            <div className={styles.phoneContent}>
              <div className={styles.status}>9:41 ●●● ▮</div>
              <div className={styles.searchBar}>
                <span>🔍 Buscar na braelo...</span>
                <span className={styles.zip}>33461</span>
              </div>
              <div className={styles.tabs}>
                <span className={styles.tabActive}>Tudo</span>
                <span>Serviços</span>
                <span>Imóveis</span>
                <span>Mapa</span>
              </div>
              <div className={styles.listings}>
                <div className={styles.listing}>
                  <div className={styles.listingPlaceholder}></div>
                  <strong>Silva Elétrica</strong>
                  <small>Lake Worth · 1,2 mi</small>
                  <div className={styles.actions}>
                    <button>Orçamento</button>
                    <button>Ligar</button>
                  </div>
                </div>
              </div>
              <div className={styles.bottomNav}>
                <span>🏠 Home</span>
                <span>🔍 Explorar</span>
                <span>➕ Anunciar</span>
                <span>📬 Novidades</span>
                <span>👤 Conta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.categoriesSection}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesList}>
            {categories.map((cat) => (
              <a key={cat} href="#app" className={cat === 'Serviços' ? styles.categoryActive : styles.category}>
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
