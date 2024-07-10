import styles from "./Styles/page.module.css";
import style from "./Styles/home.module.css"
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <div className={style.imagecontainer}>
          <img className={style.image} src='./main.png' alt="College Picture" />
        </div>
      </div>
    </main>
  );
}
