import styles from "./faq.module.scss"
import Image from "next/image";

function Faq() {

    return(

        <section className={styles.faqContainer}>

            <div className={styles.topContainer}>
                <h2 className={styles.topTitle}>
                    Frequently Asked Questions
                </h2>
                <div className={styles.topSubContainer}>
                    <div className={styles.subTitle}>
                        Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
                    </div>

                    <div className={styles.viewBtn}>
                        View All FAQ’s
                    </div>

                </div>
            </div>

            <div className={styles.middleContainer}>

                <article className={styles.questionContainer}>

                    <span className={styles.questionTitle}>
                        How do I search for properties on Estatein?
                    </span>

                    <span className={styles.questionDescription}>
                        Learn how to use our user-friendly search tools to find properties that match your criteria.
                        <span className={styles.readMoreBtn}>Read More</span>
                    </span>

                    <div className={styles.readMoreBtn2}>

                       Read More

                    </div>

                </article>

                <article className={styles.questionContainer}>

                    <span className={styles.questionTitle}>
                        What documents do I need to sell my property through Estatein?
                    </span>

                    <span className={styles.questionDescription}>
                        Find out about the necessary documentation for listing your property with us.
                        <span className={styles.readMoreBtn}>Read More</span>
                    </span>

                    <div className={styles.readMoreBtn2}>

                       Read More 

                    </div>

                </article>

                <article className={styles.questionContainer}>

                    <span className={styles.questionTitle}>
                        How can I contact an Estatein agent?
                    </span>

                    <span className={styles.questionDescription}>
                        Discover the different ways you can get in touch with our experienced agents.
                        <span className={styles.readMoreBtn}>Read More</span>
                    </span>

                    <div className={styles.readMoreBtn2}>
                        
                        Read More 

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

        </section>

    )

}

export default Faq;