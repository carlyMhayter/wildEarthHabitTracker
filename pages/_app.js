import '../styles/globals.css';
import '../styles/component-styles/NavBar.scss';
import '../styles/component-styles/CircleDate.scss';
import '../styles/component-styles/WeekdayCircles.scss';
import '../styles/component-styles/Footer.scss';
import '../styles/component-styles/PageComponent.scss';
import '../styles/component-styles/HabitModule.scss';
import '../styles/homePage.scss';
import '../styles/habitCounter.scss';
import '../styles/component-styles/NextFooter.scss';
import '../styles/component-styles/HabitHeader.scss';
import '../styles/component-styles/SelectBubbles.scss';
import '../styles/component-styles/HabitCount.scss';
import '../styles/component-styles/HabitInfo.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-content-global">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};
