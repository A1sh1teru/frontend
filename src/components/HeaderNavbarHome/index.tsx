import Link from 'next/link';
import styles from './HeaderNavbarHome.module.scss';

function HeaderNavbarHome() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.buttonsList}>
				<ul className={styles.list}>
					<li>
						<div className={styles.homeButton}>
							<Link href="/" className={styles.navLink}>
								Home
							</Link>
						</div>
					</li>
					<li className={styles.listItem2}>
						<Link href="#" className={styles.navLink}>
							About Us
						</Link>
					</li>
					<li className={styles.listItem3}>
						<Link href="/properties" className={styles.navLink}>
							Properties
						</Link>
					</li>
					<li className={styles.listItem4}>
						<Link href="#" className={styles.navLink}>
							Services
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default HeaderNavbarHome;
