import PageComponent from '../components/PageComponent';
import NextFooter from '../components/NextFooter';
import HabitHeader from '../components/HabitHeader';
import SelectBubbles from '../components/SelectBubbles';
import HabitCount from '../components/HabitCount';
import HabitInfo from '../components/HabitInfo';
import styles from '../styles/page5.module.scss';
import PropTypes from 'prop-types';

export default function Page5({ habitsList, updateHabits }) {
  const daysWeek = [
    { time: 'Daily', selected: true },
    { time: 'Weekly', selected: false },
    { time: 'Monthly', selected: false },
  ];

  const timeOfDay = [
    { time: 'Anytime', selected: true },
    { time: 'Morning', selected: false },
    { time: 'Afternoon', selected: false },
    { time: 'Evening', selected: false },
  ];

  const habitInfo = [
    { left: 'Start Date', right: 'May 28' },
    { left: 'End Date', right: 'None' },
    { left: 'Reminders', right: '5:00 PM' },
  ];

  return (
    <PageComponent
      header={<HabitHeader />}
      footer={
        <NextFooter habitsList={habitsList} updateHabits={updateHabits} />
      }
    >
      <div className={styles.content}>
        <SelectBubbles labelName="Goal Period" bubbles={daysWeek} />
        <HabitCount />
        <SelectBubbles labelName="Time of Day" bubbles={timeOfDay} />
        <HabitInfo habitInfo={habitInfo} />
        <div className={styles.inputcontainer}>
          <label htmlFor="motivation-input" className={styles.label}>
            Write something to motivate yourself:
          </label>
          <textarea id="motivation-input" className={styles.input} />
        </div>
      </div>
    </PageComponent>
  );
}

Page5.propTypes = {
  habitsList: PropTypes.array.isRequired,
  updateHabits: PropTypes.func.isRequired,
};
