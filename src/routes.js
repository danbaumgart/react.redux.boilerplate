import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LogPage from './components/log/LogPage';
import LogDetailsPage from './components/log/LogDetailsPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';
import RegistrationPage from './components/account/RegistrationPage';
import LoginPage from './components/account/LoginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="log" component={LogPage}/>
    <Route path="log/:id" component={LogDetailsPage}/>
    <Route path="account" component={RegistrationPage}/>
    <Route path="account/login" component={LoginPage}/>
  </Route>
);
