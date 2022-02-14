import WeekdayCircles from '../components/WeekdayCircles';
import weekDayCircleData from '../utils/data';
import PageComponent from '../components/PageComponent';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from '../styles/index.module.scss';
import HabitModule from '../components/HabitModule';
import PropTypes from 'prop-types';

export default function Home({ habitsList }) {
  return (
    <PageComponent header={<NavBar />} footer={<Footer />}>
      <div className={styles.content}>
        <WeekdayCircles weekDayCircleData={weekDayCircleData} />
        {habitsList.length === 0 && (
          <div className={styles.text}>You have not set any habits yet.</div>
        )}
        {habitsList.length !== 0 &&
          habitsList.map((habit) => (
            <HabitModule habit={habit} key={habit.text} />
          ))}
      </div>
    </PageComponent>
  );
}

Home.propTypes = {
  habitsList: PropTypes.array.isRequired,
};
