import React from "react";

export default function HabitInfo({ habitInfo }) {
  return (
    <div className="habit-counter-info-container">
      {habitInfo.map((item) => {
        return (
          <div className="habit-counter-info-container-text">
            <p className="left">{item.left}</p>
            <p className="right">{item.right}</p>
          </div>
        );
      })}
    </div>
  );
}
