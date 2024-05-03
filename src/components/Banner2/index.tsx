import styles from './Banner2.module.scss'
import Image from 'next/image';

function Banner2() {

    return(

        <section className={styles.banner2Container}>

            <div className={styles.img1}>
                <Image
                    src='img/AbstractDesign3.svg'
                    width={566}
                    height={308}
                    alt='AbstractDesign3'
                />
            </div>

            <div className={styles.img2}>
                <Image
                    src='img/AbstractDesign4.svg'
                    width={725}
                    height={394}
                    alt='AbstractDesign4'
                />
            </div>

            <div className={styles.textContainer}>

                <h2 className={styles.title}>

                    Start Your Real Estate Journey Today

                </h2>

                <span className={styles.description}>

                    Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.

                </span>

            </div>

            <div className={styles.btnContainer}>

                <div className={styles.btn}>

                    Explore Properties

                </div>

            </div>

        </section>

    )

}

export default Banner2;