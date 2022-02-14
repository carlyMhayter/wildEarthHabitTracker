import Image from 'next/image';
import styles from '../styles/component-styles/NavBar.module.scss';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src="/gear.svg" alt="gear-icon" layout="fill" />
      </div>
      Habit Tracker
      <div className={styles.img}>
        <Image src="/sliders.svg" alt="gear-icon" layout="fill" />
      </div>
    </div>
  );
}
