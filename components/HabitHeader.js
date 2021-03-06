import Link from 'next/link';
import styles from '../styles/component-styles/HabitHeader.module.scss';

export default function HabitHeader() {
  const habitName = 'Yoga';
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={`${styles.backtext} ${styles.sub}`}>Back</a>
      </Link>
      <div className={styles.title}>{habitName} Habit</div>
    </div>
  );
}
