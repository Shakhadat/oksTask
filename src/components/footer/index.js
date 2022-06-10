import React from "react";
import styles from './index.module.sass';
import facebook from '../../assets/img/icons/Facebook.svg';
import instragram from '../../assets/img/icons/Instagram.svg';
import twitter from '../../assets/img/icons/Twitter.svg';
import linkedin from '../../assets/img/icons/Linkedin.svg';
import union from '../../assets/img/icons/Union.svg';
import pay from '../../assets/img/payment.svg'

export default function(){
    return(
        <div className={styles.footer_container}>
            <div className={styles.main_footer}>
                <div className={styles.leftFooter}>
                    <ul>
                        <li><strong>My Account</strong></li>
                        <li>My Account</li>
                        <li>Our stores</li>
                        <li>Contact us</li>
                        <li>Career</li>
                        <li>Specials</li>
                    </ul>
                    <ul>
                        <li><strong>Help & Guide</strong></li>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Shipping & Delivery</li>
                        <li>Product Policy</li>
                        <li>How to Return</li>
                    </ul>
                    <ul>
                        <li><strong>Categories</strong></li>
                        <li>House Plants</li>
                        <li>Potter Plants</li>
                        <li>Seeds</li>
                        <li>Small Plants</li>
                        <li>Accessories</li>
                    </ul>

                </div>
              <div className={styles.rightfooter}>
                 <ul>
                       <li><strong>Social Media</strong></li>
                       <li>
                           <ul>
                               <li><img src={facebook} alt="" /></li>
                               <li><img src={instragram} alt="" /></li>
                               <li><img src={twitter} alt="" /></li>
                               <li><img src={linkedin} alt="" /></li>
                               <li><img src={union} alt="" /></li>

                           </ul>
                       </li>
                       <li><strong>We accept</strong></li>
                       <li><img src={pay} alt="" /></li>
                   </ul>
              </div>
              
            </div>
            <p className={styles.footbottom}>© 2021 GreenShop. All Rights Reserved.</p>
        </div>
    );
}