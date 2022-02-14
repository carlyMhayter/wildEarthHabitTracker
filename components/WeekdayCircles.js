import CircleDate from './CircleDate';
import PropTypes from 'prop-types';
import styles from '../styles/component-styles/WeekdayCircles.module.scss';

export default function WeekdayCircles({ weekDayCircleData }) {
  return (
    <div className={styles.container}>
      {weekDayCircleData.map((date) => (
        <CircleDate
          key={date.day}
          day={date.day}
          num={date.num}
          currentDate={date.currentDate}
        />
      ))}
    </div>
  );
}

WeekdayCircles.propTypes = {
  weekDayCircleData: PropTypes.array.isRequired,
};
