import WeekdayCircles from '../components/WeekdayCircles';
import weekDayCircleData from '../utils/data';
import PageComponent from '../components/PageComponent';
import Footer from '../components/Footer';
import HabitModule from '../components/HabitModule';
import NavBar from '../components/NavBar';
import styles from '../styles/index.module.scss';

export default function Page8() {
  return (
    <PageComponent header={<NavBar />} footer={<Footer />}>
      <div className={styles.homepage.content}>
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />
        <HabitModule />
      </div>
    </PageComponent>
  );
}
