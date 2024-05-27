import Link from 'next/link';
import styles from './Footer.module.scss'
import Image from 'next/image';

function Footer() {

    return(

        <footer className={styles.footerContainer}>

            <section className={styles.topContainer}>

                <div className={styles.subContainer}>

                    <div className={styles.logo}>

                        <Image 
                        src="/img/Logo.svg"
                        width={48}
                        height={48}
                        alt="Logo"
                        />

                        <h3 className={styles.logoTitle}>
                        Estatein
                        </h3>

                    </div>

                    <div className={styles.inputField}>

                        <i className={styles.icon1}>
                            <Image 
                                src="/icons/Mail.svg"
                                width={24}
                                height={24}
                                alt="Logo"
                            />
                        </i>

                        <span className={styles.inputText}>
                            Enter Your Email
                        </span>

                        <i className={styles.icon2}>
                            <Image 
                                src="/icons/Send.svg"
                                width={30}
                                height={30}
                                alt="Logo"
                            />
                        </i>

                    </div> 

                </div>

                <div className={styles.footerNavigation}>

                    <ul className={styles.homeList}>
                        <Link href="#" className={styles.link}><li className={styles.topTitle}>Home</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Hero Section</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Features</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Properties</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Testimonials</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.bottomItem}>FAQ's</li></Link>
                    </ul>

                    <ul className={styles.aboutUsList}>
                        <Link href="#" className={styles.link}><li className={styles.topTitle}>About Us</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Our story</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Our Works</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>How it Works</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Our Team</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.bottomItem}>Our Clients</li></Link>
                    </ul>

                    <ul className={styles.propertiesList}>
                        <Link href="#" className={styles.link}><li className={styles.topTitle}>Properties</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Portfolio</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.bottomItem}>Categories</li></Link>
                    </ul>

                    <ul className={styles.servicesList}>
                        <Link href="#" className={styles.link}><li className={styles.topTitle}>Services</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Valuation Mastery</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Strategic Marketing</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Negotiation Wizardry</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Closing Success</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.bottomItem}>Property Management</li></Link>
                    </ul>

                    <ul className={styles.contactUsList}>
                        <Link href="#" className={styles.link}><li className={styles.topTitle}>Contact Us</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.otherItem}>Contact Form</li></Link>
                        <Link href="#" className={styles.link}><li className={styles.bottomItem}>Our Offices</li></Link>
                    </ul>

                </div>

            </section>

            <section className={styles.bottomContainer}>

                <div className={styles.privacyContainer}>

                    <span className={styles.privacyText1}>
                        @2023 Estatein. All Rights Reserved.
                    </span>

                    <span className={styles.privacyText2}>
                        Terms & Conditions
                    </span>

                </div>

                <div className={styles.socialContainer}>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="/icons/Facebook.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="/icons/Inst.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="/icons/Twitter.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="/icons/YouTube.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                </div>

            </section>

        </footer>

    )

}

export default Footer;