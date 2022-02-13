import Link from 'next/link';

export default function HabitHeader() {
  const habitName = 'Yoga';
  return (
    <div className="navbar-container">
      <Link href="/">
        <button type="button" className="habit-header-back-text">
          Back
        </button>
      </Link>
      {habitName} Habit
      <div className="habit-header-empty" />
    </div>
  );
}
