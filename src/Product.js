import React from 'react'
import ItemDescription from './ItemDescription'
import './Product.scss'

function Product({name, description, price}) {
    return (
        <div className="product">
            <ItemDescription name={name} description={description}/>
            <h2 className="error">An error occured</h2>
            <h3 className="price">${price}</h3>            
        </div>
    )
}

export default Product
