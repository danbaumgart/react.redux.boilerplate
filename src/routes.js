import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './views/App';
import HomePage from './views/home/HomePage';
import TestimonialsPage from './views/testimonials/TestimonialsPage';
import EventsPage from './views/events/EventsPage';
import AboutPage from './views/about/AboutPage';
import ContactMePage from './views/contactMe/ContactMePage';
import AppointmentPage from './views/appointment/AppointmentPage';
import RegistrationPage from './views/account/RegistrationPage';
import LoginPage from './views/account/LoginPage';
const PATHS = {
    ABOUT: "about",
    CONTACT_ME: "contactme",
    REGISTRATION: "registration",
    LOGIN: "login",
    APPOINTMENT: "appointment",
    EVENTS: "events",
    TESTIMONIALS: "testimonials"
};
export const TitleHandler = {
    [PATHS.ABOUT]: "About",
    [PATHS.APPOINTMENT]: "Appointment",
    [PATHS.CONTACT_ME]: "Contact Me",
    [PATHS.LOGIN]: "Login",
    [PATHS.REGISTRATION]: "Registration",
    [PATHS.EVENTS]: "Events",
    [PATHS.TESTIMONIALS]: "Testimonials",
};
const ComponentHandler = {
    [PATHS.ABOUT]: AboutPage,
    [PATHS.APPOINTMENT]: AppointmentPage,
    [PATHS.CONTACT_ME]: ContactMePage,
    [PATHS.LOGIN]: LoginPage,
    [PATHS.REGISTRATION]: RegistrationPage,
    [PATHS.EVENTS]: EventsPage,
    [PATHS.TESTIMONIALS]: TestimonialsPage
};
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="contactme" component={ContactMePage}/>
    <Route path="registration" component={RegistrationPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="appointment" component={AppointmentPage}/>
    <Route path="testimonials" component={TestimonialsPage}/>
    <Route path="events" component={EventsPage}/>
  </Route>
);
