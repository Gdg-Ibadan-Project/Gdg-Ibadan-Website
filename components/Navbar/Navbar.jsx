import Link from 'next/link'
import { useRouter } from "next/router"
import styles from './Navbar.module.scss'
import { Location, Calendar } from 'iconsax-react'


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

      <div>
        <Calendar size={23} />
        <p>03, December 2022</p>
      </div>

      <div>
        <Link href="/map">
          <Location size={25} variant='Linear' />
        </Link>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
