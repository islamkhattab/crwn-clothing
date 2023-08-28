import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ItemsCount,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { IsCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleCartIconClick = (event) => setIsCartOpen(!IsCartOpen);

  return (
    <CartIconContainer onClick={handleCartIconClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemsCount>{cartCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
