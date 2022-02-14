import PropTypes from 'prop-types';
import styles from '../styles/component-styles/CircleDate.module.scss';

export default function CircleDate({ day, num, currentDate }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.circle}  ${currentDate ? styles.selected : ''}`}
      />
      <div className={styles.day}>{day}</div>
      <div className={styles.number}>{num}</div>
    </div>
  );
}

CircleDate.propTypes = {
  day: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  currentDate: PropTypes.bool.isRequired,
};
