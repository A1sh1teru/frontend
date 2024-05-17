'use client'

import { init } from "next/dist/compiled/webpack/webpack"
import styles from "./AuthWindowRegister.module.scss"
import Image from "next/image"
import Link from "next/link"
import { SyntheticEvent, useState } from "react"

export default function AuthWindowRegister() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const BASE = 'http://localhost:9999/api'

    // const submit = async (e: SyntheticEvent) => {
    //     e.preventDefault();

    //     await fetch(`${BASE}/register`, init{
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(value:{
    //             username,
    //             password
    //         })
    //     })
    // }

    return(
        <div className={styles.authWrapper}>
            <form /*onSubmit={submit}*/ className={styles.authContainer}>
                <div className={styles.logo}>
                    <i className={styles.logoImg}><Image src="/img/Logo.svg" alt="Logo" width={48} height={48} /></i>
                    <span>Estatein</span>
                </div>
                <input type="text" placeholder="Create Login" className={styles.input}
                    onChange={e => setUsername(e.target.value)}
                />
                <input type="text" placeholder="Create Password" className={styles.input}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className={styles.createBtn}>
                    <Link href="/" className={styles.linkBtn}>Submit</Link>
                </div>
                <span className={styles.textGuest}><Link href="/" className={styles.link}>Continue as a Guest</Link></span>
            </form>
        </div>
    )
}