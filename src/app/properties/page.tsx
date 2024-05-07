import styles from "./page.module.scss"
import Banner from "@/components/Banner"
import Header from "@/components/Header"
import FindFilter from "@/components/FindFilter"
import Cards from "@/components/Cards"
import Banner2 from "@/components/Banner2"
import Footer from "@/components/Footer"

export default function Properties() {
    return (
        <div className={styles.propertiesPage}>
            <Banner></Banner>
            <Header></Header>
            <FindFilter></FindFilter>
            <Cards></Cards>
            <Banner2></Banner2>
            <Footer></Footer>
        </div>
    )
}

