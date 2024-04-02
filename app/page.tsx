"use client"
import style from "./page.module.css";
import Image from "next/image"
import banner01 from "./components/images/home-banner-01.png";
import icon01 from "./components/images/icon01.svg";
import icon02 from "./components/images/icon02.svg";
import icon04 from "./components/images/icon04.svg";
import icon05 from "./components/images/icon05.svg";
import banks from "./components/images/banks.png";
import { useState } from "react";
import arrow from "./components/images/arrow.png";
import car from "./components/images/car.png";
import SimulationModal from "./components/modal/page";


export default function Home() {
  const [modal, setModal] = useState<boolean>(true)
  const [faq, setFaq] = useState<boolean>(false)
  const [faq01, setFaq01] = useState<boolean>(false)
  const [faq02, setFaq02] = useState<boolean>(false)
  const [faq03, setFaq03] = useState<boolean>(false)

  const handleFaqClick = () => {
    setFaq(currentState => !currentState);
  };

  const handleFaqClick01 = () => {
    setFaq01(currentState => !currentState);
  };

  const handleFaqClick02 = () => {
    setFaq02(currentState => !currentState);
  };

  const handleFaqClick03 = () => {
    setFaq03(currentState => !currentState);
  };


  return (
   <>
    { modal && (
      <SimulationModal />
    )}

   <div className={style.wraper}>
    <div className={style.banner}>
      <div className={style.home}>
        <h1 className={style.headline}>
          3X mais financiamentos aprovados
        </h1>
        <p>
          Somos a primeira plataforma 100% digital de financiamento imobiliário
        </p>
        <div>
          <a href="">Faça uma simulação</a>
        </div>
      </div>
      <div>
        <Image className={style.bannerPicture} src={banner01} alt=""/>
      </div>
    </div>
   </div>
   <div className={style.wraper}>
    <div className={style.container}>
      <div className={style.containerActions}>
        <Image className={style.imgItem} src={car} alt="" />
        <div className={style.containerContent}>
          <h2>
            Crédito Imobiliário
          </h2>
          <p>
            Crédito imobiliário sem desembolsar grandes valores ou fazer financiamento
          </p>
          <div className={style.knowMore}>
            Saiba mais
          </div>
        </div>
      </div> 
      <div className={style.containerActions}>
        <Image className={style.imgItem} src={car} alt="" />
        <div className={style.containerContent}>
          <h2>
            Crédito Imobiliário
          </h2>
          <p>
            Crédito imobiliário sem desembolsar grandes valores ou fazer financiamento
          </p>
          <div className={style.knowMore}>
            Saiba mais
          </div>
        </div>
      </div> 
    </div>

   </div>
   <div className={style.wraper}>
      <div className={style.containerActions02}>
        <h2>
          Como a Dryve pode ajudar você a andar de carro novo
        </h2>
        <p>
        O processo é muito simples, totalmente digital e cuidamos de tudo pra você.
        </p>
      </div>
      <div className={style.iconSection}>
        <div>
          <Image className={style.icon} src={icon01} alt="" />
          <h2>
            Condições
          </h2>
          <p>
          Informe o valor da entrada e quantidade de parcelas.  
          </p>
        </div>
        <div>
          <Image className={style.icon} src={icon02} alt="" />
          <h2>
            Condições
          </h2>
          <p>
          Informe o valor da entrada e quantidade de parcelas.  
          </p>
        </div>
        <div>
          <Image className={style.icon} src={icon04} alt="" />
          <h2>
            Condições
          </h2>
          <p>
          Informe o valor da entrada e quantidade de parcelas.  
          </p>
        </div>
        <div>
          <Image className={style.icon} src={icon05} alt="" />
          <h2>
            Condições
          </h2>
          <p>
          Informe o valor da entrada e quantidade de parcelas.  
          </p>
        </div>
      </div>
      <div className={style.btn}>
          Faça uma simulação
      </div>
   </div>
   <div className={style.wraper}>
    <div className={style.containerActions03}>
      <div>
        <h2>
          São mais de 10 bancos parceiros
        </h2>
        <p>
          Nossa parceria com os principais bancos e financeiras aumenta em até 3X as chances de aprovar o crédito solicitado.
        </p>
      </div>
      <Image className={style.bank} src={banks} alt="" />
    </div>
  
   </div>
   <div className={style.wraper}>
   <div className={style.containerActions02}>
        <h2>
          Principais dúvidas
        </h2>
        <p>
        Esclareça suas dúvidas sobre a Dryve.
        </p>
   </div>
    <div className={style.faq}>
      <div className={style.accDiv}>
        <button className={style.acc} onClick={handleFaqClick}>
        <h2 >
        A Dryve cobra alguma quantia para realizar análise de crédito?
        </h2>
        <Image className={style.arrow} src={arrow} alt="" />
        </button>
        {faq && (
          <div>
          Não! As análises de crédito para financiamento de veículos são feitas mediante solicitação direta do cliente ao nosso agente autorizado ou pelo aplicativo oficial. Os dados são enviados à Dryve que fica responsável em analisar o crédito junto às instituições financeiras. Nenhuma quantia deve ser cobrada por essa análise.
          </div>
        )}
      </div>
      <div className={style.accDiv}>
        <button className={style.acc} onClick={handleFaqClick01}>
        <h2 >
        A Dryve cobra alguma quantia para realizar análise de crédito?
        </h2>
        <Image className={style.arrow} src={arrow} alt="" />

        </button>
        {faq01 && (
          <div>
          Não! As análises de crédito para financiamento de veículos são feitas mediante solicitação direta do cliente ao nosso agente autorizado ou pelo aplicativo oficial. Os dados são enviados à Dryve que fica responsável em analisar o crédito junto às instituições financeiras. Nenhuma quantia deve ser cobrada por essa análise.
          </div>
        )}
      </div>
    </div>
    <div className={style.faq}>
      <div className={style.accDiv}>
        <button className={style.acc} onClick={handleFaqClick02}>
        <h2 >
        A Dryve cobra alguma quantia para realizar análise de crédito?
        </h2>
        <Image className={style.arrow} src={arrow} alt="" />
        </button>
        {faq02 && (
          <div>
          Não! As análises de crédito para financiamento de veículos são feitas mediante solicitação direta do cliente ao nosso agente autorizado ou pelo aplicativo oficial. Os dados são enviados à Dryve que fica responsável em analisar o crédito junto às instituições financeiras. Nenhuma quantia deve ser cobrada por essa análise.
          </div>
        )}
      </div>
      <div className={style.accDiv}>
        <button className={style.acc} onClick={handleFaqClick03}>
        <h2 >
        A Dryve cobra alguma quantia para realizar análise de crédito?
        </h2>
        <Image className={style.arrow} src={arrow} alt="" />

        </button>
        {faq03 && (
          <div>
          Não! As análises de crédito para financiamento de veículos são feitas mediante solicitação direta do cliente ao nosso agente autorizado ou pelo aplicativo oficial. Os dados são enviados à Dryve que fica responsável em analisar o crédito junto às instituições financeiras. Nenhuma quantia deve ser cobrada por essa análise.
          </div>
        )}
      </div>
    </div>
   </div>
   </>
  );
}
