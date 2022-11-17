import styles from './Navbar.module.scss'
import {Location, Calendar} from 'iconsax-react'
const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <h1>GDG IBADAN</h1>

      <div>
        <Calendar size={23} />
        <p>03, December 2022</p>
      </div>

      <div>
        <Location size={25} variant='linear' />
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
