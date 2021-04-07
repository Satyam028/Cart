import React from 'react';

class CartItem extends React.Component {
    render() {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}/>
                </div>

            <div className="right-block">
                <div>Phone</div>
                <div>Rs 999</div>
                <div>Qty : 1</div>
                <div className="cart-item-action">
                    {/* Button */}
                </div>
            </div>
            </div>
        );
    }
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