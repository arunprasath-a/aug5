import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import {selectDirectorySections} from "./../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";

import "./directory.styles.scss";

const Diectory = ({sections}) => {
  return (
    <React.Fragment>
      <div className="menu-container">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </React.Fragment>
  );
};

 const mapStateToProps = createStructuredSelector({
   sections:selectDirectorySections
 })

export default connect(mapStateToProps)(Diectory);
