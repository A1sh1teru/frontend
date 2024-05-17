import Link from "next/link"
import styles from "./AuthWindow.module.scss"
import AuthWindowLogin from "../AuthWindowLogin"
import Image from "next/image"

export default function AuthWindow() {
    return(
        <div className={styles.authWrapper}>

            <section className={styles.authContainer}>
                <div className={styles.logo}>
                    <i className={styles.logoImg}><Image src="/img/Logo.svg" alt="Logo" width={48} height={48} /></i>
                    <span>Estatein</span>
                </div>
                <AuthWindowLogin></AuthWindowLogin>
                <span className={styles.textGuest}><Link href="/" className={styles.link}>Continue as a Guest</Link></span>
            </section>

        </div>
    )
}