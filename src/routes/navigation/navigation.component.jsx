import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrectUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrectUser(null);
  };

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
            <span className="nav-item" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-item" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
