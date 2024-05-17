import styles from "./HeaderBurgerMenu.module.scss"
import React, { useState } from "react";

function HeaderBurgerMenu() {

    const [active, setActive] = useState(false);
    
    const data = [
        { 
            name: "Home", 
            Link: "/" 
        },
        { 
            name: "About Us", 
            Link: "#" 
        },
        {
            name: "Properties",
            Link: "/Properties",
        },
        {
            name: "Services",
            Link: "#",
        },
        {
            name: "Contact Us",
            Link: "#",
        },
        {
            name: "Sign In",
            Link: "/auth",
        }
      ];

    return(
        <div className={styles.burgerMenuContainer}>

            <div onClick={() => setActive(!active)}>
                <div className={active ? styles.activeHamburger : styles.hamburger}></div>
            </div>

            <div className={active ? styles.activeSidenav : styles.sidenav}>
                <ul className={styles.ul}>
                    {data.map((item, i) => (
                        <li key={i} className={styles.li}>
                            <a href="#" className={styles.a}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default HeaderBurgerMenu;