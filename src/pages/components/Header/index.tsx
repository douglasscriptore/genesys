import styles from "./styles.module.scss";

export default function Header () {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src ="/images/logo-horizontal.svg" alt="genesys"/>

        <nav>
          <a className={styles.active}>Início</a>
          <a>Portfolio</a>
          <a>Contato</a>
        </nav>
      </div> 
    </header>
  )
}