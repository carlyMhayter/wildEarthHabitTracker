import PageComponent from '../components/PageComponent';
import NextFooter from '../components/NextFooter';
import HabitHeader from '../components/HabitHeader';
import SelectBubbles from '../components/SelectBubbles';
import HabitCount from '../components/HabitCount';
import HabitInfo from '../components/HabitInfo';

export default function habitSettings() {
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
    <PageComponent header={<HabitHeader />} footer={<NextFooter />}>
      <div className="add-habit-content">
        <SelectBubbles labelName="Goal Period" bubbles={daysWeek} />
        <HabitCount />
        <SelectBubbles labelName="Time of Day" bubbles={timeOfDay} />
        <HabitInfo habitInfo={habitInfo} />
        <div className="habit-motivation-input-container">
          Write something to motivate yourself:
          <input className="habit-add-motivation-input" />
        </div>
      </div>
    </PageComponent>
  );
}
