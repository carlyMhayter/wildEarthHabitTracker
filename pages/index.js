import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import WeekdayCircles from "../components/WeekdayCircles";
import weekDayCircleData from "../utils/data";

export default function Home() {
  console.log(weekDayCircleData);
  return (
    <div>
      <WeekdayCircles weekDayCircleData={weekDayCircleData} />{" "}
    </div>
  );
}
