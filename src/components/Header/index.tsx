'use client';

import Image from "next/image"
import styles from "./Header.module.scss"
import HeaderNavbar from "../HeaderNavbar";
import Link from "next/link";
import HeaderBurgerMenu from "../HeaderBurgerMenu";

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <i className={styles.logoImg}>
                    <Image 
                    src="/img/Logo.svg"
                    width={48}
                    height={48}
                    alt="Logo"
                    />
                </i>

                <h3 className={styles.title}>
                Estatein
                </h3>

            </div>

            <div className={styles.navbar}>

                <HeaderNavbar />

            </div>

            <div className={styles.btnContainer}>

                <div className={styles.buttonContact}>
                    Contact Us
                </div>

                <span className={styles.authBtn}><Link href="/auth">Sign In</Link></span>

            </div>

            <div className={styles.burgerMenu}>
                <HeaderBurgerMenu />
            </div>

        </header>

    )
}

export default Header;