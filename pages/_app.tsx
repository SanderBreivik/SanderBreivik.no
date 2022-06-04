import "../styles/globals.scss";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
  ReactGA.initialize("G-J2FKZSW4WH");
  ReactGA.send("pageview");
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KSF7MRH" });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
