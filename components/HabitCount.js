export default function HabitCount() {
  return (
    <div className="habit-counter-container">
      <div className="habit-counter-text">How many times per day?</div>
      <div className="habit-count-container">
        <button className="habit-counter-button" type="button">
          +
        </button>
        <button className="habit-counter-button" type="button">
          <div className="habit-count-holder">0</div>
        </button>
        <button className="habit-counter-button" type="button">
          -
        </button>
      </div>
    </div>
  );
}
