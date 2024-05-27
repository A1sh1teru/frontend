'use client'

import styles from "./AuthWindowRegister.module.scss"
import Image from "next/image"
import Link from "next/link"
import { SyntheticEvent, useState } from "react"
import { useRouter} from "next/navigation"

export default function AuthWindowRegister() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useRouter();

    const BASE: string = 'http://localhost:9999/api/auth';

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch(`${BASE}/register`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username,
              password
            })
        });

        if (response.ok) {
            await navigation.push('/auth');
          } else {
            console.error('Failed to register');
          }

    }

    return(
        <div className={styles.authWrapper}>
            <form onSubmit={submit} className={styles.authContainer}>
                <div className={styles.logo}>
                    <i className={styles.logoImg}><Image src="/img/Logo.svg" alt="Logo" width={48} height={48} /></i>
                    <span>Estatein</span>
                </div>
                <input type="text" placeholder="Create Login" className={styles.input} required
                    onChange={e => setUsername(e.target.value)}
                />
                <input type="text" placeholder="Create Password" className={styles.input} required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className={styles.createBtn} type="submit">
                    Submit
                </button>
                {/* <div className={styles.createBtn}>
                    <Link href="/auth" className={styles.linkBtn}>Submit</Link>
                </div> */}
                <span className={styles.textGuest}><Link href="/" className={styles.link}>Continue as a Guest</Link></span>
            </form>
        </div>
    )
}