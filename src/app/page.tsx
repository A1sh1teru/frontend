import styles from "./page.module.css";
import Header from "@/components/Header"
import Banner from "@/components/Banner";
import Greeting from "@/components/Greeting";
import Promo from "@/components/Promo";
import Review from "@/components/Review";
import Faq from "@/components/Faq";
import Banner2 from "@/components/Banner2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.home}> 
      <div>
        <Banner />
      </div>

      <header className={styles.header}>
        <Header />  
      </header>

      <div>
        <Greeting />
      </div>

      <div className={styles.mainContainer}>
        <Promo />
        <Review />
        <Faq />
      </div>

      <div>
        <Banner2 />
      </div>

      <footer>
        <Footer />
      </footer>

    </div>

  );
}
