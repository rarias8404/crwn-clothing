import React, { memo } from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item"/>
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default memo(CartItem);
