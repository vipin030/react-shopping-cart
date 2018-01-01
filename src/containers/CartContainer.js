import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { getCartDetails, getCartPrice } from '../reducers';
import { closeCart, removeFromCart } from '../action';
import Cart from '../components/Cart';

const CartContainer = ({ cart, total, dialogBoxStatus, closeCart, removeFromCart }) => (
	<div>
	<Cart props={cart} total={total} isDialogOpen={dialogBoxStatus} close={()=>closeCart()} 
	removeFromCart={removeFromCart}/>
	</div>
)

const mapStateToProps = (state) => ({
	cart: getCartDetails(state),
	total: getCartPrice(state),
	dialogBoxStatus: state.cart.dialogBoxStatus
})

export default connect(mapStateToProps, { closeCart, removeFromCart })(CartContainer)