import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Pricing from "pages/Pricing";
import Contactsales from "pages/ContactSales";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Nav from "components/Nav";
import TrackPage from "pages/TrackPage";

const App = () => {
  const { i18n } = useTranslation();
  // Redirect to Right Path if no Lang params
  const currentDir = i18n.language === "ar" ? "rtl" : "ltr";
  const oldRoute = window.location.pathname.includes(i18n.language)
    ? window.location.pathname.split("/").splice(2).join("/")
    : window.location.pathname;
  const langParam = window.location.pathname.split("/").splice(1)[0];

  // let l = useParams();
  // console.log("===>", l);
  useEffect(() => {
    document.documentElement.dir = currentDir;
    document.documentElement.lang = i18n.language;

    if (langParam === "ar" && i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else if (langParam === "en" && i18n.language === "ar") {
      i18n.changeLanguage("en");
    } else if (!window.location.pathname.includes(i18n.language)) {
      //  If There is No Lang at All =>
      console.log("first");
      if (oldRoute !== "" && oldRoute !== "/") {
        window.location.href = `/${i18n.language}${oldRoute}`;
      } else if (oldRoute === "/") {
        window.location.href = `/${i18n.language}/`;
      } else {
        window.location.href = `/${i18n.language}`;
      }
    }
  }, [currentDir, i18n, langParam, oldRoute]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path={`/${i18n.language}/`} exact component={Home} />
          <Route path={`/${i18n.language}/pricing`} exact component={Pricing} />
          <Route
            path={`/${i18n.language}/contact-sales`}
            exact
            component={Contactsales}
          />
          <Route
            path={`/${i18n.language}/tracking-shipment/:num`}
            exact
            component={TrackPage}
          />
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
