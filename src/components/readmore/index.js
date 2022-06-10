import React from "react";
import read1 from '../../assets/img/read1.png';
import read2 from '../../assets/img/read2.png';
import toright from '../../assets/img/icons/toright.svg';
import elp1 from '../../assets/img/Ellipse1.svg'
import elp2 from '../../assets/img/Ellipse2.svg'
import styles from './index.module.sass';

export default function(){
    return(
        <div className={styles.conatiner_read}>
            <div className={styles.readbox}>
                <div className={styles.elps}>
                    <img src={elp1} alt="elsp" />
                    <img src={elp2} alt="elsp" />
                </div>
                <div className={styles.imgbox}><img src={read1} alt="sds" /></div>
                <div className={styles.contentText}>
                    <h1>Summer cactus & succulents</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button>Find more <img src={toright} alt="hhh" /></button>
                </div>
            </div>
            <div className={styles.readbox}>
                <div className={styles.elps}>
                    <img src={elp1} alt="elsp" />
                    <img src={elp2} alt="elsp" />
                </div>
                <div className={styles.imgbox}><img src={read2} alt="sds" /></div>
                <div className={styles.contentText}>
                    <h1>Styling Trends & much more</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button>Find more <img src={toright} alt="hhh" /></button>
                </div>
            </div>
        </div>
    );

}