'use client'

import { SyntheticEvent, useState } from "react";
import styles from "./AuthWindowLogin.module.scss"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function AuthWindowLogin() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState('');

    const BASE: string = 'http://localhost:9999/api/auth';

    const navigation = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch(`${BASE}/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
              username,
              password
            })
        });

        if (response.ok) {
            await navigation.push('/');
          } else {
            // console.error('Failed to login');
            setErrorMessage('Incorrect username or password. Please try again.');
          }

    }

    return(

        <form onSubmit={submit} className={styles.loginContainer}>

            <input type="text" placeholder="Login" className={styles.input} required
                onChange={e => setUsername(e.target.value)}
            />

            <input type="password" placeholder="Password" className={styles.input} required
                onChange={e => setPassword(e.target.value)}
            />
            
            <button className={styles.signInBtn} type="submit">
                Sign In
            </button>
            {errorMessage &&
                <p className={styles.errorMsg}>
                    {errorMessage}
                </p>
            }
            <div className={styles.createAcc}>
                <span>Don't have an account?</span>
                <span><Link href="/auth/register" className={styles.link}>Sign Up</Link></span>
            </div>
        </form>
    )
}