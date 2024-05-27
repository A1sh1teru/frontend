'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./Promo.module.scss";
import { useCardsQuery } from "@/hooks/useCardsQuery";
import { useState } from "react";

function Promo() {

    const { data, isLoading, isSuccess } = useCardsQuery();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

    return (

        <section className={styles.promoContainer}>

            <div className={styles.topContainer}>
                <h2 className={styles.topTitle}>
                    Featured Properties
                </h2>
                <div className={styles.topSubContainer}>
                    <div className={styles.subTitle}>
                    Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through
                    Estatein. Click "View Details" for more information.
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
                            {data &&(
                                <Image src={`/${data?.[19]?.images[0]}`} fill={true} quality={100} alt="Villa" />
                            )}
                        </div>

                        <div className={styles.cardInfoContainer}>

                            {data && (
                                <span className={styles.cardTitle}>
                                    {data?.[19].title}
                                </span>
                            )}

                            {data && (
                                <span className={styles.cardDescription}>
                                    {isExpanded ? 
                                        data?.[19].description : 
                                        `${data?.[19].description.slice(0, 130)}...`
                                    }
                                    {!isExpanded && 
                                        <span className={styles.readMoreBtn} onClick={handleToggle}>
                                            Read More
                                        </span>
                                    }
                                    {isExpanded &&
                                        <span className={styles.readMoreBtn} onClick={handleToggle}>
                                            Close
                                        </span>
                                            }
                                </span>
                            )}
                            <div className={styles.cardOptions}>

                                {data && (
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
                                            {data?.[19].bedroom}-Bedroom

                                        </span>
                                    )}

                                    {data &&(
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
                                            {data?.[19].bathroom}-Bathroom

                                        </span>
                                    )}
                                    
                                    {data && (
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
                                            {data?.[19].category.propertyType}

                                        </span>
                                    )}

                            </div>

                            <div className={styles.cardDetails}>

                                {data && (
                                    <div className={styles.priceContainer}>

                                        <span className={styles.priceText}>Price</span>
                                        <span className={styles.priceAmount}>${data?.[19].price}</span>

                                    </div>
                                )}

                                <div className={styles.detailsBtn}>
                                    <Link href="/properties/property1" className={styles.propertyLink2}>
                                        View Property Details
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </article>

                    <article className={styles.card}>

                        <div className={styles.img}>
                            {data &&(
                                <Image src={`/${data?.[19]?.images[0]}`} fill={true} quality={100} alt="Villa" />
                            )}
                        </div>

                        <div className={styles.cardInfoContainer}>

                            {data && (
                                <span className={styles.cardTitle}>
                                    {data?.[19].title}
                                </span>
                            )}

                            {data && (
                                <span className={styles.cardDescription}>
                                    {isExpanded ? 
                                        data?.[19].description : 
                                        `${data?.[19].description.slice(0, 130)}...`
                                    }
                                    {!isExpanded && 
                                        <span className={styles.readMoreBtn} onClick={handleToggle}>
                                            Read More
                                        </span>
                                    }
                                    {isExpanded &&
                                        <span className={styles.readMoreBtn} onClick={handleToggle}>
                                            Close
                                        </span>
                                            }
                                </span>
                            )}
                            <div className={styles.cardOptions}>

                                {data && (
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
                                            {data?.[19].bedroom}-Bedroom

                                        </span>
                                    )}

                                    {data &&(
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
                                            {data?.[19].bathroom}-Bathroom

                                        </span>
                                    )}
                                    
                                    {data && (
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
                                            {data?.[19].category.propertyType}

                                        </span>
                                    )}

                            </div>

                            <div className={styles.cardDetails}>

                                {data && (
                                    <div className={styles.priceContainer}>

                                        <span className={styles.priceText}>Price</span>
                                        <span className={styles.priceAmount}>${data?.[19].price}</span>

                                    </div>
                                )}

                                <div className={styles.detailsBtn}>
                                    <Link href="/properties/property1" className={styles.propertyLink2}>
                                        View Property Details
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </article>

                    <article className={styles.card}>

                        <div className={styles.img}>
                            {data &&(
                                <Image src={`/${data?.[19]?.images[0]}`} fill={true} quality={100} alt="Villa" />
                            )}
                        </div>

                        <div className={styles.cardInfoContainer}>

                            {data && (
                                <span className={styles.cardTitle}>
                                    {data?.[19].title}
                                </span>
                            )}

                            {data && (
                                <span className={styles.cardDescription}>
                                    {isExpanded ? 
                                        data?.[19].description : 
                                        `${data?.[19].description.slice(0, 130)}...`
                                    }
                                    {!isExpanded && 
                                        <span className={styles.readMoreBtn} onClick={handleToggle}>
                                            Read More
                                        </span>
                                    }
                                    {isExpanded &&
                                        <span className={styles.readMoreBtn} onClick={handleToggle}>
                                            Close
                                        </span>
                                            }
                                </span>
                            )}
                            <div className={styles.cardOptions}>

                                {data && (
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
                                            {data?.[19].bedroom}-Bedroom

                                        </span>
                                    )}

                                    {data &&(
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
                                            {data?.[19].bathroom}-Bathroom

                                        </span>
                                    )}
                                    
                                    {data && (
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
                                            {data?.[19].category.propertyType}

                                        </span>
                                    )}

                            </div>

                            <div className={styles.cardDetails}>

                                {data && (
                                    <div className={styles.priceContainer}>

                                        <span className={styles.priceText}>Price</span>
                                        <span className={styles.priceAmount}>${data?.[19].price}</span>

                                    </div>
                                )}

                                <div className={styles.detailsBtn}>
                                    <Link href="/properties/property1" className={styles.propertyLink2}>
                                        View Property Details
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </article>
                </div>

                <div className={styles.bottomContainer}>
                    
                    <span className={styles.pageNumber}>

                        <span className={styles.currentPage}>01</span> of 60

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

export default Promo;