import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(courses && courses.length>0)
          resolve(Object.assign([], courses));
        else
          reject('No courses found.');
      }, delay);
    });
  }
  static updateCourse(course){
    course = Object.assign({},course);
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        const minCourseTitleLength = 1;
        if(course.title.length < minCourseTitleLength)
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        if (course.id) {
          //Simulating update here.
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          let keys = Object.keys(course);
          const compare = {
            keys: keys,
            course: courses[existingCourseIndex],
            change:false
          };
          compare.keys.forEach(key=>{
            if(course[key] !== compare.course[key])
              compare.change = true;
          });
          if(compare.change){
            courses.splice(existingCourseIndex, 1, course);
            resolve(course);
          }
          else
            reject('No changes detected.');
        }else{
          reject('Missing id property.');
        }
      },delay);
    });
  }
  static createCourse(course){
    course = Object.assign({},course);
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        const minCourseTitleLength = 1;
        if(course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }
        course.id = generateId(course);
        course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
        courses.push(course);
        resolve(course);
      },delay);
    });
  }
  
  static deleteCourse(course) {
    course = Object.assign({},course);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(c => c.id == course.id);
        if(indexOfCourseToDelete !== -1) {
          courses.splice(indexOfCourseToDelete, 1);
          resolve(course);
        } else {
          reject('Could not find course with Id: "' + course.id + '"');
        }
      }, delay);
    });
  }
}

export default CourseApi;
