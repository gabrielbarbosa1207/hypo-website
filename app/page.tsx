"use client"
import style from "./page.module.css";
import Image from "next/image";
import Man from "./components/images/image-01.png";
import Arrow from "./components/images/arrow.svg";
import Donut from "./components/images/donut.svg"
import Cash from "./components/images/cash.svg";
import Menu from "./components/menu/page";
import SimulationModal from "./components/modal/page";
import { useState } from "react";


export default function Home() {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      {modal && (  
        <SimulationModal/>
      )}
      <span className={style.menu}>
        <Menu />
      </span>
      <div className={style.section01}>
        <div className={style.containerFold01}>
          <div className={style.BtnMobile}>
            <button onClick={()=>{setModal(true)}} className={style.btn}>
              Simule Seu Crédito <Image src={Arrow} alt="" />
            </button>
          </div>
          <div className={style.containerMan}>
            <div className={style.imageWrapper}>
              <Image className={style.img01} src={Man} alt="" />
            </div>
          </div>
          <div className={style.headlineDiv}>
            <p className={style.broker}>
              <strong>
                Corretor
              </strong>
            </p>
            <h1>
              Oferecemos <span>Soluções de Crédito</span> para <span>você</span> e para <span>seu cliente</span>
            </h1>
            <hr className={style.divider} />
            <p className={style.subHeadline}>
              O <strong>setor de crédito da sua imobiliária</strong> a um clique
            </p>
            <div className={style.BtnDesktop}>
              <button className={style.btn} onClick={()=>{setModal(true)}}>
                Simule Seu Crédito <Image src={Arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={style.containerSect}>
          <div className={style.containerRect}>
            <div className={style.simbolContainer}>
              <div className={style.simbolDiv}>
                <Image src={Donut} alt="" />
              </div>
            </div>
              <p className={style.border}>
                  <strong >
                    Até 80% do valor do imóvel a ser financiado
                  </strong>
              </p>
              <p className={style.percent}>
                +70%
              </p>
          </div>
          <div className={style.containerRect}>
          <div className={style.simbolContainer2}>
              <div className={style.simbolDiv}>
                <Image src={Cash} alt="" />
              </div>
            </div>
            <p className={style.border2}>
              <span>
                Crédito na casa certa!
              </span>
            </p>
            <p className={style.percent}>
                1 ano
              </p>
            <p>
              <strong>
                Recebe até 12 meses de aluguel antecipado
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
