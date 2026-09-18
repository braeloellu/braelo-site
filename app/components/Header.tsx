import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoBg}>b</span>
          <span className={styles.logoText}>braelo</span>
        </a>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#app">O app</a></li>
            <li><a href="#negocios">Para negócios</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>
        <a href="#comunidade" className={styles.cta}>
          Entrar na comunidade
        </a>
      </div>
    </header>
  );
}
