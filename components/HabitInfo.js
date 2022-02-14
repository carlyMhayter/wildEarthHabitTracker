import PropTypes from 'prop-types';
import styles from '../styles/component-styles/HabitInfo.module.scss';

export default function HabitInfo({ habitInfo }) {
  return (
    <div className={styles.container}>
      {habitInfo.map((item) => (
        <div key={item.left} className={styles.text}>
          <p>{item.left}</p>
          <p className={styles.right}>{item.right}</p>
        </div>
      ))}
    </div>
  );
}

HabitInfo.propTypes = {
  habitInfo: PropTypes.array.isRequired,
};
