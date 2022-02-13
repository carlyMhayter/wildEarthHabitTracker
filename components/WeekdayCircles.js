import CircleDate from './CircleDate';
import PropTypes from 'prop-types';

export default function WeekdayCircles(props) {
  const { weekDayCircleData } = props;
  return (
    <div className="weekday-circles-container">
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
