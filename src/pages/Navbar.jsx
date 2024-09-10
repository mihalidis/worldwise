import styles from '../assets/modules/Navbar.module.css'
import { NavLink  } from "react-router-dom";

export default function Navbar() {
  return <>
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to={'/'} className={styles.logo}>
          <img className={styles.globeImage} src="/icons/icon.png" alt="globe" />
          <span className={styles.appName}>Worldwise</span>
        </NavLink>
        <div className={styles.menu}>
          <NavLink  to={'/product'} className={styles.link}>Product</NavLink>
          <NavLink  to={'/pricing'} className={styles.link}>Pricing</NavLink>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </nav>
  </>
}