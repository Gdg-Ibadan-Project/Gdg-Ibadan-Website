import styles from './Navbar.module.scss'
import { Location, Calendar } from 'iconsax-react'
const Navbar = () => {
  return (
    <nav className={styles.navbar_container} data-scroll data-scroll-sticky data-scroll-target="#home">
      <a href="#top" data-scroll-to> <h1> GDG IBADAN
      </h1>
      </a>

      <div>
        <Calendar size={23} />
        <p>03, December 2022</p>
      </div>

      <div>
        <Location size={25} variant='Linear' />
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
