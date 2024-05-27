'use client'

import Link from "next/link";
import styles from "./Cards.module.scss"
import Image from "next/image";
import { useCardsQuery } from "@/hooks/useCardsQuery";
import { useState } from "react";
import PropertyCard1 from "./propertyCard3";
import PropertyCard2 from "./propertyCard2";
import PropertyCard3 from "./propertyCard3";

function Cards() {

    const { data, isLoading, isSuccess } = useCardsQuery();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

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

                        <PropertyCard1 />
                        <PropertyCard2 />
                        <PropertyCard3 />

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