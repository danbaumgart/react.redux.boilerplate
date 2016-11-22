import delay from './delay';
import accounts from '../mock/db/accounts';
import {registration} from '../mock/db/schema';
import Validator from '../utils/validate';
import invalid from '../utils/enums/validation';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const accountExists = (emailAddress = '') => accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase());
const getPublicUserInfo = ({emailAddress, firstName, lastName}) => Object.assign({}, emailAddress, firstName, lastName);
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
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const errors = new Validator({schema: registration}).validateForm(account);
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
          resolve({registration: "successful"});
        }
        
      }, delay);
    });
  }
  
  
  static getAccount({emailAddress = '', password = ''}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase() && acct.password === password);
        if(user)
          resolve(getPublicUserInfo(user));
        reject({login: 'failed'});
      }, delay);
    });
  }
}

export default AccountApi;
