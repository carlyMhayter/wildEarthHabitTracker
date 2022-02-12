import "../styles/globals.css";
import "../styles/component-styles/NavBar.scss";
import "../styles/component-styles/CircleDate.scss";
import "../styles/component-styles/WeekdayCircles.scss";
import "../styles/component-styles/Footer.scss";
import "../styles/homePage.scss";

import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
