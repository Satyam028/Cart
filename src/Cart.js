import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state ={
            products : [
                {
                    price : 99,
                    title : 'Watch',
                    qty : 1,
                    img : '',
                    id : 1
                },

                {
                    price : 999,
                    title : 'Phone',
                    qty : 10,
                    img : '',
                    id : 2
                },

                {
                    price : 9999,
                    title : 'Laptop',
                    qty : 1,
                    img : '',
                    id : 3
                }
            ]
        }
    }

    //handling increase quantity
    handleIncreaseQuantity = (product) => {
        console.log('Hey increase the product', product);
        const { products } = this.state;

        const index = products.indexOf(product);
        products[index].qty += 1;
        
        this.setState({
            // products : products
            products
        })
    }

    //handling decrease quantity
    handleDecreaseQuantity = (product) => {
        console.log('Hey decrease the product', product);
        const { products } = this.state;

        const index = products.indexOf(product);

        if(products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;
        
        this.setState({
            // products : products
            products
        })
    }

    //handling Delete item from the cart
    handleDeleteProduct = (id) => {
        console.log('Hey we have successfully deleted the product', id);
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id); //[{ }]basically it provide those item id which is not in cart anymore
        
        this.setState({
            // products : products
            products : items
        })
    }

   render() {
       const { products } = this.state;

       return(
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = {product}
                            key = {product.id}
                            onIncreaseQuantity = { this.handleIncreaseQuantity }
                            onDecreaseQuantity = { this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
       );
   }
}


export default Cart;