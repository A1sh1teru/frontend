'use client';

import Image from "next/image"
import styles from "./Header.module.scss"
import HeaderNavbar from "../HeaderNavbar";

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>

                <Image 
                src="img/Logo.svg"
                width={48}
                height={48}
                alt="Logo"
                />

                <h3 className={styles.title}>
                Estatein
                </h3>

            </div>

            <div className={styles.navbar}>

                <HeaderNavbar />

            </div>

            <div className={styles.buttonContact}>
                Contact Us
            </div>
        </header>

    )
}

export default Header;