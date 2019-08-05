import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => {
  return (
    <React.Fragment>
      <div  className={`${size} menu-all`} onClick={()=> history.push(`${linkUrl}`)}>
      <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(MenuItem);
