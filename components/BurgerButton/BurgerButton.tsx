import React from "react";
import styles from "./BurgerButton.module.css";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import { useViewport } from "@/hooks/useViewport";

interface BurgerButtonProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  pathname: string;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, setOpen, pathname }) => {
  const { width } = useViewport();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {width && width < 1350 && (
        <div className={styles.burgerButton} onClick={handleClick}>
          <div className={isOpen ? styles.open : ""}></div>
          <div className={isOpen ? styles.open : ""}></div>
          <div className={isOpen ? styles.open : ""}></div>
        </div>
      )}
      {isOpen && <BurgerMenu isOpen={isOpen} setOpen={setOpen} pathname={pathname} />}
    </>
  );
};

export default BurgerButton;
