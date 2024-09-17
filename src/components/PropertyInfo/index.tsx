'use client'

import { useCardsQuery } from "@/hooks/useCardsQuery";
import Image from "next/image";
import { useEffect, useState } from 'react';
import styles from "./PropertyInfo.module.scss";

function PropertyInfo() {
    
    const { data, isLoading, isSuccess } = useCardsQuery();

    const [currentIndex, setCurrentIndex] = useState(0);

    const [indicatorColors, setIndicatorColors] = useState<string[]>(new Array(9).fill('gray'));

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (data?.[19]?.images.length || 1));
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + (data?.[19]?.images.length || 1)) % (data?.[18]?.images.length || 1));
    };

    useEffect(() => {
        updateIndicatorColors();
      }, [currentIndex, data]);

    const updateIndicatorColors = () => {
        const newColors = new Array(9).fill('gray');
        newColors[currentIndex] = 'blue';
        setIndicatorColors(newColors);
      };

      const imageMinStyle = {
        borderRadius: '8px',
      }

      const imageMaxStyle = {
        borderRadius: '50px',
      }

    return(
        <div className={styles.propertyWrapper}>
            <section className={styles.propertyInfo}>

                <div className={styles.topContainer}>

                    <div className={styles.topSubContainer}>

                        <div className={styles.textContainer1}>
                            {isSuccess && data && data.length > 0 &&(
                                <span className={styles.title}>
                                    {/* Seaside Serenity Villa */} {data[19].title}
                                </span>
                            )}
                            <div className={styles.location}>

                                <i className={styles.iconLocation}>
                                    <Image
                                        width={24}
                                        height={24}
                                        src="/icons/Location.svg"
                                        alt="Location"
                                    />
                                </i>
                                {isSuccess && data && data.length > 0 &&(
                                    <span className={styles.textLocation}>
                                        {/* Malibu, California */} {data[19].location}
                                    </span>
                                )}

                            </div>
                        </div>

                        <div className={styles.textContainer2}>
                            <span className={styles.priceText}>
                                Price
                            </span>
                            {isSuccess && data && data.length > 0 &&(
                                <span className={styles.priceAmount}>
                                    {/* 1,250,000 */} ${data[19].price}
                                </span>
                            )}
                        </div>

                    </div>

                    <div className={styles.botSubContainer}>
                        
                        <div className={styles.imagesContainer}>
                            <div className={styles.topImages}>

                                {data &&
                                    data[19]?.images.slice(0, 9).map((image: string, index: number) => (
                                        <div key={index} className={styles.propertyImgMin}>
                                            <Image src={`/${image}`} alt={`a-${index}`} fill={true} style={imageMinStyle} />
                                        </div>
                                ))}

                            </div>
                            <div className={styles.botImages}>

                                <div className={styles.propertyImgMax1}>
                                    <Image src={`/${data?.[19]?.images[currentIndex]}`} alt="Villa" fill={true} style={imageMaxStyle} />
                                </div>

                                <div className={styles.propertyImgMax2}>
                                    <Image src={`/${data?.[19]?.images[(currentIndex + 1) % (data?.[19]?.images.length || 1)]}`} alt="Villa" fill={true} style={imageMaxStyle} />
                                </div>

                                {/* <div className={styles.propertyImgMax}><Image src="/img/Villa.svg" alt="Villa" width={733} height={583} /></div>
                                <div className={styles.propertyImgMax}><Image src="/img/Villa.svg" alt="Villa" width={733} height={583} /></div> */}

                            </div>

                        </div>

                        <div className={styles.scrollImages}>

                            <div className={styles.arrowLeft} onClick={prevImage}>
                                <Image src="/icons/ArrowLeft.svg" alt="Villa" width={30} height={30} />
                            </div>

                            <div className={styles.indicatorsContainer}>

                                {indicatorColors.map((color, index) => (
                                    <div key={index} className={color === 'blue' ? styles.indicatorBlue : styles.indicatorGray}></div>
                                    ))}

                                {/* <div className={styles.indicator1}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div>
                                <div className={styles.indicator2}></div> */}
                            </div>

                            <div className={styles.arrowRight} onClick={nextImage}>
                                <Image src="/icons/ArrowRight.svg" alt="Villa" width={30} height={30} />
                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.bottomContainer}>

                    <div className={styles.leftSubContainer}>
                            <span className={styles.leftTitle}>
                                Description
                            </span>
                        
                        {isSuccess && data && data.length > 0 &&(
                            <div className={styles.leftDescription}>
                                Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
                            </div>
                        )}

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
                                {isSuccess && data && data.length > 0 &&(
                                    <span>{data[19].bedroom}</span>
                                )}
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
                                {data && (
                                <span>{data[19].bathroom}</span>
                                )}
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
                                {data &&(
                                <span>{data[19].area} Square Feet</span>
                                )}
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
                                {data && (
                                <span className={styles.featureText}>
                                    {/* Expansive oceanfront terrace for outdoor entertaining */} {data[19].features[0]}
                                </span>
                                )}
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
                                {data && (
                                <span className={styles.featureText}>
                                    {data[19].features[0]}
                                </span>
                                )}
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

                                {data && (
                                    <span className={styles.featureText}>
                                        {/* Private beach access for morning strolls and sunset views */} {data[19].features[0]}
                                    </span>
                                )}

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
                                {data &&(
                                    <span className={styles.featureText}>
                                        {/* Master suite with a spa-inspired bathroom and ocean-facing balcony */} {data[19].features[0]}
                                    </span>
                                )}

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
                                {data &&(
                                    <span className={styles.featureText}>
                                        {/* Private garage and ample storage space */} {data[19].features[0]}
                                    </span>
                                )}
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default PropertyInfo;