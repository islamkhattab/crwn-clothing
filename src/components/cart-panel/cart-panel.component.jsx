import Button from '../button/button.component';

import './cart-panel.styles.scss'

const CartPanel = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartPanel;
