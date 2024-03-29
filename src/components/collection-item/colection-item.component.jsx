import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import "./colection-item.styles.scss";

const CollectionItem = ({  item,addItem}) => {

  const {  name, price, imageUrl} = item

  return (
    <React.Fragment>
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>

        <CustomButton onClick={()=>addItem(item)} inverted>ADD TO CART</CustomButton>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
