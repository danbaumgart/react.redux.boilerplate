import delay from './delay';
import {accounts, schema} from '../mock/db/accounts';

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

const register = (account) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      // Simulate server-side enums
      
      
      if (account.username.length < schema.username.minimum.length) {
        reject(`Username must be at least ${schema.username.minimum.length} characters.`);
      }
      
      if (account.last.length < schema.last.minimum.length) {
        reject(`Password must be at least ${schema.last.minimum.length} characters.`);
      }
      accounts.push(Object.assign(account,{id : generateId()}));
      resolve(account);
    }, delay);
  });
};
class AccountApi {
  static loadSchema(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(schema);
      }, delay);
    });
  }
  static createAccount(account) {
    account = Object.assign({}, account); // to avoid manipulating object passed in.
    return register(account);
  }
  
  static loadAccount(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const loggedIn = accounts.find(acct => acct.username.toLowerCase() === username.toLowerCase() && acct.password === password);
        if(loggedIn)
          resolve(loggedIn);
        reject(loggedIn);
      }, delay);
    });
  }
}

export default AccountApi;
