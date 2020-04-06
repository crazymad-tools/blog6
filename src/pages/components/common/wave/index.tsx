import React from "react";
import "./index.scss";

export interface WaveProps {
  color?: string;
}

const Wave: React.FC<WaveProps> = props => {
  function addWave(ref: any) {
    let parent: any = ref.current;
    let event: any = window.event;
    let size = Math.max(parent.clientHeight, parent.clientWidth) * 2.5;
    let dom = document.createElement("div");

    let left = event.offsetX;
    let top = event.offsetY;
    let target = event.target;
    while (target !== ref.current) {
      top += target.offsetTop;
      left += target.offsetLeft;
      target = target.offsetParent;
    }

    dom.classList.add("wave");
    dom.style.width = `${size}px`;
    dom.style.height = `${size}px`;
    dom.style.borderRadius = `${size / 2}px`;
    dom.style.left = `${left}px`;
    dom.style.top = `${top}px`;
    dom.style.background = props.color || "rgba(0, 0, 0, 0.1)";
    
    parent.appendChild(dom);
    setTimeout(() => {
      dom.remove();
    }, 1500);
  }
  
  function clone(child: any, idx: number) {
    let ref = React.createRef();
    return React.cloneElement(child, {
      ...child.props,
      onClick: (e: any) => {
        // 代理child props中的onClick事件
        child.props.onClick && child.props.onClick(e);
        addWave(ref);
      },
      style: { ...child.props.style, position: "relative", overflow: "hidden" },
      ref: ref
    });
  }

  return <>{React.Children.map(props.children, clone)}</>;
};

Wave.defaultProps = {
  color: "rgba(0, 0, 0, 0.1)"
};

export default Wave;
