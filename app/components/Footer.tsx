import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <span className={styles.logoBg}>b</span>
            <span>Conectando a nossa gente.</span>
          </div>
          <nav className={styles.nav}>
            <a href="#como-funciona">Como funciona</a>
            <a href="#app">O app</a>
            <a href="#negocios">Para negócios</a>
            <a href="#sobre">Sobre</a>
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p>© 2026 Braelo LLC. Todos os direitos reservados.</p>
          <p>· Florida, EUA · em português</p>
          <a href="https://braelo.com">braelo.com</a>
        </div>
      </div>
    </footer>
  );
}
