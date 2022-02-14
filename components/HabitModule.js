import styles from '../styles/component-styles/HabitModule.module.scss';
import PropTypes from 'prop-types';

export default function HabitModule({ habit }) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p> {habit.text}</p>
        <p> {`TODAY: ${habit.count}/ ${habit.goal}  `}</p>
      </div>
      <button className={styles.button} type="button">
        +
      </button>
    </div>
  );
}

HabitModule.propTypes = {
  habit: PropTypes.object.isRequired,
};
