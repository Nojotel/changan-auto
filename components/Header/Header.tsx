"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import location from "@/public/location.svg";
import route from "@/public/route.svg";
import time from "@/public/time.svg";
import styles from "./Header.module.css";
import ButtonCall from "@/components/ButtonCall/ButtonCall";
import { usePathname } from "next/navigation";
import BurgerButton from "@/components/BurgerButton/BurgerButton";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
          <div>
            <Image className={styles.logo} src={Logo} alt="Логотип" width={209} height={26} priority />
          </div>
        </Link>
        <ul className={`${styles.menu} ${isMenuOpen ? "" : styles.menuHidden}`}>
          <li className={styles.menuItem}>
            <Link href="/cars">
              <div className={`${styles.link} ${pathname === "/cars" ? styles.active : ""}`}>Автомобили в наличии</div>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/offers">
              <div className={`${styles.link} ${pathname === "/offers" ? styles.active : ""}`}>Спецпредложения</div>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/sell">
              <div className={`${styles.link} ${pathname === "/sell" ? styles.active : ""}`}>Продать авто</div>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/service">
              <div className={`${styles.link} ${pathname === "/service" ? styles.active : ""}`}>Сервис</div>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contacts">
              <div className={`${styles.link} ${pathname === "/contacts" ? styles.active : ""}`}>Контакты</div>
            </Link>
          </li>
        </ul>
        <ButtonCall buttonText="Заказать звонок" />
        <BurgerButton isOpen={isMenuOpen} setOpen={setIsMenuOpen} pathname={pathname} />
      </nav>
      <hr className={styles.line} />
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
    </header>
  );
};

export default Header;
