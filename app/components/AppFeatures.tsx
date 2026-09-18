import styles from './Section.module.css';

const features = [
  { icon: '🔍', title: 'Busca por ZIP, em português', desc: 'Você escreve do seu jeito e a braelo entende. Resultado da sua região, com poucas opções.' },
  { icon: '🗺️', title: 'Mapa da comunidade', desc: 'Veja no mapa os negócios brasileiros perto, por categoria, e filtre pelo que precisa.' },
  { icon: '💬', title: 'Fale direto com quem atende', desc: 'Ligar, mensagem, orçamento ou agendar em um toque, sem intermediário.' },
  { icon: '👤', title: 'Perfil do seu negócio', desc: 'Fotos, horário, WhatsApp, QR próprio para loja, cartão ou carro.' },
  { icon: '📧', title: 'Atendimento que não perde cliente', desc: 'Mensagem de boas-vindas, respostas salvas e FAQ para responder rápido.' },
  { icon: '📊', title: 'Painel com o que importa', desc: 'Quantas pessoas viram, clicaram e falaram com você, semana a semana.' },
];

export default function AppFeatures() {
  return (
    <section className={styles.section} id="app">
      <div className={styles.container}>
        <h2>O app da braelo, feito para o dia a dia de quem vive aqui.</h2>
        <p style={{marginBottom: '40px', color: 'var(--text-gray)', fontSize: '1.1rem'}}>
          Tudo o que a comunidade brasileira precisa para encontrar e ser encontrada, na palma da mão.
        </p>
        <div className={styles.gridAuto}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div style={{fontSize: '2rem', marginBottom: '12px'}}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
