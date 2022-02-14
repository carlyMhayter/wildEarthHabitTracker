import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/component-styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.buttons}>
        <Link href="/">
          <a className={`${styles.img} ${styles.selected}`}>
            <Image
              src="/home.svg"
              alt="house-icon"
              width="30px"
              height="30px"
            />
          </a>
        </Link>
        <Link href="/Page5">
          <a className={`${styles.img} ${styles.add}`}>
            <Image src="/addButton.svg" alt="add-icon" layout="fill" />
          </a>
        </Link>
        <div className={styles.img}>
          <Image src="/stats.svg" alt="stats-icon" width="30px" height="30px" />
        </div>
      </div>
    </footer>
  );
}
