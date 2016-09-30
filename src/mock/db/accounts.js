
export let accounts = {
  schema: {
    username: {
      required: true,
      email: true,
      minimum:{
        length:8
      }
    },
    password: {
      required: true,
      special: 1,
      uppercase: 1,
      numeric: 1,
      lowercase: 1,
      minimum: {
        length:8
      }
    },
    first: {
      restrict:"alpha"
    },
    last: {
      required: true,
      restrict:"alpha",
      maximum:{
        length:20
      }
    }
  },
  data: [
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
  ]
};
