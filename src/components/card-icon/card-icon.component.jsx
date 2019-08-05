import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import {selectCartItemsCount} from "./../../redux/cart/cart.selector";
import { createStructuredSelector} from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./card-icon.styles.scss";

const CartIcon = ({ toggleCartHidden,itemCount }) => {
  return (
    <React.Fragment>
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
