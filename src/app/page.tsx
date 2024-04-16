import Link from "next/link";
import styles from "./app.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Prueba de Concepto</h1>
      <Link href="/home" passHref>
        <div className={styles.button}>Comenzar</div>
      </Link>
    </div>
  );
}
