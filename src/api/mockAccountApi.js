import delay from './delay';
import {accounts, schema} from '../mock/db/accounts';
import Validator from '../utils/validate';
//import schema from '../components/account/registrationSchema';
import invalid from '../utils/enums/validation';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const accountExists = (emailAddress = '') => accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase());

class AccountApi {
  static loadSchema(){
    return new Promise(res =>
      setTimeout(()=>{
        res(schema);
      }, delay));
  }
  static checkAvailability(emailAddress){
    return new Promise((resolve) =>
      setTimeout(()=> accountExists(emailAddress)
        ? resolve([invalid.UNAVAILABLE])
        : resolve(null), delay));
  }
  static createAccount(account) { // to avoid manipulating object passed in.
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const errors = new Validator(schema).validateForm(account);
        let hasErrors = false;
        if(accountExists(account.emailAddress))
            Array.isArray(errors.emailAddress) && errors.emailAddress.length
              ? Object.assign(errors, {emailAddress: [...errors.emailAddress, invalid.UNAVAILABLE]})
              : Object.assign(errors, {emailAddress: [invalid.UNAVAILABLE]});
        Object.keys(errors).forEach(key => (Array.isArray(errors[key]) && errors[key].length > 0) ? hasErrors = true : hasErrors = !!hasErrors);
        console.log("HAS ERRORS", hasErrors);
        console.log("SERVER ERRORS", errors);
        if(hasErrors)
          reject(errors);
        else{
          accounts.push(account);
          resolve({accountRegistration: "successful"});
        }
        
      }, delay);
    });
  }
  
  
  static loadAccount({emailAddress='', password}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const loggedIn = accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase() && acct.password === password);
        if(loggedIn)
          resolve(loggedIn.emailAddress);
        reject();
      }, delay);
    });
  }
}

export default AccountApi;
