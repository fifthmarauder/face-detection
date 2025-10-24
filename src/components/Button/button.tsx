import React from "react";
import styles from "./button.module.css";

const Button = ({
  Icon,
  style,
  text,
  onClick
}: {
  Icon: React.ReactNode;
  style:Object;
  text:string;
  onClick:()=>void
}) => {
  return (
    <>
      <div className={styles.buttonContainer} style={style} onClick={onClick}>
       { Icon  }
        <div >{text}</div>
      </div>
    </>
  );
};

export default Button;
