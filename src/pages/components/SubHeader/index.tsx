import {AiOutlinePhone,AiOutlineClockCircle} from "react-icons/ai"
import styles from "./styles.module.scss"
import { useEffect, useState,useCallback } from "react"
import periods from "../../../variables/periods";
import dayjs from "dayjs";
import formatGoogleHours from "../../../utils/formatGoogleHours"


import { useMemo } from "react";

export default function SubHeader () {
  const [loading, setLoading] = useState(true);
  const [openNow, setOpenNow] = useState(false);
  


  const renderOpen = useCallback(() => {
    const today = dayjs();
    const day = today.day()
    const days = [
      "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"
    ]
    const nameToday = days[day]

    const opened = periods.find(period => period.open.day === day);
    const nextOpened = periods.find(period => period.open.day === (day < 6 ? day + 1:1));

    if(!opened && day === 0){
      return <>Abre amanhã <strong className={styles.closed}>Fechado Agora</strong></>
    }

    const openHour = `${opened.open.time.slice(0,2)}:${opened.open.time.slice(2)}` ;
    const closeHour = `${opened.close.time.slice(0,2)}:${opened.close.time.slice(2)}` ;

    const hourNow = `${today.hour()}:${today.minute()}`
    
    if(hourNow > closeHour && openHour < closeHour) {
      return <>Abre amanhã - {formatGoogleHours(nextOpened.open.time, nextOpened.close.time)} <strong className={styles.closed}>Fechado Agora</strong></>
    }

    return <>{nameToday} - {openHour} - {closeHour} <strong>Aberto Agora</strong></>

  },[])



  return (
    <div className={styles.subHeaderContainer}>
      <div className={styles.subHeaderContent}>
        <span className={styles.phoneContent}>
          <AiOutlinePhone/>
          <strong>
            {/* <a href="tel:=5544991801835">(44) 99180-1835</a> */}
            <a href="tel:=4434229213">(44) 3422-9213</a>
          </strong>
        </span>

        <span className={styles.openHouseContent}>
          {/* <AiOutlineClockCircle/> */}
          
        {renderOpen()}
        </span>
      </div>
    </div>
  )
}