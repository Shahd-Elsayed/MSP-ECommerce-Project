import React from 'react';
import st from '../Product/Product.module.css';
function Product({product,fun}){
    return( 
        <>
             <div className={st.products}>
             {
                product.map(({image,name,oldPrice,offer},indx)=>(
                // PRODUCTS SECTION
                  <div key={indx} className={st.product}>
                  <div className={st.productImg} style={{backgroundImage:`url(${image})`}}>
                  </div>
                 <div className={st.productDes}>
                  <h2 className={st.productTitle}>{name}</h2>
                  <span className={st.productPrice}>
                    <sub>EGP</sub>
                    <p>
                    {(oldPrice-(oldPrice*(offer/100))).toFixed(2)}
                    </p>
                  </span>
                  <span className={st.productOffer}>
                    <del className={st.oldPrice}>{oldPrice}</del>
                    <p className={st.offer}>{offer}% off</p>
                    </span>
                    <button className={st.addBtn} onClick={(e)=>fun(e,indx)}>Add to Cart</button>
                  </div>
                  </div>
                  ))
                }
              </div>

        </>
    );
}
export default Product;