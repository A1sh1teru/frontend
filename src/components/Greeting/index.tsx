import Image from "next/image"
import styles from "./Greeting.module.scss"

function Greeting() {

    return (

        <div className={styles.container1}>

        <div className={styles.subcontainer1}>
          
          <div className={styles.leftSubContainer1}>
            
            <div className={styles.textContainer}>

              <h1 className={styles.title2}>

                Discover Your Dream <br />Property with Estatein

              </h1>

              <div className={styles.subTitle2}>

                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.

              </div>

            </div>

            <div className={styles.buttonContainer1}>

              <div className={styles.learnButton}>
                
                Learn More
                
              </div>

              <div className={styles.browseButton}>
                
                Browse Properties
              
              </div>

            </div>

            <div className={styles.buttonContainer2}>

              <div className={styles.happyButton}>
                
                <span className={styles.text200}>

                  200+

                </span>

                <span className={styles.textHappy}>

                  Happy Customers

                </span>
                
              </div>

              <div className={styles.propertiesButton}>
                
                <span className={styles.text10}>

                  10k+

                </span>

                <span className={styles.textProperties}>

                  Properties For Clients

                </span>
                
              </div>

              <div className={styles.yearsButton}>
                
                <span className={styles.text16}>

                  16+

                </span>

                <span className={styles.textYears}>

                  Years of Experience

                </span>
                
              </div>

            </div>

          </div>

          <div className={styles.rightSubContainer1}>

            <div className={styles.abstractImg2}>
              <Image 
                src="img/AbstractDesign2.svg"
                fill={true}
                alt="Abstract Design 2"
                quality={100}
                priority
                // style={{
                // objectFit: 'cover',
                // }}
              />
            </div>

            <div className={styles.buildingImg}>
              <Image 
                src="img/Building.svg"
                fill={true}
                alt="Building"
                quality={100}
                priority
                style={{
                objectFit: 'cover',
                }}
              />
            </div>
            
          </div>

          <div className={styles.circleContainer}>

            <svg className={styles.circleText} viewBox="7 0 70 100">
              <path id="circle" d="M 0,50 a 45,45 0 1,1 0,1 z" />
              <text>
                <textPath xlinkHref="#circle">
                  Discover✨Your✨Dream✨Property✨
                </textPath>
              </text>
            </svg>

          </div>

        </div>

        <div className={styles.subcontainer2}>
          
            <div className={styles.findContainer}>

              <span className={styles.arrow1}>

                <Image 
                  src="icons/Arrow1.svg"
                  width={34}
                  height={34}
                  alt="cross"
                />

              </span>

              <span className={styles.homeImg}>

                <Image 
                  src="icons/Home.svg"
                  width={82}
                  height={82}
                  alt="cross"
                />

              </span>

              <span className={styles.findText}>
                Find Your Dream Home
              </span>

            </div>

            <div className={styles.unlockContainer}>
              
              <span className={styles.arrow1}>

                <Image 
                  src="icons/Arrow1.svg"
                  width={34}
                  height={34}
                  alt="cross"
                />

              </span>

              <span className={styles.homeImg}>

                <Image 
                  src="icons/Money.svg"
                  width={82}
                  height={82}
                  alt="cross"
                />

              </span>

              <span className={styles.findText}>
                Unlock Property Value
              </span>

            </div>

            <div className={styles.managementContainer}>
              
              <span className={styles.arrow1}>

                <Image 
                  src="icons/Arrow1.svg"
                  width={34}
                  height={34}
                  alt="cross"
                />

              </span>

              <span className={styles.homeImg}>

                <Image 
                  src="icons/Management.svg"
                  width={82}
                  height={82}
                  alt="cross"
                />

              </span>

              <span className={styles.findText}>
                Effortless Property Management
              </span>

            </div>

            <div className={styles.investmentsContainer}>
              
              <span className={styles.arrow1}>

                <Image 
                  src="icons/Arrow1.svg"
                  width={34}
                  height={34}
                  alt="cross"
                />

              </span>

              <span className={styles.homeImg}>

                <Image 
                  src="icons/Sun.svg"
                  width={82}
                  height={82}
                  alt="cross"
                />

              </span>

              <span className={styles.findText}>
                Smart Investments, Informed Decisions
              </span>

            </div>

        </div>

      </div>

    )

}

export default Greeting;