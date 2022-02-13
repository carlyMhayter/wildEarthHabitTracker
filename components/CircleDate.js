import PropTypes from 'prop-types';

export default function CircleDate(props) {
  const { day, num, currentDate } = props;
  return (
    <div className="circle-date-container">
      <div
        className={`circle-date-circle  ${
          currentDate ? 'circle-date-selected ' : ''
        }`}
      />
      <div className="circle-date-day">{day}</div>
      <div className="circle-date-number">{num}</div>
    </div>
  );
}

CircleDate.propTypes = {
  day: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  currentDate: PropTypes.bool.isRequired,
};
