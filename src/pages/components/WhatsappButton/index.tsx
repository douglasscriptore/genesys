import { useCallback } from "react"
import { AiFillAccountBook, AiOutlineWhatsApp } from "react-icons/ai"
import styles from "./styles.module.scss"

export default function WhatsappButton(){

  const handleOpenWhatssapp = useCallback(() => {
    window.open("https://wa.me/+5544991040870","_blank")
  },[])

  return (
    <button type="button" className={styles.whatsappButton} onClick={() => handleOpenWhatssapp()}>
      <AiOutlineWhatsApp />
      Quero meu orçamento
    </button>
  )
}