import styles from './Section.module.css';

const pillars = [
  { icon: '🌐', title: 'Em português, sempre', desc: 'Busca, anúncios, mensagens e suporte no seu idioma.' },
  { icon: '📍', title: 'Local de verdade', desc: 'Resultados pelo seu ZIP, com quem atende na sua região.' },
  { icon: '👥', title: 'Gente da comunidade', desc: 'Negócios e profissionais brasileiros, com perfil e contato direto.' },
  { icon: '🚀', title: 'Começando pela Florida', desc: 'Primeiro onde a nossa gente já está. Depois, crescendo com ela.' },
];

export default function About() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>
        <h2 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--text-gray)', fontSize: '0.9rem', fontWeight: 400}}>SOBRE A BRAELO</h2>
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Com a braelo você encontra o seu lugar, mesmo longe de casa.</h2>
        <p style={{maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-gray)', textAlign: 'center', fontSize: '1rem'}}>
          A braelo nasceu de uma dor real: milhões de brasileiros vivem nos Estados Unidos e enfrentam todo dia o desafio de resolver a vida em outro país, em outra língua, sem a rede de confiança que tinham em casa.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px'}}>
          {pillars.map((p, i) => (
            <div key={i} className={styles.card}>
              <div style={{fontSize: '2rem', marginBottom: '12px'}}>{p.icon}</div>
              <h3 style={{fontSize: '1.1rem'}}>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign: 'center', color: 'var(--text-gray)', fontSize: '0.9rem'}}>
          Braelo LLC · Florida, Estados Unidos<br/>
          Braelo Intermediadora de Negócios LTDA · Brasil
        </p>
      </div>
    </section>
  );
}
