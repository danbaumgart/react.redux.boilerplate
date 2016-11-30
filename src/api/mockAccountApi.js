import delay from './delay';
import {accounts, registration} from '../mock/db/accounts';
import Validator from '../utils/validate';
import invalid from '../enums/validation';
import response from './serverResponse';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const accountExists = (emailAddress = '') => accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase());
const getSafeUserInformation = ({emailAddress, firstName, lastName}) => Object.assign({},{emailAddress}, {firstName}, {lastName});
const loginResponse = (result, data, messages) => response('login', result, data, messages);
const registrationResponse = (result, data, messages) => response('registration', result, data, messages);
class AccountApi {
  static loadSchema(){
    return new Promise(res =>
      setTimeout(()=>{
        res(registration);
      }, delay));
  }
  static checkAvailability(emailAddress){
    return new Promise((resolve) =>
      setTimeout(()=> accountExists(emailAddress)
        ? resolve([invalid.UNAVAILABLE])
        : resolve(null), delay));
  }
  static createAccount(account) { // to avoid manipulating object passed in.
    const registrationValidator = new Validator(registration);
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const errors = registrationValidator.validateForm(account);
        console.log("ERRORS", errors);
        let hasErrors = false;
        if(accountExists(account.emailAddress))
            Array.isArray(errors.emailAddress) && errors.emailAddress.length > 0
              ? Object.assign(errors.emailAddress, [...errors.emailAddress, invalid.UNAVAILABLE])
              : Object.assign(errors, {emailAddress: [invalid.UNAVAILABLE]});
        Object.keys(errors).forEach(key => (Array.isArray(errors[key]) && errors[key].length > 0) ? hasErrors = true : hasErrors = !!hasErrors);
        const errorMessages = registrationValidator.getAllDefaultErrorMessages({errors: errors, includeField: true});
        let messages = [];
        Object.keys(errorMessages).forEach(error => messages.push(...errorMessages[error]));
        console.log("SERVER ERRORS", messages);
        if(hasErrors)
          reject(registrationResponse(404, errors, messages));
        else{
          accounts.push(account);
          resolve(registrationResponse(200, getSafeUserInformation(account), "account created"));
        }
        
      }, delay);
    });
  }
  
  
  static getAccount({emailAddress = '', password = ''}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase() && acct.password === password);
        if(user)
          resolve(loginResponse(200, getSafeUserInformation(user), ['login successful']));
        reject(loginResponse(404, null, ['invalid username or password']));
      }, delay);
    });
  }
}

export default AccountApi;
