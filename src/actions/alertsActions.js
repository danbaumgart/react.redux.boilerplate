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

export function toastSuccess(messages) {
  console.log("MESSAGE SUCCESS", messages);
  const messageList = [];
  Object.keys(messages).forEach(key =>
    messages[key].forEach(message => messageList.push(new Alert(key, message, true))));
  return function (dispatch) {
    dispatch(launchToastMessage(messageList));
  }
}
