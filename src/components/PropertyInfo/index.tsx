import Link from "next/link";
import styles from "./Property.module.scss"
import Image from "next/image";

function PropertyInfo() {
    return(
        <div className={styles.propertyWrapper}>
            <section className={styles.propertyInfo}>

                <div className={styles.topContainer}>

                    <div className={styles.topSubContainer}>

                        <div className={styles.textContainer1}>
                            <span className={styles.title}>
                                Seaside Serenity Villa
                            </span>

                            <div className={styles.location}>

                                <i className={styles.iconLocation}>
                                    <Image
                                        width={24}
                                        height={24}
                                        src="/icons/Location.svg"
                                        alt="Location"
                                    />
                                </i>

                                <span className={styles.textLocation}>
                                    Malibu, California
                                </span>
                            </div>
                        </div>

                        <div className={styles.textContainer2}>
                            
                            <span className={styles.priceText}>
                                Price
                            </span>

                            <span className={styles.priceAmount}>
                                $1,250,000
                            </span>

                        </div>

                    </div>

                    <div className={styles.botSubContainer}>

                        <div className={styles.topImages}>

                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>
                            <div className={styles.propertyImgMin}><Image src="/img/Villa.svg" alt="Villa" width={144} height={94} /></div>

                        </div>
                        <div className={styles.botImages}>

                            <div className={styles.propertyImgMax}><Image src="/img/Villa.svg" alt="Villa" width={733} height={583} /></div>
                            <div className={styles.propertyImgMax}><Image src="/img/Villa.svg" alt="Villa" width={733} height={583} /></div>

                        </div>
                        <div className={styles.scrollImages}>

                            <div className={styles.arrowLeft}><Image src="/icons/ArrowLeft.svg" alt="Villa" width={30} height={30} /></div>

                            <div className={styles.indicatorsContainer}>
                                <div className={styles.indicator1}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                            </div>

                            <div className={styles.arrowRight}><Image src="/icons/ArrowRight.svg" alt="Villa" width={30} height={30} /></div>

                        </div>

                    </div>

                </div>

                <div className={styles.bottomContainer}>

                    <div className={styles.leftSubContainer}>

                        <span className={styles.leftTitle}>
                            Description
                        </span>

                        <div className={styles.leftDescription}>
                            Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
                        </div>

                        <div className={styles.leftInfo}>
                            <div className={styles.infoItem}>
                                <i className={styles.infoIcon}>
                                    <Image
                                        src="/icons/BedGray.svg"
                                        width={24}
                                        height={24}
                                        alt="Bed"
                                        quality={100}
                                    />
                                    <span>Bedrooms</span>
                                </i>

                                <span>04</span>

                            </div>

                            <div className={styles.infoItem}>
                                <i className={styles.infoIcon}>
                                    <Image
                                        src="/icons/BathGray.svg"
                                        width={24}
                                        height={24}
                                        alt="Bath"
                                        quality={100}
                                    />
                                    <span>Bathrooms</span>
                                </i>

                                <span>03</span>

                            </div>

                            <div className={styles.infoItem}>
                                <i className={styles.infoIcon}>
                                    <Image
                                        src="/icons/Square.svg"
                                        width={24}
                                        height={24}
                                        alt="Square"
                                        quality={100}
                                    />
                                    <span>Area</span>
                                </i>

                                <span>2,500 Square Feet</span>

                            </div>

                        </div>

                    </div>

                    <div className={styles.rightSubContainer}>

                        <span className={styles.rightTitle}>
                            Key Features and Amenities
                        </span>

                        <div className={styles.featuresContainer}>

                            <div className={styles.feature}>

                                <i className={styles.lightningIcon}>
                                    <Image
                                        src="/icons/Lightning.svg"
                                        width={24}
                                        height={24}
                                        alt="Lightning"
                                        quality={100}
                                    />
                                </i>

                                <span className={styles.featureText}>Expansive oceanfront terrace for outdoor entertaining</span>

                            </div>

                            <div className={styles.feature}>

                                <i className={styles.lightningIcon}>
                                    <Image
                                        src="/icons/Lightning.svg"
                                        width={24}
                                        height={24}
                                        alt="Lightning"
                                        quality={100}
                                    />
                                </i>

                                <span className={styles.featureText}>Gourmet kitchen with top-of-the-line appliances</span>
                                
                            </div>
                            <div className={styles.feature}>

                                <i className={styles.lightningIcon}>
                                    <Image
                                        src="/icons/Lightning.svg"
                                        width={24}
                                        height={24}
                                        alt="Lightning"
                                        quality={100}
                                    />
                                </i>

                                <span className={styles.featureText}>Private beach access for morning strolls and sunset views</span>

                            </div>
                            <div className={styles.feature}>

                                <i className={styles.lightningIcon}>
                                    <Image
                                        src="/icons/Lightning.svg"
                                        width={24}
                                        height={24}
                                        alt="Lightning"
                                        quality={100}
                                    />
                                </i>

                                <span className={styles.featureText}>Master suite with a spa-inspired bathroom and ocean-facing balcony</span>

                            </div>
                            <div className={styles.feature}>

                                <i className={styles.lightningIcon}>
                                    <Image
                                        src="/icons/Lightning.svg"
                                        width={24}
                                        height={24}
                                        alt="Lightning"
                                        quality={100}
                                    />
                                </i>

                                <span className={styles.featureText}>Private garage and ample storage space</span>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default PropertyInfo;