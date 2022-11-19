import React from 'react'
import styles from './Modals.module.scss'
import {CloseCircle, Twitch} from 'iconsax-react'
import Image from 'next/image'
import google from '../../assets/google.svg'
import {Facebook, Instagram, LinkCircle, Forward, Backward, ArrowCircleLeft, ArrowCircleRight} from 'iconsax-react'


const Modals = () => {
  return (
    <div className={styles.modal_container}>
        <div className={styles.close}>
            <button><CloseCircle /></button>
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

            <div className="social">
                <Facebook/>
                <Instagram/>
                <Twitch/>
                <LinkCircle/>
            </div>
        </div>

        <div className={styles.modal_footer}>
            <ArrowCircleLeft size={32} className={styles.icon} />
            <h4>Abegunye Company Limited</h4>
            <ArrowCircleRight size={32} className={styles.icon} />
        </div>
    </div>
  )
}

export default Modals