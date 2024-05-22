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
            <div className={`${styles.nav__hamburger} ${hamburgerState ? styles.open : styles.closed}`} onClick={handleHamburgerClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <ul className={`${styles.nav__menu} ${hamburgerState ? styles.open : styles.closed}`}>
                    <li><a href="/">Start</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;