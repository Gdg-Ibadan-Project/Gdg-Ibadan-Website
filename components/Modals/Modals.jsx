import React from 'react'
import styles from './Modals.module.scss'
import {CloseCircle, Twitch} from 'iconsax-react'
import Image from 'next/image'
import google from '../../assets/google.svg'
import { ArrowRight, ArrowLeft} from 'iconsax-react'
import icon from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'


const Modals = () => {
  return (
    <div className={styles.modal_container}>
        <div className={styles.close}>
            <button><CloseCircle size={32} /></button>
        </div>

        <div className={styles.contents}>
            <div className={styles.sponsor_image}>
                  <Image src={google} />
            </div>

            <div className={styles.texts}>
                <h4>Abegunye Company Limited</h4>
                <p className={styles.sponsor}>Gold Sponsors</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt et ipsam animi ut nostrum iure nemo vel soluta laborum odit fugiat mollitia, eius possimus veniam facere harum accusamus exercitationem voluptatibus dolorum dolores ipsum temporibus architecto eveniet? Labore possimus voluptate nisi alias aspernatur explicabo autem ut non odio quisquam sapiente debitis praesentium ipsum consequuntur culpa impedit voluptatibus ratione nostrum, quos repellat!
                </p>
            </div>

            <div className={styles.social_icons}>
                  <a href="#" target='_blank'><Image src={icon} /></a>
                  <a href="" target='_blank'><Image src={icon2} /></a>
                  <a href="" target='_blank'><Image src={icon3} /></a>
                  <a href="" target='_blank'><Image src={icon4} /></a>
            </div>
        </div>

        <div className={styles.modal_footer}>
            <ArrowLeft size={32} className={styles.icon} />
            <h4>Abegunye Company Limited</h4>
            <ArrowRight size={32} className={styles.icon} />
        </div>
    </div>
  )
}

export default Modals