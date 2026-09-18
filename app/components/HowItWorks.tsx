import styles from './Section.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.container}>
        <h2>Como funciona</h2>
        <p style={{marginBottom: '40px', color: 'var(--text-gray)', fontSize: '1.1rem'}}>
          Você diz o que precisa, a braelo mostra quem resolve. Sem lista infinita: poucas opções, todas perto de você, com um botão para falar direto com quem atende.
        </p>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Diga o que precisa e o seu ZIP</h3>
            <p>Escreva do seu jeito, em português. O ZIP garante que o resultado é da sua região.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Receba de 3 a 5 opções</h3>
            <p>A braelo cruza sua busca com negócios reais da comunidade e mostra só o que faz sentido.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Fale com quem atende</h3>
            <p>Ligue, mande mensagem, peça orçamento ou agende. O contato é direto com o fornecedor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
