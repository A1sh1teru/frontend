import styles from "./AuthWindowLogin.module.scss"
import Link from "next/link"

export default function AuthWindowLogin() {
    return(
        <div className={styles.loginContainer}>
            <input type="text" placeholder="Login" className={styles.input}/>
            <input type="text" placeholder="Password" className={styles.input}/>
            <div className={styles.signInBtn}>
                <Link href="/" className={styles.linkBtn}>Sign In</Link>
            </div>
            <div className={styles.createAcc}>
                <span>Don't have an account?</span>
                <span><Link href="/auth/register" className={styles.link}>Sign Up</Link></span>
            </div>
        </div>
    )
}