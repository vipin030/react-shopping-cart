import React from 'react';

const ProductDetails = ({props, addToCart}) => (
	<div>
	<div className="product-details-image">
	<img src={require('../images/'+props.image)} />
	</div>
	<div className="product-description">
	<b>{props.title}</b>
	<br/>
	Price: {props.price}
	<br/><br/><br/>
	<button className="btn btn-default" onClick={addToCart} disabled={props.inventory>0 ? '' : 'disabled'}>Add to Cart</button>
	</div>
	</div>
)

export default ProductDetails