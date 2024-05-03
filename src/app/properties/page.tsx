import Link from "next/link"
import styles from "./page.module.scss"
import Banner from "@/components/Banner"
import Header from "@/components/Header"
import FindFilter from "@/components/FindFilter"

export default function Properties() {
    return (
        <div className={styles.propertiesPage}>
            <Banner></Banner>
            <Header></Header>
            <FindFilter></FindFilter>
        </div>
    )
}

