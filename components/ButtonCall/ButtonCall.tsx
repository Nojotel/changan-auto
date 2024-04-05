import React from "react";
import styles from "./ButtonCall.module.css";

interface ButtonCallProps {
  buttonText: string;
}

const ButtonCall: React.FC<ButtonCallProps> = ({ buttonText }) => {
  return <button className={styles.button}>{buttonText}</button>;
};

export default ButtonCall;
