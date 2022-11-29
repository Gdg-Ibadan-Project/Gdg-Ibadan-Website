import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from "next/router"
import {useContext} from 'react'
import { NavigationContext } from '../../context/Navigation.context'

import styles from './Navbar.module.scss'
import { Location, Calendar, TextalignJustifyright } from 'iconsax-react'
import close from '../../public/close.svg'


const Navbar = () => {

  const navigationState = useContext(NavigationContext)


  const [navToggle, setNavToggle] = navigationState;
  
  // console.log(navToggle)


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

      <div className={styles.toggle_icon} onClick={()=> setNavToggle(!navToggle)}>
        <button><TextalignJustifyright size={30} /></button>
      </div>
    </nav>
  );
};


export const MobileNavigation = () => {
  
  const navigationState = useContext(NavigationContext)

  const [navToggle, setNavToggle] = navigationState;


  return (
  
    <div className={`${styles.mobile_navbar}  animate__animated  ${navToggle ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}  style={( navToggle ? {display:'block'} : {display:""})}>

      
      <div onClick={()=> setNavToggle(!navToggle)} >
        <Image src={close} width={50} height={50} alt='navigation close'></Image>
      </div>
      
      <nav>
        
        <ul>
          
          <li>
            <Link href='/'>
              <p>Home</p>
            </Link>
          </li>
          
          <li> <Link href='#about'>
              <p>About</p>
            </Link></li>
          
          <li> <Link href='#schedule'>
              <p>Events</p>
            </Link></li>
          
          <li> <Link href='#organizers'>
              <p>Sponsors</p>
            </Link></li>
          
          <li> <Link href='#speakers'>
              <p>Speakers</p>
            </Link></li>
        
          <li> <Link href='#gallery'>
              <p>Gallery</p>
            </Link></li>

        </ul>
      </nav>
      
    </div>

     
    
  )
} 
export default Navbar;
