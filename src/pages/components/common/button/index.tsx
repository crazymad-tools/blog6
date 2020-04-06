import React, { useEffect, useState, useRef } from "react";
import "./index.scss";
import Wave from "../wave";
import ButtonGroup, { ButtonGroupProps } from "./group";

interface Props {
  type?: "primary" | "normal" | "" | string;
  size?: "md" | "lg" | "sm" | string;
  width?: string;
  full?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: any;
}

type IButton<P> = React.FC<P> & {
  ButtonGroup: React.FC<ButtonGroupProps>;
};

const Button: IButton<Props> = props => {
  function click(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.onClick && props.onClick(e);
  }
  
  return (
    <Wave>
      <button
        onClick={click}
        className={`button ${props.type} ${props.size}`}
        style={Object.assign(props.style || {}, {
          width: props.width
        })}
        data-full={props.full}>
        {props.children}
      </button>
    </Wave>
  );
};

Button.ButtonGroup = ButtonGroup;

Button.defaultProps = {
  type: "normal",
  size: "md",
  full: false
};

export default Button;
