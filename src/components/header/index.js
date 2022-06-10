import React from "react";
import styles from "./index.module.sass";
import search from '../../assets/img/Vector.svg';
import cart from '../../assets/img/cart.svg';
import Logut from '../../assets/img/Logout.svg';
import logo from '../../assets/img/logo.svg'

export default function () {
  return <div className={styles.header_container}>
      <div><a href="/"><img src={logo} alt="" /></a></div>
      <div className={styles.menumain}>
          <div><a href="#">Home<div className={styles.line}></div></a></div>
          <div><a href="shop">Shop<div className={styles.line}></div></a></div>
          <div><a href="pp">Plant Care<div className={styles.line}></div></a></div>
          <div><a href="blog">Blogs<div className={styles.line}></div></a></div>
      </div>
      <div className={styles.search_menu}>
          
          <div><img src={search} alt=""/>
                
          </div>
          <div className={styles.karzinka}><img src={cart} alt="" />
          <div className={styles.myround}>6</div> 
          </div>
          <button className={styles.menu_btn}><img src={Logut}/>Login</button>
      </div>
  </div>;
}
