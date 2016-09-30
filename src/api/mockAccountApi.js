import delay from './delay';
import {accounts} from '../mock/db/accounts';

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
      // Simulate server-side validation
      const validation= {
        minId: 5,
        minPassword: 6
      };
      
      if (account.id.length < validation.minId) {
        reject(`Username must be at least ${validation.minId} characters.`);
      }
      
      if (account.last.length < account.minPassword) {
        reject(`Password must be at least ${validation.minPassword} characters.`);
      }
      accounts.push(Object.assign(account,{id : generateId()}));
      resolve(account);
    }, delay);
  });
};
class AccountApi {
  constructor(){
  }
  static loadSchema(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(accounts.schema)
          resolve(accounts.schema);
        reject('Error loading account schema');
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
        const loggedIn = accounts.find(acct => acct.first.toLowerCase() === username.toLowerCase() && acct.last === password);
        if(loggedIn)
          resolve(loggedIn);
        reject({first,last});
      }, delay);
    });
  }
}

export default AccountApi;
