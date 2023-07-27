import style from"../MainApp/MainApp.module.css";
import React, { useState } from 'react';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
// import boostrap_icons
import { Cart3 } from 'react-bootstrap-icons'; 
// import images
import logo from '../images/MSPLogo.svg';
import image1 from "../images/gloves.jpg";
import image2 from "../images/camera.jpg";
import image3 from "../images/t-shirts.jpg";
import image4 from "../images/pants.jpg";
import image5 from "../images/dress.jpg";
import image6 from "../images/shoes.jpg";
import image7 from "../images/bag.jpg";
import image8 from "../images/hat.jpg";
import image9 from "../images/sunglasses.jpg";
import image10 from "../images/lamp.jpg";
import image11 from "../images/towel.jpg";
import image12 from "../images/chairs.jpg";
import image13 from "../images/cushion.jpg";
import image14 from "../images/coffeeCups.jpg";
import image15 from "../images/curtain.jpg";

function MainApp() {
// useState 
  const[product,setProduct] =useState([
    { image: image1, name: "Gloves", oldPrice: 50, offer: 10 },
    { image: image2, name: "Camera", oldPrice: 650, offer: 40 },
    { image: image3, name: "T-Shirts", oldPrice: 1000, offer: 30 },
    { image: image4, name: "Pants", oldPrice: 850, offer: 18 },
    { image: image5, name: "Dress", oldPrice: 680, offer: 44 },
    { image: image6, name: "Shoes", oldPrice: 600, offer: 13 },
    { image: image7, name: "Bag", oldPrice: 300, offer: 5 },
    { image: image8, name: "Hat", oldPrice: 70, offer: 8 },
    { image: image9, name: "Sunglasses", oldPrice: 920, offer: 14 },
    { image: image10, name: "Lamp", oldPrice: 850, offer: 46 },
    { image: image11, name: "Towel", oldPrice: 400, offer: 30 },
    { image: image12, name: "Chairs", oldPrice: 1000, offer: 33 },
    { image: image13, name: "Cushion", oldPrice: 550, offer: 26 },
    { image: image14, name: "CoffeeCups", oldPrice: 140, offer: 28 },
    { image: image15, name: "Curtain", oldPrice: 390, offer: 42 },
  ]);
  const[cart,setCart] =useState([]);
  const [total, setTotal] = useState(0);

// ADD TO CART FUNCTION
  const addToCart=(event,i)=>{
    //update cart
      setCart([...cart,product[i]]);
    //update total price
    const {oldPrice,offer} =product[i];
    let nPrice=(oldPrice-(oldPrice*(offer/100)));
    setTotal(total + nPrice);
    //update products
    setProduct(product.filter((product,idx)=>idx!==i));
  }
// REMOVE FROM CART FUNCTION
  const deleteProduct =(even,deletedi)=>{
     //update products
     setProduct([cart[deletedi],...product]);
     //update total price
     const {oldPrice,offer} =cart[deletedi];
     let nPrice=(oldPrice-(oldPrice*(offer/100)));
     setTotal(total - nPrice);
     //update cart
     setCart(cart.filter((product,idx)=>idx!==deletedi));
    }
 
  return (
    <>
    <div className={style.MainApp}>
       {/* MainApp Header */}
       <header>
            <img src={logo} className={style.logo} alt="logo" />
            <h1 className={style.headerTitle}>
              MSP E-COMMERCE
            </h1>
        </header>
             {/* ALL PRODUCTS SECTION */}
            <section className={style.allProductSection}>
                {/* ALL PRODUCTS TITLE */}
                <div className={style.allProductTitle}>
                    <p>{product.length}</p>
                  <h1>TOP HOME PICKS</h1>
                </div>
                {/* ALL PRODUCTS */}
                  <Product product={product} fun={addToCart}/>
            </section>
             {/* CART SECTION */}
            <section className={style.cartProductsSection} >
            <div className={style.icon}>
              <Cart3 className={style.cartIcon}/>
              <p className={style.numOfCartProducts}>{cart.length}</p>
            </div>
               {/* CART PRODUCTS */}
              <Cart cart={cart} fun={deleteProduct}/>
              {/* TOTAL PRICE */}
            <div className={style.total}>
                        <h1>TOTAL PRICE:</h1>
                        <span>
                          <sub>EGP</sub>
                          <p>{total}</p>
                        </span>
                    </div>
            </section>
    </div>
    </>
  );
}
export default MainApp;