'use client'

import Image from "next/image"
import styles from "./Banner.module.scss"
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [showBanner, setShowBanner] = useState(true);

  const handleRemoveBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={styles.banner}>
          <div className={styles.bgimg}>
            <Image
              src="/img/AbstractDesign.svg"
              fill={true}
              alt="Logo"
              quality={100}
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          <span className={styles.text1}>
            Discover Your Dream Property with Estatein
          </span>

          <span className={styles.text2}>
            <Link href="/properties">Learn More</Link>
          </span>

          <div className={styles.cross} onClick={handleRemoveBanner}>
            <Image
              src="/icons/Cross.svg"
              width={26}
              height={26}
              alt="cross"
            />
          </div>
        </div>
      )}
    </>
  );
}