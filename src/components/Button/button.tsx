import React from "react";
import styles from "./button.module.css";

const Button = ({
  Icon,
  style,
  text
}: {
  Icon: React.ReactNode;
  style:Object;
  text:string
}) => {
  return (
    <>
      <div className={styles.buttonContainer} style={style}>
       { Icon  }
        <div >{text}</div>
      </div>
    </>
  );
};

export default Button;
