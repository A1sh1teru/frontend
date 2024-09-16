'use client';

import Image from "next/image"
import styles from "./Header.module.scss"
import HeaderNavbarHome from "../HeaderNavbarHome";
import Link from "next/link";
import HeaderBurgerMenu from "../HeaderBurgerMenu";
import HeaderNavbarProperties from "../HeaderNavbarProperties";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Header() {

    const pathname = usePathname();

    let NavbarComponent;

    if (pathname === '/') {
        NavbarComponent = HeaderNavbarHome;
    } else if (pathname === '/properties') {
        NavbarComponent = HeaderNavbarProperties;
    } else {
        NavbarComponent = HeaderNavbarProperties;
    }

    return (
        <div className={styles.wrapper}>
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

                    {/* <Link href="/" as="/">
                        <HeaderNavbarHome />
                    </Link>

                    <Link href="/properties" as="/properties">
                        <HeaderNavbarProperties />
                    </Link> */}

                    <NavbarComponent />

                </div>

                <div className={styles.btnContainer}>

                    <div className={styles.buttonContact}>
                        Contact Us
                    </div>

                    <span className={styles.authBtn}><Link href="/auth" className={styles.link}>Sign In</Link></span>

                </div>

                <div className={styles.burgerMenu}>
                    <HeaderBurgerMenu />
                </div>

            </header>
        </div>

    )
}

export default Header;