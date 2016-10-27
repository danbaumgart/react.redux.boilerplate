import delay from './delay';
import {accounts, schema} from '../mock/db/accounts';
import Validator from '../utils/validate';
//import schema from '../components/account/registrationSchema';
import invalid from '../utils/enums/validation';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.



class AccountApi {
  static loadSchema(){
    return new Promise(res =>
      setTimeout(()=>{
        res(schema);
      }, delay));
  }
  static checkAvailability(emailAddress){
    return new Promise((resolve) =>{
      setTimeout(()=>
        accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase())
        ? resolve(invalid.UNAVAILABLE)
        : resolve(null), delay)});
  }
  static createAccount(account) { // to avoid manipulating object passed in.
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        let validation = new Validator(schema);
        const errors = validation.validateForm(account);
        let hasErrors;
        if(accounts.filter(acct => acct.emailAddress.toLowerCase() === account.emailAddress.toLowerCase()).length)
            Array.isArray(errors.emailAddress) && errors.emailAddress.length > 0
              ? Object.assign(errors, {emailAddress: [...errors.emailAddress, invalid.UNAVAILABLE]})
              : Object.assign(errors, {emailAddress: []});
        Object.keys(errors).forEach(key => {
          if(Array.isArray(errors[key]) && errors[key].length > 0)
            hasErrors = true;
        });
        console.log("ERRORS", errors);
        if(hasErrors)
          reject(errors);
        else{
          accounts.push(account);
          resolve(account);
        }
        
      }, delay);
    });
  }
  
  
  static loadAccount(emailAddress, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const loggedIn = accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase() && acct.password === password);
        if(loggedIn)
          resolve(loggedIn);
        reject(loggedIn);
      }, delay);
    });
  }
}

export default AccountApi;
