export let schema = {
  username: {
    required: true,
    email: true,
    minimum: {
      length: 8
    }
  },
  password: {
    required: true,
    minimum: {
      length: 8,
      special: 1,
      uppercase: 2,
      numeric: 4,
      lowercase: 1
    }
  },
  first: {
    restrict: {
      alpha: true
    }
  },
  last: {
    required: true,
    restrict: {
      alpha: true
    },
    minimum: {
      length: 2
    },
    maximum: {
      length: 30
    }
  }
};
export let accounts = [
  {
    username: "danbaumgart@gmail.com",
    password: "baumgart",
    first: "Dan",
    last: "Baumgart"
  },
  {
    username: "willstampley@gmail.com",
    password: "stampley",
    first: "Will",
    last: "Stampley"
  },
  {
    username: "joeshehata@gmail.com",
    password: "shehata",
    first: "Joe",
    last: "Shehata"
  },
  {
    username: "enriquesarranovalle@gmail.com",
    password: "sarranovalle",
    first: "Enrique",
    last: "Sarrano Valle"
  }
];
