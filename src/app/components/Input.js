import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = props => {
  const onChangeHandler = event => {
    props.onChange(event.target.value);
  };

  return (
    <div className={`col s${props.cols}`}>
      <label>
        {props.label}
        <input type="text" className="validate" onChange={onChangeHandler} />
      </label>
    </div>
  );
};

Input.defaultProps = {
  cols: 12
};

Input.propTypes = {
  cols: PropTypes.number
};

export default Input;
