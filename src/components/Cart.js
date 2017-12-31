import React from 'react';

const Cart = ({props, total, isDialogOpen, close}) => {
	const data = props.length > 0 ? (	
		<div className="cart">
		<div onClick={close} className="close-icon"></div>
		<div className="cart-container">
		{props.map((data)=>(
		
		<div className="cart-items" key={data.id}>{data.title}&nbsp;&nbsp;  {data.price}&nbsp;&nbsp; {data.inventory}&nbsp;Item</div>
		))
		}
		</div>
		<div className="cart-total">Total: &nbsp; {total}{isDialogOpen}</div>
		</div>): (<div>Your cart is empty</div>)
	
		return (
		<div>
		{isDialogOpen && (<div>{data}</div>)}
		</div>
		)
}

export default Cart