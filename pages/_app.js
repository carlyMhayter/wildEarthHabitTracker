import "../styles/globals.css";
import "../styles/component-styles/NavBar.scss";
import "../styles/component-styles/CircleDate.scss";
import "../styles/component-styles/WeekdayCircles.scss";
import "../styles/component-styles/Footer.scss";
import "../styles/component-styles/PageComponent.scss";
import "../styles/component-styles/HabitModule.scss";
import "../styles/homePage.scss";

import NavBar from "../components/NavBar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const { footerHome, setFooterHome } = useState(true);

  return (
    <div className="page-content-global">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
