import React from "react";
import styles from './index.module.sass';
import Logo1 from '../../assets/img/LogoContact.svg';
import Locat from '../../assets/img/icons/Location.svg';
import Mess from '../../assets/img/icons/Message.svg';
import Calling from '../../assets/img/Calling.svg';



export default function(){
    return(
        <div>
            <div className={styles.greenline}></div>
            <div className={styles.contact_info}>
            <div><img src={Logo1} alt="cdc" /></div>
            <div className={styles.contact_item}>
                <div><img src={Locat} alt="" /></div>
                <div>70 West Buckingham Ave. Farmingdale, NY 11735</div>
            </div>
            <div className={styles.contact_item}>
                <div><img src={Mess} alt="" /></div>
                <div>contact@greenshop.com</div>
            </div>
            <div className={styles.contact_item}>
                <div><img src={Calling} alt="" /></div>
                <div>+88 01911 717 490</div>
            </div>
            </div>
            <div className={styles.greenline}></div>
        </div>
       
    );
}