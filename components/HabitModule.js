import React from "react";
import Image from "next/image";

const habit = { text: "Do yoga", count: 0, goal: 1 };

export default function HabitModule() {
  return (
    <div className="habit-module-container">
      <div className="habit-module-text-container">
        <p> {habit.text}</p>
        <p> {`TODAY: ${habit.count}/ ${habit.goal}  `}</p>
      </div>
      <div className="habit-module-icon-container">
        <div className="habit-module-icon-container-img">
          <Image src="/plus.svg" alt="house-icon" layout="fill" />
        </div>
      </div>
    </div>
  );
}
