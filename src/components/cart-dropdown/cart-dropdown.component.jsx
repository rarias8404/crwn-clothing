import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";

import { CartDropDownContainer, CartItemsContainer, EmptyMessage, CartDropdownButton } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleClick = () => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {
          cartItems.length ? (
            cartItems.map(cartItem =>
              <CartItem key={cartItem.id} item={cartItem} />
            )) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
      </CartItemsContainer>
      <CartDropdownButton onClick={handleClick}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropDownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
