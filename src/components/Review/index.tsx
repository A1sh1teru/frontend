import styles from './Review.module.scss'
import Image from 'next/image';

function Review() {
    return (

        <section className={styles.reviewContainer}>

            <div className={styles.topContainer}>
                <h2 className={styles.topTitle}>
                    What Our Clients Say
                </h2>
                <div className={styles.topSubContainer}>
                    <div className={styles.subTitle}>
                    Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                    </div>

                    <div className={styles.viewBtn}>
                        View All Testimonials
                    </div>

                </div>
            </div>

            <div className={styles.middleContainer}>
                <div className={styles.reviewsContainer}>

                    <article className={styles.review}>

                        <div className={styles.starContainer}>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                        </div>

                        <div className={styles.reviewInfoContainer}>

                            <span className={styles.reviewTitle}>
                                Exceptional Service!
                            </span>

                            <span className={styles.reviewDescription}>
                            Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!
                                <span className={styles.readMoreBtn}>Read More</span>
                            </span>

                            <div className={styles.reviewUser}>

                                <div className={styles.avatar}>
                                    
                                    <Image 
                                        src="img/Avatar1.svg"
                                        width={60}
                                        height={60}
                                        alt="Avatar1"
                                    />

                                </div>

                                <div className={styles.userInfo}>

                                    <span className={styles.userName}>
                                        Wade Warren
                                    </span>

                                    <span className={styles.userLocation}>
                                        USA, California
                                    </span>

                                </div>

                            </div>

                        </div>

                    </article>

                    <article className={styles.review}>

                        <div className={styles.starContainer}>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>
                            
                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                        </div>

                        <div className={styles.reviewInfoContainer}>

                            <span className={styles.reviewTitle}>
                                Efficient and Reliable
                            </span>

                            <span className={styles.reviewDescription}>
                                Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.
                                <span className={styles.readMoreBtn}>Read More</span>
                            </span>

                            <div className={styles.reviewUser}>

                                <div className={styles.avatar}>
                                    
                                    <Image 
                                        src="img/Avatar2.svg"
                                        width={60}
                                        height={60}
                                        alt="Avatar2"
                                    />

                                </div>

                                <div className={styles.userInfo}>

                                    <span className={styles.userName}>
                                        Emelie Thomson
                                    </span>

                                    <span className={styles.userLocation}>
                                        USA, Florida
                                    </span>
                                    
                                </div>

                            </div>

                        </div>

                    </article>

                    <article className={styles.review}>

                        <div className={styles.starContainer}>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>
                            
                            <i className={styles.starImg}>
                                <Image
                                    src="icons/Star.svg"
                                    width={24}
                                    height={24}
                                    alt="Villa"
                                    quality={100}
                                />
                            </i>

                        </div>

                        <div className={styles.reviewInfoContainer}>

                            <span className={styles.reviewTitle}>
                                Trusted Advisors
                            </span>

                            <span className={styles.reviewDescription}>
                            The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!
                                <span className={styles.readMoreBtn}>Read More</span>
                            </span>

                            <div className={styles.reviewUser}>

                                <div className={styles.avatar}>
                                    
                                    <Image 
                                        src="img/Avatar3.svg"
                                        width={60}
                                        height={60}
                                        alt="Avatar3"
                                    />

                                </div>

                                <div className={styles.userInfo}>

                                    <span className={styles.userName}>
                                        John Mans
                                    </span>

                                    <span className={styles.userLocation}>
                                        USA, Nevada
                                    </span>
                                    
                                </div>

                            </div>

                        </div>

                    </article>

                </div>

                <div className={styles.bottomContainer}>
                    
                    <span className={styles.pageNumber}>

                        <span className={styles.currentPage}>01</span> of 10

                    </span>

                    <div className={styles.arrowsContainer}>
                        <div className={styles.arrowLeft}>
                            <Image
                                src="icons/ArrowLeft.svg"
                                width={30}
                                height={30}
                                alt="ArrowLeft"
                                quality={100}
                            />
                        </div>

                        <div className={styles.arrowRight}>
                            <Image
                                src="icons/ArrowRight.svg"
                                width={30}
                                height={30}
                                alt="ArrowRight"
                                quality={100}
                            />
                        </div>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Review;