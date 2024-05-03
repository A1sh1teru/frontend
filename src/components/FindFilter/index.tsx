import styles from "./FindFilter.module.scss"

function FindFilter() {

    return(
        <div className={styles.findFilterContainer}>

            <div className={styles.topFindFilterContainer}>
                <h1 className={styles.titleTop}>Find Your Dream Property</h1>
                <span className={styles.descriptionTop}>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey</span>
            </div>

            <div className={styles.botFindFilterContainer}>

                <div className={styles.searchContainer}>

                    <span></span>
                    
                    <div></div>

                </div>

                <div className={styles.filtersContainer}>

                    <div className={styles.filter1}></div>

                    <div className={styles.filter2}></div>

                    <div className={styles.filter3}></div>

                    <div className={styles.filter4}></div>

                    <div className={styles.filter5}></div>

                </div>

            </div>

        </div>
    )
}

export default FindFilter;