import styles from './Section.module.css';

const painPoints = [
  {
    title: 'Você perde tempo',
    desc: 'Abre dez abas, compara, manda mensagem e espera. Às vezes a resposta nem vem.'
  },
  {
    title: 'Você não sabe em quem confiar',
    desc: 'Perfil bonito não diz se a pessoa aparece, entrega e cobra o combinado.'
  },
  {
    title: 'O idioma atrapalha',
    desc: 'Explicar um problema em outra língua cansa. Entender o orçamento, mais ainda.'
  },
  {
    title: 'O negócio bom fica invisível',
    desc: 'Muita gente boa da comunidade trabalha só por indicação porque não tem como ser encontrada.'
  }
];

export default function PainPoints() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Viver longe de casa já tem desafio suficiente.</h2>
        <div className={styles.grid4}>
          {painPoints.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.accent}></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
