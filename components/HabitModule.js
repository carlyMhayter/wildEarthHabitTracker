import React from "react";

export default function HabitModule(props) {
  const { habitText, habitComplete, habitTotal } = props;

  return (
    <div>
      {habitTotal}
      {habitComplete}
      {habitText}
    </div>
  );
}
