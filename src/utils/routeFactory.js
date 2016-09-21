import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import LogPage from '../components/log/LogPage';
import LogDetailsPage from '../components/log/LogDetailsPage';
import CoursesPage from '../components/courses/CoursesPage';
import ManageCoursePage from '../components/courses/ManageCoursePage';

const createRoute = (route,Component)=>{
  return {
    route:route,
    component:Component
  };
};
export const getRoutes = ()=>{
  return {
    index:HomePage,
    routes:[
      new createRoute('about',AboutPage),
      new createRoute('log',LogPage),
      new createRoute('courses',CoursesPage),
      new createRoute('courses/:id',ManageCoursePage),
      new createRoute('log/:id',LogDetailsPage)
    ]
  };
};
