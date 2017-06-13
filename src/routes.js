import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './views/App';
import HomePage from './views/home/HomePage';
import TestimonialsPage from './views/testimonials/TestimonialsPage';
import EventsPage from './views/events/EventsPage';
import AboutPage from './views/about/AboutPage';
import ContactMePage from './views/contactMe/ContactMePage';
import ContactPage from './views/contact/contactPage';
import AppointmentTabsPage from './views/appointment/AppointmentTabPage';
import RegistrationPage from './views/account/RegistrationPage';
import LoginPage from './views/account/LoginPage';
const PATHS = {
    ABOUT: "about",
    CONTACT_ME: "contactme",
    REGISTRATION: "registration",
    LOGIN: "login",
    APPOINTMENT: "appointment",
    EVENTS: "events",
    TESTIMONIALS: "testimonials",
    CONTACT: "contact"
};
export const TitleHandler = {
    [PATHS.ABOUT]: "About",
    [PATHS.APPOINTMENT]: "Appointment",
    [PATHS.CONTACT_ME]: "Contact Me",
    [PATHS.LOGIN]: "Login",
    [PATHS.REGISTRATION]: "Registration",
    [PATHS.EVENTS]: "Events",
    [PATHS.TESTIMONIALS]: "Testimonials",
    [PATHS.CONTACT]: "Contact"
};
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="contactme" component={ContactMePage}/>
        <Route path="contact" component={ContactPage}/>
        <Route path="registration" component={RegistrationPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="appointment" component={AppointmentTabsPage}/>
        <Route path="testimonials" component={TestimonialsPage}/>
        <Route path="events" component={EventsPage}/>
    </Route>
);
