import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => {
  return (
    <React.Fragment>
      <div>
        <button
          className={`${inverted ? "inverted" : ""} ${
            isGoogleSignIn ? "google-sign-in" : ""
          } custom-button`}
          {...otherprops}
        >
          {children}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomButton;
