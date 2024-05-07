import Link from "next/link";
import styles from "./Cards.module.scss"
import Image from "next/image";

function Cards() {

    return (
        <div className={styles.promoWrapper}>
            <section className={styles.promoContainer}>

                <div className={styles.topContainer}>
                    <h2 className={styles.topTitle}>
                        Discover a World of Possibilities
                    </h2>
                    <div className={styles.topSubContainer}>
                        <div className={styles.subTitle}>
                        Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.
                        </div>

                        <div className={styles.viewBtn}>
                            <Link href="/properties" className={styles.propertyLink}>
                                View All Properties
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={styles.middleContainer}>
                    <div className={styles.cardsContainer}>

                        <article className={styles.card}>

                            <div className={styles.img}>
                                <Image
                                    src="img/Villa.svg"
                                    fill={true}
                                    alt="Villa"
                                    quality={100}
                                />
                            </div>

                            <div className={styles.cardInfoContainer}>

                                <span className={styles.cardTitle}>
                                    Seaside Serenity Villa
                                </span>

                                <span className={styles.cardDescription}>
                                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                    <span className={styles.readMoreBtn}>Read More</span>
                                </span>

                                <div className={styles.cardOptions}>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/Bed.svg"
                                                width={24}
                                                height={24}
                                                alt="Bed"
                                                quality={100}
                                            />
                                        </i>
                                        4-Bedroom

                                    </span>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/Bath.svg"
                                                width={24}
                                                height={24}
                                                alt="Bath"
                                                quality={100}
                                            />
                                        </i>
                                        3-Bathroom

                                    </span>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/SmallHome.svg"
                                                width={24}
                                                height={24}
                                                alt="Building"
                                                quality={100}
                                            />
                                        </i>
                                        Villa

                                    </span>

                                </div>

                                <div className={styles.cardDetails}>

                                    <div className={styles.priceContainer}>

                                        <span className={styles.priceText}>Price</span>
                                        <span className={styles.priceAmount}>$550,000</span>

                                    </div>

                                    <div className={styles.detailsBtn}>

                                        <Link href="/properties/property" className={styles.propertyLink}>
                                            View Property Details
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </article>

                        <article className={styles.card}>
                            <div className={styles.img}>
                                <Image
                                    src="img/Apartment.svg"
                                    fill={true}
                                    alt="Villa"
                                    quality={100}
                                />
                            </div>

                            <div className={styles.cardInfoContainer}>
                                <span className={styles.cardTitle}>
                                    Metropolitan Haven
                                </span>

                                <span className={styles.cardDescription}>
                                    A chic and fully-furnished 2-bedroom apartment with panoramic city views...
                                    <span className={styles.readMoreBtn}>Read More</span>
                                </span>

                                <div className={styles.cardOptions}>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/Bed.svg"
                                                width={24}
                                                height={24}
                                                alt="Bed"
                                                quality={100}
                                            />
                                        </i>
                                        2-Bedroom

                                    </span>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/Bath.svg"
                                                width={24}
                                                height={24}
                                                alt="Bath"
                                                quality={100}
                                            />
                                        </i>
                                        2-Bathroom

                                    </span>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/SmallHome.svg"
                                                width={24}
                                                height={24}
                                                alt="Building"
                                                quality={100}
                                            />
                                        </i>
                                        Villa

                                    </span>

                                </div>

                                <div className={styles.cardDetails}>

                                    <div className={styles.priceContainer}>

                                        <span className={styles.priceText}>Price</span>
                                        <span className={styles.priceAmount}>$550,000</span>

                                    </div>

                                    <div className={styles.detailsBtn}>

                                        <Link href="/properties/property" className={styles.propertyLink}>
                                            View Property Details
                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </article>

                        <article className={styles.card}>
                            <div className={styles.img}>
                                <Image
                                    src="img/Cottage.svg"
                                    fill={true}
                                    alt="Villa"
                                    quality={100}
                                />
                            </div>

                            <div className={styles.cardInfoContainer}>
                                <span className={styles.cardTitle}>
                                    Rustic Retreat Cottage
                                </span>

                                <span className={styles.cardDescription}>
                                    An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
                                    <span className={styles.readMoreBtn}>Read More</span>
                                </span>

                                <div className={styles.cardOptions}>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/Bed.svg"
                                                width={24}
                                                height={24}
                                                alt="Bed"
                                                quality={100}
                                            />
                                        </i>
                                        3-Bedroom

                                    </span>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/Bath.svg"
                                                width={24}
                                                height={24}
                                                alt="Bath"
                                                quality={100}
                                            />
                                        </i>
                                        3-Bathroom

                                    </span>

                                    <span className={styles.optionsItem}>
                                        <i className={styles.cardIcon}>
                                            <Image
                                                src="icons/SmallHome.svg"
                                                width={24}
                                                height={24}
                                                alt="Building"
                                                quality={100}
                                            />
                                        </i>
                                        Cottage

                                    </span>

                                </div>

                                <div className={styles.cardDetails}>

                                    <div className={styles.priceContainer}>

                                        <span className={styles.priceText}>Price</span>
                                        <span className={styles.priceAmount}>$550,000</span>

                                    </div>

                                    <div className={styles.detailsBtn}>

                                        <Link href="/properties/property" className={styles.propertyLink}>
                                            View Property Details
                                        </Link>

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
        </div>

    )

}

export default Cards;