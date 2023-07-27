import React from 'react';
import st from './Cart.module.css';
function Cart({cart,fun}){
    return( 
        <>
        <div className={st.mainCart}>
            {
                cart.map(({image,name,oldPrice,offer},indx)=>(
                //CART PRODUCTS SECTION
                <div key={indx} className={st.cartProduct}>
                    <div className={st.carts}>
                        <div className={st.productImg} style={{backgroundImage:`url(${image})`}}></div>
                        <div className={st.productinfo}>
                            <h2 className={st.productTitle}> {name} </h2>
                            <div className={st.productDes}>
                                <div className={st.price}>
                                    <span className={st.newPrice}>
                                        <sub>EGP</sub>
                                        <p>{(oldPrice-(oldPrice*(offer/100))).toFixed(2)}</p>
                                    </span>
                                    <span className={st.oldPrice}>
                                        <del>{oldPrice}</del>
                                        <p className={st.offer}>{offer}% off</p>
                                    </span>
                                </div>
                                <button className={st.removeBtn} onClick={(e)=>fun(e,indx)}>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className={st.line}></div>
                </div>
            ))
            }
       </div>

        </>
    );
}
export default Cart;