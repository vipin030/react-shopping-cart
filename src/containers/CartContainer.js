import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { getCartDetails, getCartPrice } from '../reducers';
import { closeCart } from '../action';
import Cart from '../components/Cart';

const CartContainer = ({ cart, total, dialogBoxStatus, closeCart }) => (
	<div>
	<Cart props={cart} total={total} isDialogOpen={dialogBoxStatus} close={()=>closeCart()}/>
	</div>
)

const mapStateToProps = (state) => ({
	cart: getCartDetails(state),
	total: getCartPrice(state),
	dialogBoxStatus: state.cart.dialogBoxStatus
})

export default connect(mapStateToProps, {closeCart})(CartContainer)