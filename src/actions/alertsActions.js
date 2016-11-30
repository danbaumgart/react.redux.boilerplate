import * as types from './actionTypes';

function showSuccessMessages(messages){
  return {type: types.SHOW_SUCCESS_MESSAGES, payload: messages};
}
function showErrorMessages(messages){
  return {type: types.SHOW_ERROR_MESSAGES, payload: messages};
}
function showMessages(messages) {
  return {type: types.SHOW_DEFAULT_MESSAGES, payload: messages};
}
export function showAlerts(messages = []){
  return function(dispatch){
    if(Array.isArray(messages) && messages.length > 0)
      dispatch(showMessages(Array.isArray(messages) ? messages : [messages]));
  }
}
export function showSuccessAlerts(messages = []){
  return function(dispatch){
    if(Array.isArray(messages) && messages.length > 0)
      dispatch(showSuccessMessages(messages))
  }
}
export function showErrorAlerts(messages = []){
  return function(dispatch){
    if(Array.isArray(messages) && messages.length > 0)
      dispatch(showErrorMessages(messages));
  }
}
export function showErrorObjectAlerts(errors = {}){
  const keys = errors ? Object.keys(errors) : [];
  const messages = keys.length > 0 ? keys.map(key => errors[key]).reduce((a, b) => a.concat(b)) : [];
  return function(dispatch){
    if(messages.length > 0)
      dispatch(showErrorMessages(messages));
  }
}
// export function toastError(messages) {
//   const messageList = [];
//   Object.keys(messages).forEach(key =>
//     messages[key].forEach(message =>
//       messageList.push(
//         new Alert(key, message, false)
//       )
//     )
//   );
//   return function (dispatch) {
//     dispatch(showMessages(messageList));
//   }
// }
// export function toastErrors(messages) {
//   const messageList = [];
//   Object.keys(messages).forEach(key =>
//     messages[key].forEach(message =>
//       messageList.push(
//         new Alert(key, message, false)
//       )
//     )
//   );
//   return function (dispatch) {
//     dispatch(showMessages(messageList));
//   }
// }
// export function toastSuccess(message) {
//   console.log("MESSAGE SUCCESS", message);
//   const messageList = [];
//   Object.keys(message).forEach(key =>
//     messageList.push(new Alert(key, message[key], true)));
//   console.log("MESSAGE LIST", messageList);
//   return function (dispatch) {
//     dispatch(showMessages(messageList));
//   }
// }
