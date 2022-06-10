import React, {useState} from "react";
import styles from './index.module.sass';
import my1 from '../../assets/img/01.png';
import my2 from '../../assets/img/02.png';
import my3 from '../../assets/img/03.png';
import my4 from '../../assets/img/04.png';
import arr2 from '../../assets/img/icons/arrow2.png';

const BLOGS=[
    {
        id: Math.random().toString(),
        title: 'Cactus & Succulent Care Tips',
        image: my1,
        date: '12',
        minute: '6',
        smalltext: 'Cacti are succulents are easy care plants for any home or patio. ',
        wholetext: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur non quas repudiandae deleniti, iusto aliquam mollitia aliquid odit nemo, enim delectus aut repellat totam at voluptatum! Nulla voluptatum hic alias.',
        isShow: false
    },
    {
        id: Math.random().toString(),
        title: 'Top 10 Succulents for Your Home',
        image: my2,
        date: '13',
        minute: '2',
        smalltext: 'Best in hanging baskets. Prefers medium to high light. ',
        wholetext: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur non quas repudiandae deleniti, iusto aliquam mollitia aliquid odit nemo, enim delectus aut repellat totam at voluptatum! Nulla voluptatum hic alias.',
        isShow: false
    },
    {
        id: Math.random().toString(),
        title: 'Cactus & Succulent Care Tips',
        image: my3,
        date: '15',
        minute: '3',
        smalltext: 'Cacti are succulents are easy care plants for any home or patio. ',
        wholetext: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur non quas repudiandae deleniti, iusto aliquam mollitia aliquid odit nemo, enim delectus aut repellat totam at voluptatum! Nulla voluptatum hic alias.',
        isShow: false
    },
    {
        id: Math.random().toString(),
        title: 'Best Houseplants Room by Room ',
        image: my4,
        date: '15',
        minute: '2',
        smalltext: 'The benefits of houseplants are endless. In addition to..',
        wholetext: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur non quas repudiandae deleniti, iusto aliquam mollitia aliquid odit nemo, enim delectus aut repellat totam at voluptatum! Nulla voluptatum hic alias.',
        isShow: false
    },
]

export default function(){
    
  const [blogs, setBlogs] = useState(BLOGS);

   

    const Gettext=(id)=>{
        return (e)=>{
            e.preventDefault();
            setBlogs(prev=>{
                return prev.map(item=>{
                    if(item.id==id) {
                        return {...item, isShow:!item.isShow}
                    } 
                    return {...item};

                    
                })
            })
        }
    }
    return(
        <div className={styles.blog_container}>
            
            <h1>Our Blog Posts</h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className={styles.blog_content_box}>
                {
                    blogs.map((blog)=>{
                        return(
                            <div className={styles.blogbox}>
                                <div className={styles.img_box}><img src={blog.image} alt="11" /></div>
                                <div className={styles.blog_date}>September {blog.date}  | Read in {blog.minute} minutes</div>
                                <div className={styles.blog_tit}>{blog.title}</div>
                                <div>
                                    {
                                        blog.isShow?<div className={styles.blog_text}>{blog.wholetext}</div>:<div className={styles.blog_text}>{blog.smalltext}</div>
                                    }
                
                                    <a href="#" className={styles.readmore} onClick={Gettext(blog.id)}>{blog.isShow?"Read Less": "Read more"}<ion-icon name="arrow-forward-outline"></ion-icon> </a>
                            
                                </div>
                               </div>
                        );
                    })
                }
               
            </div>
        </div>
    );
}