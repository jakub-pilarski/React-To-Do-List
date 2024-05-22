import styles from './Nav.module.css';
import logo from '../../assets/images/to-do-list.svg';
import { useState } from 'react';

const Nav = () => {
    const [hamburgerState, setHamburgerState] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerState((x) => !x);
    }
    return(
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
                <img src={logo} alt="To Do List Logo" /><h2>To-Do List</h2>
            </div>
            <div className={styles.nav__hamburger}>
                <button className={styles.nav__hamburger__button} aria-controls='primary-navigation' aria-expanded={hamburgerState} onClick={handleHamburgerClick}>
                    <svg className={styles.hamburger} viewBox='0 0 100 100' width='45' height='45'>
                        <rect className={`${styles.line} ${styles.line__top}`} width="80" height="10" x="10" y="25" rx="5"></rect>
                        <rect className={`${styles.line} ${styles.line__middle}`} width="80" height="10" x="10" y="45" rx="5"></rect>
                        <rect className={`${styles.line} ${styles.line__bottom}`} width="80" height="10" x="10" y="65" rx="5"></rect>
                    </svg>
                </button>
                <ul className={`${styles.nav__menu} ${hamburgerState ? styles.open : styles.closed}`}>
                    <li><a href="/">Start</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;