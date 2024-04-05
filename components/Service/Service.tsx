import React from "react";
import Image from "next/image";
import ButtonMain from "@/components/ButtonMain/ButtonMain";
import styles from "./Service.module.css";
import DLYKASKADA from "@/public/DLYKASKADA.png";
import MERCEDES from "@/public/MERCEDES.png";
import kaskadDry from "@/public/kaskad-dry.png";
import Mockup from "@/public/Mockup.png";

const Service = () => {
  return (
    <section className={styles.services}>
      <div className={`${styles.service} ${styles["service-large1"]}`} style={{ gridArea: "large1" }}>
        <h2 className={styles.title}>
          Диагностика автомобиля
          <br /> перед покупкой
        </h2>
        <p className={styles.text}>
          Расскажем о всех скрытых дефектах <br />
          автомобиля с пробегом
        </p>
        <ButtonMain buttonText="Записаться" />
        <div className={styles["img-container"]}>
          <Image className={styles.img} src={DLYKASKADA} alt="Машина" width={400} height={192} />
        </div>
      </div>

      <div className={`${styles.service} ${styles["service-small1"]}`} style={{ gridArea: "small1" }}>
        <h2 className={styles.title}>
          Онлайн показ автомобиля по <br />
          видеосвязи
        </h2>
        <p className={styles.text}>
          Проведем онлайн-показ интересующего <br />
          автомобиля в удобное для Вас время
        </p>
        <ButtonMain buttonText="Оставить заявку" />
        <div className={styles["img-container"]}>
          <Image className={`${styles.img} ${styles.imgSpecial1}`} src={kaskadDry} alt="Машина" width={231} height={130} />
        </div>
      </div>

      <div className={`${styles.service} ${styles["service-small2"]}`} style={{ gridArea: "small2" }}>
        <h2 className={styles.title}>Онлайн бронирование</h2>
        <p className={styles.text}>
          Забронируйте понравившийся <br /> автомобиль без визита в дилерский центр
        </p>
        <ButtonMain buttonText="Забронировать" />
        <div className={styles["img-container"]}>
          <Image className={`${styles.img} ${styles.imgSpecial}`} src={Mockup} alt="Телефон" />
        </div>
      </div>

      <div className={`${styles.service} ${styles["service-large2"]}`} style={{ gridArea: "large2" }}>
        <h2 className={styles.title}>
          Онлайн оценка автомобиля с <br />
          пробегом
        </h2>
        <p className={styles.text}>
          Узнайте предварительную стоимость <br /> автомобиля за 1 мин, указав его параметры
        </p>
        <ButtonMain buttonText="Оценить" />
        <div className={styles["img-container"]}>
          <Image className={styles.img} src={MERCEDES} alt="Машина" width={347} height={165} />
        </div>
      </div>
    </section>
  );
};

export default Service;
