export default {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  code:{
    200: {name: 'OK', code: 200},
    400: {name: "BAD_REQUEST", code: 400},
    401: {name: "UNAUTHORIZED", code: 401},
    403: {name: "FORBIDDEN", code: 403},
    404: {name: "NOT_FOUND", code: 404},
    500: {name: "INTERNAL_SERVER_ERROR", code: 500},
  }
}
