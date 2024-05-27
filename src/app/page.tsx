'use client'

import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import Promo from "@/components/Promo";
import Review from "@/components/Review";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (
        async () => {

            const BASE: string = 'http://localhost:9999/api/user';

            try {
                const response = await fetch(`${BASE}`, {
                    credentials: 'include',
                });

                const content = await response.json();
                console.log(content);
                
                setMessage(`You've successfully logged in!`);
                // setMessage(`Hi ${content.username}`);
                setAuth(true);
                if (message) {
                  alert(message);
                }
            } catch (e) {
                setMessage('You are not logged in');
                setAuth(false);
            }
        }
    )();
  }, [message]);

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
