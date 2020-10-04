import React from "react";

import Select from "@material-ui/core/Select";

import FormControl from "@material-ui/core/FormControl";

import PropTypes from "prop-types";

const DropDown = (props) => {
  const { disabled, value, noFullWidth, onChange, label, options, rootStyle, name } = props;

  return (
    <>
      <FormControl fullWidth={!noFullWidth} variant="outlined" style={rootStyle || {}}>
        <Select style={{ backgroundColor: "#fff" }} name={name || "select"} disabled={disabled} native value={value} onChange={onChange} label={label}>
          <option aria-label="None" value="">
            {`Choose ${name}`}
          </option>
          {options && options.length ? options.map((option) => <option value={option}>{option}</option>) : null}
        </Select>
      </FormControl>
    </>
  );
};

DropDown.defaultProps = {
  label: "Select",
  options: [],
  disabled: false,
  name: "select",
  onChange: () => {},
};

DropDown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  noFullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  rootStyle: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default DropDown;
