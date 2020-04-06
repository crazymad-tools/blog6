import React from "react";
import "./index.scss";

export interface ButtonGroupProps {}

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  return <span className="button-group">{props.children}</span>;
};

export default ButtonGroup;
