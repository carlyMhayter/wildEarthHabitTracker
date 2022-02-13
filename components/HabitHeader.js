export default function HabitHeader() {
  const habitName = "Yoga";
  return (
    <>
      <div className="navbar-container">
        <div className="habit-header-back-text">Back</div>
        {habitName} Habit
        <div className="habit-header-empty"></div>
      </div>
    </>
  );
}
