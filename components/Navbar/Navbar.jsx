import Link from 'next/link'
import { useRouter } from "next/router"
import styles from './Navbar.module.scss'
import { Location, Calendar, TextalignJustifyright } from 'iconsax-react'


const Navbar = () => {
  const router = useRouter()
  const { pathname } = router;

  return (
    <nav className={styles.navbar_container} data-scroll data-scroll-sticky data-scroll-target="#home">
      {pathname === '/' ?
        <a href="#home" data-scroll-to rel="noreferrer">
          <h1> GDG IBADAN </h1>
        </a>
        : <Link href="/">
          <h1> GDG IBADAN </h1>
        </Link>}

      <div className={styles.calendar}>
        <Calendar size={23} />
        <p>03, December 2022</p>
      </div>

      <div className={styles.register}>
        <Link href="/map">
          <Location size={25} variant='Linear' />
        </Link>
        <button>Register</button>
      </div>

      <div className={styles.toggle_icon}>
        <button><TextalignJustifyright size={30} /></button>
      </div>
    </nav>
  );
};

export default Navbar;
