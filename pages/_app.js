import '../styles/globals.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [habitsList, updateHabits] = useState([]);
  return (
    <div className="page-content-global">
      <Component
        habitsList={habitsList}
        updateHabits={updateHabits}
        {...pageProps}
      />
    </div>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};
