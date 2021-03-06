import React from 'react';

    const CartItem = ( props ) => {

        const {price, title, qty} = props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}/>
                </div>

            <div className="right-block">
                <div>{title}</div>
                <div>{price}</div>
                <div>{qty}</div>
                <div className="cart-item-action">
                    {/* Button */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                        onClick = {() => onIncreaseQuantity(product)}
                        />
                    
                    <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        onClick = {() => onDecreaseQuantity(product)}
                        />
                    
                    <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://t3.ftcdn.net/jpg/02/58/95/14/240_F_258951445_Md7JDFw3Qj4LPTorWUYdImTzS49fSnOf.jpg" 
                        onClick = {() => onDeleteProduct(product.id)}
                        />
                </div>
            </div>
            </div>
        );
    }

const styles = {
    image : {
        height : 110,
        weight : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;