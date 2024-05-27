import Link from "next/link"
import styles from "./propertyCard2.module.scss"
import { useState } from "react";
import { useCardsQuery } from "@/hooks/useCardsQuery";
import Image from "next/image";

function PropertyCard2() {

    const { data, isLoading, isSuccess } = useCardsQuery();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

    return(
        
        <article className={styles.card}>

                            <div className={styles.img}>
                                {data &&(
                                    <Image src={`/${data?.[19]?.images[0]}`} fill={true} quality={100} alt="Villa" />
                                )}
                                {/* <Image
                                    src="img/Villa.svg"
                                    fill={true}
                                    alt="Villa"
                                    quality={100}
                                /> */}

                            </div>

                            <div className={styles.cardInfoContainer}>
                                {data && (
                                    <span className={styles.cardTitle}>
                                        {data?.[19].title}
                                    </span>
                                )}
                                {data && (
                                    <div className={styles.cardDescription}>
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
                                    </div>
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

                                        <Link href="/properties/property2" className={styles.propertyLink2}>
                                            View Property Details
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </article>
    )

}

export default PropertyCard2;