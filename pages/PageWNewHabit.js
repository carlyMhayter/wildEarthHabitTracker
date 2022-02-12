import WeekdayCircles from "../components/WeekdayCircles";
import weekDayCircleData, { createdHabits } from "../utils/data";
import Footer from "../components/Footer";
import HabitModule from "../components/HabitModule";

export default function PageWNewHabit() {
  createdHabits.push({ habitText: "Do yoga", habitComplete: 0, habitTotal: 1 });

  return (
    <>
      <div className="page-content">
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />{" "}
        {createdHabits.length === 0 && (
          <p className="no-created-habits-text">
            You have not set any habits yet.
          </p>
        )}
        {createdHabits.length != 0 &&
          createdHabits.map((habit) => {
            <HabitModule
              habitText={habit.habitText}
              habitComplete={habit.habitComplete}
              habitTotal={habit.habitTotal}
            />;
          })}
      </div>
      <Footer nextButton={false} />
    </>
  );
}
