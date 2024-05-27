import Link from 'next/link';
import styles from './HeaderNavbarProperties.module.scss';

function HeaderNavbarProperties() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.buttonsList}>
				<ul className={styles.list}>
					<li>
						<Link href="/" className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.listItem2}>
						<Link href="#" className={styles.navLink}>
							About Us
						</Link>
					</li>
					<li className={styles.listItem3}>
						<div className={styles.propertiesButton}>
							<Link href="/properties" className={styles.navLink}>
								Properties
							</Link>
						</div>
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

export default HeaderNavbarProperties;
