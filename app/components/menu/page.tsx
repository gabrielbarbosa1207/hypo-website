import Image from "next/image";
import Logo from "../images/logo-hypo.svg"
import style from "./page.module.css"
import Link from "next/link";


export default function Menu(){
    return(
        <>
        <div className={style.menu}>
            <Link href={`/`}>
                <div>
                    <Image src={Logo} alt="" />
                </div>
            </Link>
            <div>
                <ul className={style.menuItem}>
                    <li>
                        Início
                    </li>
                    <li>
                        Sobre Nós
                    </li>
                    <li>
                        Soluções Digitais
                    </li>
                    <li>
                        Seja um Parceiro
                    </li>
                    <li>
                        Portal Hypo
                    </li>
                </ul>
            </div>
            <div className={style.btn}>
                <button>
                    Simule Seu Crédito
                </button>
            </div>
        </div>

        </>
    )
}