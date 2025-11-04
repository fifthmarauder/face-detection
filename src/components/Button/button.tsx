import React from "react";
import styles from "./button.module.css";

const Button = ({
  style,
  children,
  onClick,
}: {
  style: object;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <>
      <div className={styles.buttonContainer} style={style} onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default Button;
