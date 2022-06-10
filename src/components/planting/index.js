import React from "react";
import styles from './index.module.sass';
import bgcircle from '../../assets/img/bgelips.svg';
import plant1top from '../../assets/img/plat1top.svg';
import plant1bot from '../../assets/img/plant1bot.svg';
import plant2 from '../../assets/img/plant2.svg'
import plant3 from '../../assets/img/plant3.svg'


export default function(){
    return(
        <div className={styles.planting_container}>
            <div className={styles.plantboxes}>
                <div className={styles.plantItem}>
                    <div className={styles.imgbox_plant}>
                        <img className={styles.bg_colorbox} src={bgcircle} alt="cd" />
                        <div className={styles.plantpic}>
                            <img src={plant1top}/>
                            <img src={plant1bot}/>
                        
                        </div>
                    </div>
                    <h2>Garden Care</h2>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>

                </div>

                <div className={styles.line_plant}></div>

                <div className={styles.plantItem}>
                    <div className={styles.imgbox_plant}>
                        <img className={styles.bg_colorbox} src={bgcircle} alt="cd" />
                        
                            <img src={plant2}/>
                            {/* <img src={plant1bot}/> */}
                        
                    </div>
                    <h2>Plant Renovation</h2>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>

                </div>

                <div className={styles.line_plant}></div>

                <div className={styles.plantItem}>
                    <div className={styles.imgbox_plant}>
                        <img className={styles.bg_colorbox} src={bgcircle} alt="cd" />
                       
                            <img src={plant3}/>
                           
                        
                        
                    </div>
                    <h2>Watering Graden</h2>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>

                </div>

            </div>
            <div className={styles.newsletter}>
                <h2>Would you like to join newsletters?</h2>
                <form>
                    <input type="email"  placeholder="enter your email address..."/>
                    <button>Join</button>
                </form>
                <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
        </div>
    );
}