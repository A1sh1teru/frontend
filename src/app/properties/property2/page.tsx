import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PropertyInfo from "@/components/PropertyInfo";
import styles from "./page.module.scss"
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Banner2 from "@/components/Banner2";

export default function Property2() {

    return(
        
        <div>
            <Banner></Banner>
            <Header></Header>
            <PropertyInfo></PropertyInfo>
            <Faq></Faq>
            <Banner2></Banner2>
            <Footer></Footer>
        </div>

    )

}