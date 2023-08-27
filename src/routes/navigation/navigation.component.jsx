import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartPanel from "../../components/cart-panel/cart-panel.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { IsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-item" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-item" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        {IsCartOpen && <CartPanel />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
