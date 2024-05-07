import styles from "./FindFilter.module.scss"
import Image from "next/image";

function FindFilter() {

    return(
        <div className={styles.findFilterContainer}>

            <div className={styles.topFindFilterContainer}>

                <h1 className={styles.titleTop}>Find Your Dream Property</h1>

                <span className={styles.descriptionTop}>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey</span>

            </div>

            <div className={styles.botFindFilterContainer}>

                <div className={styles.searchContainer}>

                    <input className={styles.inputSearch} type="search" placeholder="Search For A Property"/>
                    
                    <div className={styles.buttonSearch}>

                        <i className={styles.searchIcon}>
                            <Image
                            src="icons/Search.svg"
                            width={24}
                            height={24}
                            alt="Search"
                            />
                        </i>

                        <span className={styles.buttonSearchText}>Find Property</span>

                    </div>

                </div>

                <div className={styles.filtersContainer}>

                    <div className={styles.filtersSubContainer}>

                        <div className={styles.filter}>

                            <i className={styles.filterIcon}>
                                <Image
                                src="icons/FilterLocation.svg"
                                width={24}
                                height={24}
                                alt="Location"
                                />
                            </i>

                            <span className={styles.filterText}>Location</span>

                            <div className={styles.btnIcon}>
                                <i className={styles.arrowIcon}>
                                    <Image
                                    src="icons/ArrowDown.svg"
                                    width={24}
                                    height={24}
                                    alt="ArrowDown"
                                    />
                                </i>
                            </div>

                        </div>

                        <div className={styles.filter}>

                            <i className={styles.filterIcon}>
                                <Image
                                src="icons/FilterHome.svg"
                                width={24}
                                height={24}
                                alt="Home"
                                />
                            </i>

                            <span className={styles.filterText}>Property Type</span>

                            <div className={styles.btnIcon}>
                                <i className={styles.arrowIcon}>
                                    <Image
                                    src="icons/ArrowDown.svg"
                                    width={24}
                                    height={24}
                                    alt="ArrowDown"
                                    />
                                </i>
                            </div>

                        </div>

                        <div className={styles.filter}>

                            <i className={styles.filterIcon}>
                                <Image
                                src="icons/FilterMoney.svg"
                                width={24}
                                height={24}
                                alt="Price"
                                />
                            </i>

                            <span className={styles.filterText}>Pricing Range</span>

                            <div className={styles.btnIcon}>
                                <i className={styles.arrowIcon}>
                                    <Image
                                    src="icons/ArrowDown.svg"
                                    width={24}
                                    height={24}
                                    alt="ArrowDown"
                                    />
                                </i>
                            </div>

                        </div>

                        <div className={styles.filter}>

                            <i className={styles.filterIcon}>
                                <Image
                                src="icons/FilterSize.svg"
                                width={24}
                                height={24}
                                alt="Size"
                                />
                            </i>

                            <span className={styles.filterText}>Property Size</span>

                            <div className={styles.btnIcon}>
                                <i className={styles.arrowIcon}>
                                    <Image
                                    src="icons/ArrowDown.svg"
                                    width={24}
                                    height={24}
                                    alt="ArrowDown"
                                    />
                                </i>
                            </div>

                        </div>

                        <div className={styles.filter}>

                            <i className={styles.filterIcon}>
                                <Image
                                src="icons/FilterCalendar.svg"
                                width={24}
                                height={24}
                                alt="Year"
                                />
                            </i>

                            <span className={styles.filterText}>Build Year</span>

                            <div className={styles.btnIcon}>
                                <i className={styles.arrowIcon}>
                                    <Image
                                    src="icons/ArrowDown.svg"
                                    width={24}
                                    height={24}
                                    alt="ArrowDown"
                                    />
                                </i>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FindFilter;