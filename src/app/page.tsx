import styles from "./page.module.css";
import Service from "@/components/Service/Service";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Теперь услуги дилерского центра Вы можете получить онлайн!</h1>
      </div>
      <Service />
    </main>
  );
}
