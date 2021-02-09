import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "containers/HomePage/HomePage";
import { Page } from "./types";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { ComponentsPage } from "containers/ComponentsPage/ComponentsPage";
import Annoucement from "components/Annoucement/Annoucement";
import Home2Page from "containers/Home2Page/Home2Page";
import OurStoryPage from "containers/OurStoryPage/OurStoryPage";
import OurStoryLongPage from "containers/OurStoryLongPage/OurStoryLongPage";
import OurMissionPage from "containers/OurMissionPage/OurMissionPage";
import OurTeamPage from "containers/OurTeamPage/OurTeamPage";
import ContactUsPage from "containers/ContactUsPage/ContactUsPage";
import VolunteerPage from "containers/VolunteerPage/VolunteerPage";
import EventsPage from "containers/EventsPage/EventsPage";
import CareersPage from "containers/CareersPage/CareersPage";
import ProgramsPage from "containers/ProgramsPage/ProgramsPage";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSinglePage from "containers/BlogSinglePage/BlogSinglePage";
import DonatePage from "containers/DonatePage/DonatePage";
import ComponentAlertsPage from "containers/ComponentsPage/ComponentAlertsPage";
import ComponentButtonPage from "containers/ComponentsPage/ComponentButtonsPage";
import ComponentAvatarsPage from "containers/ComponentsPage/ComponentAvatarsPage";
import ComponentFormsLayoutPage from "containers/ComponentsPage/ComponentFormsLayoutPage";
import ComponentMessagesPage from "containers/ComponentsPage/ComponentMessagesPage";
import ComponentModalDropdownsPage from "containers/ComponentsPage/ComponentModalDropdownsPage";

export const pages: Page[] = [
  { path: "/", exact: true, component: HomePage },
  { path: "/home2", exact: true, component: Home2Page },
  { path: "/our-story", exact: true, component: OurStoryPage },
  { path: "/our-story-long", exact: true, component: OurStoryLongPage },
  { path: "/our-mission", exact: true, component: OurMissionPage },
  { path: "/our-team", exact: true, component: OurTeamPage },
  { path: "/contact", exact: true, component: ContactUsPage },
  { path: "/volunteer", exact: true, component: VolunteerPage },
  { path: "/events", exact: true, component: EventsPage },
  { path: "/careers", exact: true, component: CareersPage },
  { path: "/programs", exact: true, component: ProgramsPage },
  { path: "/the-blog", exact: true, component: BlogPage },
  { path: "/blog-single", exact: true, component: BlogSinglePage },
  { path: "/donate", exact: true, component: DonatePage },
  { path: "/style-guide", exact: true, component: ComponentsPage },
  { path: "/components", exact: true, component: ComponentsPage },
  //
  { path: "/c-alerts", exact: true, component: ComponentAlertsPage },
  { path: "/c-buttons", exact: true, component: ComponentButtonPage },
  { path: "/c-avatars", exact: true, component: ComponentAvatarsPage },
  { path: "/c-form-layout", exact: true, component: ComponentFormsLayoutPage },
  { path: "/c-messages", exact: true, component: ComponentMessagesPage },
  {
    path: "/c-modal-dropdown",
    exact: true,
    component: ComponentModalDropdownsPage,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Annoucement />
      {/* === HEADER... === */}
      <div className="stickyyyyy top-0 z-50">
        <Header />
      </div>

      {/* === PAGE CONTENT... === */}
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={() => <h1>404</h1>} />
      </Switch>

      {/* === FOOTER... === */}
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
