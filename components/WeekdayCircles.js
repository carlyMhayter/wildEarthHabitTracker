import CircleDate from "/components/CircleDate";

export default function WeekdayCircles(props) {
  const { weekDayCircleData } = props;
  return (
    <div className="weekday-circles-container">
      {weekDayCircleData.map((date) => {
        console.log(date.day);
        return (
          <CircleDate
            key={date.day}
            day={date.day}
            num={date.num}
            currentDate={date.currentDate}
          />
        );
      })}
    </div>
  );
}
