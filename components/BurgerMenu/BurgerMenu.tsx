import React from "react";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import location from "@/public/location.svg";
import route from "@/public/route.svg";
import time from "@/public/time.svg";

interface BurgerMenuProps {
  isOpen: boolean;
  pathname: string;
  setOpen: (isOpen: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, pathname, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
      <div className={styles.menuItem}>
        <Link href="/cars">
          <div className={`${styles.link} ${pathname === "/cars" ? styles.active : ""}`} onClick={handleLinkClick}>
            Автомобили в наличии
          </div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/offers">
          <div className={`${styles.link} ${pathname === "/offers" ? styles.active : ""}`} onClick={handleLinkClick}>
            Спецпредложения
          </div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/sell">
          <div className={`${styles.link} ${pathname === "/sell" ? styles.active : ""}`} onClick={handleLinkClick}>
            Продать авто
          </div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/service">
          <div className={`${styles.link} ${pathname === "/service" ? styles.active : ""}`} onClick={handleLinkClick}>
            Сервис
          </div>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/contacts">
          <div className={`${styles.link} ${pathname === "/contacts" ? styles.active : ""}`} onClick={handleLinkClick}>
            Контакты
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.text}>
            <Image className={styles.icon} width={16} height={16} src={location} alt="Где мы находимся" /> Олимпийский просп., 5, стр. 1, Москва
          </div>
          <div className={styles.text}>
            <Image className={styles.icon} width={16} height={16} src={route} alt="Проложить маршрут" /> Проложить маршрут
          </div>
        </div>
        <div className={styles.text}>
          <Image className={styles.icon} width={16} height={16} src={time} alt="Время работы" /> 9:00 - 21:00 (ежедневно)
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
