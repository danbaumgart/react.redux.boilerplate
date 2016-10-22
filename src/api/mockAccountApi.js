import delay from './delay';
import {accounts, schema} from '../mock/db/accounts';
import Validator from '../utils/validate';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


//This would be performed on the server in a real app. Just stubbing in.
const generateId = ()=>{
  let accts = accounts.sort((a,b)=>{
    if(a.id < b.id)
      return -1;
    return a.id > b.id;
  });
  return accts.slice(-1).id+1;
};

class AccountApi {
  static loadSchema(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(schema);
      }, delay);
    });
  }
  static createAccount(account) { // to avoid manipulating object passed in.
    account = Object.assign({},account);
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        let validation = new Validator(schema);
        const errors = validation.validateForm(account);
        let existingAccountError = accounts.find(acct => acct.emailAddress.toLowerCase() === account.emailAddress.toLowerCase()) ? ["EMAIL EXISTS"] : null;
          if(existingAccountError){
            if(errors.emailAddress && Array.isArray(errors.emailAddress))
              errors.emailAddress = [...errors.emailAddress, ...existingAccountError];
            else
              errors.emailAddress = [...existingAccountError];
        }
        if(Object.keys(errors).length)
          reject(errors);
        resolve(account);
        accounts.push(Object.assign({}, account));
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
