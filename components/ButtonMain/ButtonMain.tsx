import React from "react";
import styles from "./ButtonMain.module.css";

interface ButtonMainProps {
  buttonText: string;
}

const ButtonMain: React.FC<ButtonMainProps> = ({ buttonText }) => {
  return <button className={styles.button}>{buttonText}</button>;
};

export default ButtonMain;
