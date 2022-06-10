import { Swiper, SwiperSlide} from 'swiper/react';
import slidefw from '../../assets/img/slideimage.png'
import slidefw2 from '../../assets/img/slideimage2.png'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

import styles from './index.module.sass'
import React from 'react';
import 'swiper/css';
export default function(){
    let arr=[1, 2, 3]
    return(
        <div className={styles.SliderWrapper}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true
                       }}
                    wrapperTag='ul'
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.container}
                     >
                      {arr.map((item)=>{
                          return(
                            <SwiperSlide className={styles.slideitem}>
                            
                            <div>
                                <div className={styles.beforeTite}>Welcome to GreenShop</div>
                                <h1>Let’s Make a Better <span className={styles.tithead}>Planet</span></h1>
                                <div className={styles.subtext}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</div>
                                <button className={styles.btn_org}>SHOP NOW</button>
                            </div>
                            <div className={styles.image_content}>
                                <img src={slidefw} alt="first" />
                                <img src={slidefw2} alt="second" className={styles.seconfw} />
                            </div>
                        </SwiperSlide>
              );
          })}
        
      
     
                 </Swiper>
        </div>
       
    );
}