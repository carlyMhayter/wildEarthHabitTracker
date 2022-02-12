import WeekdayCircles from "../components/WeekdayCircles";
import weekDayCircleData, { createdHabits } from "../utils/data";
import PageComponent from "../components/PageComponent";
import Footer from "../components/Footer";
import HabitModule from "../components/HabitModule";

export default function Page8() {
  return (
    <PageComponent footer={<Footer />}>
      <div className="homepage-content">
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />
        <HabitModule />
      </div>
    </PageComponent>
  );
}
