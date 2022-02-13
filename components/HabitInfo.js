import PropTypes from 'prop-types';

export default function HabitInfo({ habitInfo }) {
  return (
    <div className="habit-counter-info-container">
      {habitInfo.map((item) => (
        <div className="habit-counter-info-container-text">
          <p className="left">{item.left}</p>
          <p className="right">{item.right}</p>
        </div>
      ))}
    </div>
  );
}

HabitInfo.propTypes = {
  habitInfo: PropTypes.array.isRequired,
};
