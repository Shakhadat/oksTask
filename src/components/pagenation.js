import React from "react";
import './pagenation.css'
import arrow from '../assets/img/icons/arrow.png'

const Pagenation =({postsPerPage, totalPosts, paginate})=>{
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
            pageNumbers.push(i);
    }
    return(
        <div>
                <ul className="pagenation">
                    {pageNumbers.map(number=>{
                        return(
                            <li key={number} className="page-item">
                            <a onClick={()=>paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                        );
                        
                        })}
                         <li className="page-item">
                            <a  href="!#" className="page-link">
                               <img src={arrow} alt="arr" />
                            </a>
                        </li>
                </ul>
        </div>
    );
}

export default Pagenation;