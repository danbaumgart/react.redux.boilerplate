import * as types from './actionTypes';


function launchToastMessage(messages) {
  return {type: types.LAUNCH_TOAST_MESSAGE, payload: messages};
}
const Alert = (key, message, success) => {
  return {
    key: key,
    message: message,
    result: success ? 'success' : 'error'
  };
};
export function toastError(messages) {
  const messageList = [];
  Object.keys(messages).forEach(key =>
    messages[key].forEach(message =>
      messageList.push(
        new Alert(key, message, false)
      )
    )
  );
  return function (dispatch) {
    dispatch(launchToastMessage(messageList));
  }
}

export function toastSuccess(message) {
  console.log("MESSAGE SUCCESS", message);
  const messageList = [];
  Object.keys(message).forEach(key =>
    messageList.push(new Alert(key, message[key], true)));
  console.log("MESSAGE LIST", messageList);
  return function (dispatch) {
    dispatch(launchToastMessage(messageList));
  }
}
