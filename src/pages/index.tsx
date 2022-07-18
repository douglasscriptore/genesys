
import Head from "next/head"
import  WhatsappButton  from "./components/WhatsappButton"
import styles from "./home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Genesys Energia Solar</title>
      </Head>
     <main className={styles.contentContainer}>
       <section className={styles.hero}>
         <span>👏 Olá, seja bem-vindo</span>
         <h1>Nosso site está <span> Evoluindo </span>
         <p>Mas não se preocupe, solicite seu orçamento <span>agora mesmo!</span></p>
         </h1>

         <WhatsappButton/>
       </section>
     </main>

    </>
  )
}
