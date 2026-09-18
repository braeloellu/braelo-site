import styles from './Section.module.css';

export default function ForBusiness() {
  return (
    <section className={styles.section} id="negocios">
      <div className={styles.container}>
        <div className={styles.grid2}>
          <div></div>
          <div>
            <h2 style={{color: 'var(--primary)', marginBottom: '40px'}}>PARA QUEM OFERECE</h2>
            <h2>A sua marca, na palma da mão de quem procura.</h2>
            <p style={{color: 'var(--text-gray)', marginBottom: '24px'}}>A braelo coloca o seu negócio na frente de brasileiros da Florida que já estão procurando exatamente o que você faz.</p>
            <ul className={styles.list}>
              <li>Perfil com telefone, WhatsApp, horário, área de atendimento e botão de contato.</li>
              <li>Aparece nas buscas por categoria, subcategoria e ZIP.</li>
              <li>Recebe o contato direto, no seu celular, sem intermediário.</li>
              <li>Acompanha quantas pessoas viram, clicaram e falaram com você.</li>
              <li>Opções de destaque para aparecer primeiro na sua categoria e região.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
