import React from "react";
import styles from "./button.module.css";

const Button = ({
  Icon,
  backgroundColor,
  textColor,
  text
}: {
  Icon: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  text:string
}) => {
  return (
    <>
      <div className={styles.buttonContainer} style={{backgroundColor:backgroundColor,color:textColor}}>
       { Icon  }
        <div >{text}</div>
      </div>
    </>
  );
};

export default Button;
