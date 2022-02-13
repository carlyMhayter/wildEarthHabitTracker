const habit = { text: 'Do yoga', count: 0, goal: 1 };

export default function HabitModule() {
  return (
    <div className="habit-module-container">
      <div className="habit-module-text-container">
        <p> {habit.text}</p>
        <p> {`TODAY: ${habit.count}/ ${habit.goal}  `}</p>
      </div>
      <div className="habit-module-icon-container">
        <button className="habit-module-add-button" type="button">
          +
        </button>
      </div>
    </div>
  );
}
