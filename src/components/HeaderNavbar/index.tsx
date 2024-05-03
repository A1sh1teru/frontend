import Image from "next/image"
import styles from "./HeaderNavbar.module.scss"
import Link from "next/link";

function HeaderNavbar() {

    return (

        <nav className={styles.navbar}>

          <div className={styles.buttonsList}>
            
            <ul className={styles.list}>
              <li><div className={styles.homeButton}><Link href="/">Home</Link></div></li>
              <li className={styles.listItem2}><Link href="#">About Us</Link></li>
              <li className={styles.listItem3}><Link href="/properties">Properties</Link></li>
              <li className={styles.listItem4}><Link href ="#">Services</Link></li>
            </ul>

          </div>

        </nav>

    )

}

export default HeaderNavbar;