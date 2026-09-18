import styles from './Section.module.css';

export default function Dashboard() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid2}>
          <div>
            <div style={{width: '280px', height: '500px', background: '#000', borderRadius: '32px', border: '10px solid #000', margin: '0 auto', display: 'flex', flexDirection: 'column', padding: '8px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
              <div style={{background: '#fff', borderRadius: '28px', flex: 1, padding: '12px', overflow: 'hidden', fontSize: '0.7rem', display: 'flex', flexDirection: 'column'}}>
                <div style={{fontWeight: 600, marginBottom: '8px'}}>Painel do negócio <span style={{color: 'var(--primary)', fontSize: '0.65rem'}}>Últimos 30 dias</span></div>
                <div style={{background: 'var(--bg-light)', padding: '8px', borderRadius: '6px', marginBottom: '8px'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                    <div><strong>22</strong> <small style={{color: 'var(--text-gray)'}}>Cliques</small> <span style={{color: 'var(--success)'}}>+15%</span></div>
                    <div><strong>22</strong> <small style={{color: 'var(--text-gray)'}}>Contatos</small> <span style={{color: 'var(--success)'}}>+24%</span></div>
                  </div>
                </div>
                <div style={{flex: 1, background: 'var(--bg-light)', borderRadius: '6px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '8px', marginBottom: '8px'}}>
                  {[2,3,4,5,3,4,5].map((h, i) => <div key={i} style={{width: '6px', height: `${h*8}px`, background: 'var(--primary)', borderRadius: '2px'}}></div>)}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', fontSize: '0.6rem', borderTop: '1px solid var(--border-light)', paddingTop: '4px'}}>
                  <span>Home</span>
                  <span>Explorar</span>
                  <span>Anunciar</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>A sua marca, na palma da mão de quem procura.</h2>
            <p style={{color: 'var(--text-gray)', marginBottom: '24px'}}>A braelo coloca o seu negócio na frente de brasileiros da Florida que já estão procurando exatamente o que você faz.</p>
            <ul className={styles.list}>
              <li>Perfil com telefone, WhatsApp, horário, área de atendimento e botão de contato.</li>
              <li>Aparece nas buscas por categoria, subcategoria e ZIP.</li>
              <li>Recebe o contato direto, no seu celular, sem intermediário.</li>
              <li>Acompanha quantas pessoas viram, clicaram e falaram com você.</li>
              <li>Opções de destaque para aparecer primeiro na sua categoria e região.</li>
            </ul>
            <a href="#comunidade" style={{background: 'var(--primary)', color: 'var(--text-dark)', padding: '12px 24px', borderRadius: '24px', fontWeight: 600, display: 'inline-block', marginTop: '20px', textDecoration: 'none'}}>Cadastrar meu negócio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
