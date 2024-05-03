import Image from "next/image"
import styles from "./Banner.module.scss"

function Banner() {

    return (

        <div className={styles.banner}>

            <div className={styles.bgimg}>
              <Image 
                src="img/AbstractDesign.svg"
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
              Learn More
            </span>
            
            <span className={styles.cross}>
              <Image 
                src="icons/Cross.svg"
                width={32}
                height={32}
                alt="cross"
                />
            </span>
              
        </div>

    )

}

export default Banner;