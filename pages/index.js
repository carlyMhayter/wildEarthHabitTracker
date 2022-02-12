import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import WeekdayCircles from "../components/WeekdayCircles";
import weekDayCircleData, { createdHabits } from "../utils/data";
import Footer from "../components/Footer";

export default function Home() {
  console.log(weekDayCircleData);

  return (
    <>
      <div className="page-content">
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />{" "}
        {createdHabits.length === 0 && (
          <p className="no-created-habits-text">
            You have not set any habits yet.
          </p>
        )}
      </div>
      <Footer nextButton={false} />
    </>
  );
}
