import WeekdayCircles from "../components/WeekdayCircles";
import weekDayCircleData, { createdHabits } from "../utils/data";
import PageComponent from "../components/PageComponent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <PageComponent footer={<Footer />}>
      <div className="homepage-content">
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />
        <div className="no-created-habits-text">
          You have not set any habits yet.
        </div>
      </div>
    </PageComponent>
  );
}
