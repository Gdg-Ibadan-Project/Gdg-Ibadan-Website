import React from 'react'
import styles from './Sidenav.module.scss'
import {Home, Video, FolderOpen, Location, DirectboxSend, Maximize3} from 'iconsax-react'
import Image from 'next/image'
import icon from '../../assets/vector.svg'

const Sidenav = () => {
  return (
    <div className={styles.sidenav_container}>
        <nav>
            <ul>
                <li className={styles.max_con}>
                    <Maximize3 className={styles.maximize} />
                </li>
                <li>
                    <Home />
                    <span>Lorem Ipsum</span>
                </li>
                 <li>
                    <Video />
                    <span>Lorem Ipsum</span>
                </li>
                  <li>
                      <Image src={icon} alt='icon' />
                      <span>Lorem Ipsum</span>
                  </li>
                 <li>
                    <FolderOpen />
                    <span>Lorem Ipsum</span>
                </li>
                 <li>
                    <DirectboxSend />
                    <span>Lorem Ipsum</span>
                </li>
                 <li>
                    <Location />
                    <span>Lorem Ipsum</span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidenav