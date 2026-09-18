import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta} id="comunidade">
      <div className={styles.container}>
        <h2>Faça parte da nossa comunidade.</h2>
        <p>Entre no grupo da braelo no WhatsApp e seja das primeiras pessoas a usar o app na Florida.</p>
        <div className={styles.ctaGroup}>
          <a href="https://wa.me/" className={styles.ctaWhatsapp}>Entrar no WhatsApp</a>
          <a href="mailto:contato@braelo.com" className={styles.ctaEmail}>Falar com a braelo</a>
        </div>
      </div>
    </section>
  );
}
