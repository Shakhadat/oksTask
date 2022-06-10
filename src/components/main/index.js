import React, { useState } from "react";
import styles from "./index.module.sass";
import Pagenation from "../pagenation";
import prod1 from "../../assets/img/cards/1.png";
import prod2 from "../../assets/img/cards/2.png";
import prod3 from "../../assets/img/cards/3.png";
import prod4 from "../../assets/img/cards/4.png";
import prod5 from "../../assets/img/cards/5.png";
import prod6 from "../../assets/img/cards/6.png";
import prod7 from "../../assets/img/cards/7.png";
import prod8 from "../../assets/img/cards/8.png";
import prod9 from "../../assets/img/cards/9.png";
import sales from "../../assets/img/sales.png";
import sales2 from "../../assets/img/SuperSale.png";
import cart1 from "../../assets/img/icons/cart.svg";
import heart from "../../assets/img/icons/heart.svg";
import search from "../../assets/img/icons/search.svg";

let products = [
  {
    product_name: "Barberton Daisy",
    price: "$119.00",
    image: prod1,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Angel Wing Begonia",
    price: "$169.00",
    image: prod2,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "African Violet",
    price: "$199.00",
    image: prod3,
    discount: { yes: true, oldprice: "$229.00" },
  },
  {
    product_name: "Beach Spider Lily",
    price: "$129.00",
    image: prod4,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Blushing Bromeliad",
    price: "$139.00",
    image: prod5,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Aluminum Plant",
    price: "$179.00",
    image: prod6,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Bird's Nest Fern",
    price: "$99.00",
    image: prod7,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Broadleaf Lady Palm",
    price: "$59.00",
    image: prod8,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Chinese Evergreen",
    price: "$39.00",
    image: prod9,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Barberton Daisy",
    price: "$119.00",
    image: prod1,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Angel Wing Begonia",
    price: "$169.00",
    image: prod2,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "African Violet",
    price: "$199.00",
    image: prod3,
    discount: { yes: true, oldprice: "$229.00" },
  },
  {
    product_name: "Beach Spider Lily",
    price: "$129.00",
    image: prod4,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Blushing Bromeliad",
    price: "$139.00",
    image: prod5,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Aluminum Plant",
    price: "$179.00",
    image: prod6,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Bird's Nest Fern",
    price: "$99.00",
    image: prod7,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Broadleaf Lady Palm",
    price: "$59.00",
    image: prod8,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Chinese Evergreen",
    price: "$39.00",
    image: prod9,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Barberton Daisy",
    price: "$119.00",
    image: prod1,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Angel Wing Begonia",
    price: "$169.00",
    image: prod2,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "African Violet",
    price: "$199.00",
    image: prod3,
    discount: { yes: true, oldprice: "$229.00" },
  },
  {
    product_name: "Beach Spider Lily",
    price: "$129.00",
    image: prod4,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Blushing Bromeliad",
    price: "$139.00",
    image: prod5,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Aluminum Plant",
    price: "$179.00",
    image: prod6,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Bird's Nest Fern",
    price: "$99.00",
    image: prod7,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Broadleaf Lady Palm",
    price: "$59.00",
    image: prod8,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Chinese Evergreen",
    price: "$39.00",
    image: prod9,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Barberton Daisy",
    price: "$119.00",
    image: prod1,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Angel Wing Begonia",
    price: "$169.00",
    image: prod2,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "African Violet",
    price: "$199.00",
    image: prod3,
    discount: { yes: true, oldprice: "$229.00" },
  },
  {
    product_name: "Beach Spider Lily",
    price: "$129.00",
    image: prod4,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Blushing Bromeliad",
    price: "$139.00",
    image: prod5,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Aluminum Plant",
    price: "$179.00",
    image: prod6,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Bird's Nest Fern",
    price: "$99.00",
    image: prod7,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Broadleaf Lady Palm",
    price: "$59.00",
    image: prod8,
    discount: { yes: false, oldprice: 0 },
  },
  {
    product_name: "Chinese Evergreen",
    price: "$39.00",
    image: prod9,
    discount: { yes: false, oldprice: 0 },
  },
];

let productsCategory=[
    {
        category:'House Plants',
        numbers: '33',
    },
    {
        category:'Potter Plants',
        numbers: '12',
    },
    {
        category:'Seeds',
        numbers: '65',
    },
    {
        category:'Small Plants',
        numbers: '39',
    },
    {
        category:'Big Plants',
        numbers: '23',
    },
    {
        category:'Succulents',
        numbers: '17',
    },
    {
        category:'Trerrariums',
        numbers: '19',
    },
    {
        category:'Gardening',
        numbers: '13',
    },
    {
        category:'Accessories',
        numbers: '18',
    },
]
export default function () {

  const [currentPage, setCurrentPage]=useState(1);
  const [postsPerPage, setPostPerPage]=useState(9);

  // current postPage
  const indexOfLastPost=currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=products.slice(indexOfFirstPost, indexOfLastPost);

  // change page pagenation

  const paginate=(pageNumber, e)=> {
    e.preventDefault();
    console.log("current", currentPage)
   return  setCurrentPage(pageNumber)
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_header}>Categories</div>
        {productsCategory.map((item)=>{
            return(
                <a href="/" className={styles.catlink}>
                     <div className={styles.cat_item}>
                            <div>{item.category}</div>
                            <div>({item.numbers})</div>
                    </div>
                </a>
               
            );
        })}
        <div className={styles.sidebar_header}>Price Range</div>
        <div className={styles.processbar}>
            <div className={styles.proline}></div>
            <div className={styles.grayline}></div>
        </div>
        <div className={styles.progressamount}>
        Price:<span className={styles.pricerange}>$39 - $1230</span>
        </div>

        <button className={styles.btn_filter}>Filter</button>
        <div className={styles.sidebar_header}>Size</div>
        <div className={styles.prodsize}>
           <ul>
               <li>Small</li>
               <li>(119)</li>
           </ul>
           <ul>
               <li>Medium</li>
               <li>(86)</li>
           </ul>
           <ul>
               <li>Large</li>
               <li>(78)</li>
           </ul>
        
        </div>

        <div className={styles.saleProduct}>

            <img src={sales2} alt="sale" />
            <p>UP TO 75% OFF</p>
            <img src={sales} alt="sale2" />
        </div>
      </div>
      {/* main contentt6w21 */}
      <div className={styles.main_content_container}>
        <div className={styles.header_main_content}>
          <div className={styles.main_items}>
            <div>
              <a href="#">
                All plants<div className={styles.line}></div>
              </a>
            </div>
            <div>
              <a href="shop">
                New Arrivals<div className={styles.line}></div>
              </a>
            </div>
            <div>
              <a href="pp">
                Sale<div className={styles.line}></div>
              </a>
            </div>
          </div>
          <div className={styles.sortpoint}>
            Short by:
            <select name="sort" id="sort" className={styles.selectors}>
              <option value="name">Default sorting</option>
              <option value="name">size</option>
              <option value="name">price</option>
            </select>
          </div>
        </div>
        <div className={styles.allProducts}>
          {currentPosts.map((item) => {
            return (
              <div className={styles.productCard}>
                <div className={styles.productContentbox}>
                  {" "}
                  {item.discount.yes?<div className={styles.itemDiscount}>13% OFF</div>:""}
                  <img
                    src={item.image}
                    className={styles.productimgcont}
                    alt="img"
                  />
                  <div className={styles.hoverbox}>
                    <ul>
                      <li><img src={cart1}/></li>
                      <li><img src={heart}/></li>
                      <li><img src={search}/></li>
                    </ul>
                  </div>
                </div>
                <div className={styles.itemName}>{item.product_name}</div>
                <div className={styles.prices}>
                    <div className={styles.itemPrice}>{item.price}</div>
                    {item.discount.yes?<div className={styles.itemPrice2}>{item.discount.oldprice}</div>:""}
                    
                </div>
                
              </div>
            );
          })}
        </div>

        <Pagenation postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate}/>
      
      </div>

      
    </div>
  );
}
