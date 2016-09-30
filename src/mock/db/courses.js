
export let courses = {
  schema: {
    _identity: {
      id: {
        required: true,
        unique: true
      }
    },
    password: {
      required: true,
      minlength: 8,
      pattern: {
        special: 1,
        capital: 1,
        numeric: 1,
        lowercase: 1
      }
    },
    first: {
      required: true
    },
    last: {
      required: true
    }
  },
  data: [
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
  ]
};
