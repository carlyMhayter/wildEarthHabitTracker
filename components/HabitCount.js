import styles from '../styles/component-styles/HabitCount.module.scss';

export default function HabitCount() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>How many times per day?</div>
      <div className={styles.countcontainer}>
        <button className={styles.button} type="button">
          -
        </button>
        <button className={styles.button} type="button">
          <div className={styles.holder}>0</div>
        </button>
        <button className={styles.button} type="button">
          +
        </button>
      </div>
    </div>
  );
}
