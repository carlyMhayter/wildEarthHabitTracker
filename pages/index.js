import WeekdayCircles from "../components/WeekdayCircles";
import weekDayCircleData, { createdHabits } from "../utils/data";
import PageComponent from "../components/PageComponent";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <PageComponent header={<NavBar />} footer={<Footer />}>
      <div className="homepage-content">
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />
        <div className="no-created-habits-text">
          You have not set any habits yet.
        </div>
      </div>
    </PageComponent>
  );
}
