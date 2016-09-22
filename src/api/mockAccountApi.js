import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const accounts = [
  {
    id:1,
    username:'Dan',
    password:'Baumgart'
  },
  {
    id:2,
    username:'Will',
    password:'Stampley'
  },
  {
    id:3,
    username:'Joe',
    password:'Shehata'
  },
  {
    id:4,
    username:'Enrique',
    password:'La Salle Verde'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = ()=>{
  let accts = accounts.sort((a,b)=>{
    if(a.id < b.id)
      return -1;
    else if(a.id > b.id)
      return 1;
    else
      return 0;
  });
  return accts[accts.length-1].id+1;
};

class AccountApi {
  static registerAccount(account) {
    account = Object.assign({}, account); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const validation= {
          minId: 5,
          minPassword: 6
        };
        
        if (account.id.length < validation.minId) {
          reject(`Username must be at least ${validation.minId} characters.`);
        }
        
        if (account.password.length < account.minPassword) {
          reject(`Password must be at least ${validation.minPassword} characters.`);
        }
        accounts.push(Object.assign(account,{id : generateId()}));
        resolve(account);
      }, delay);
    });
  }
  
  static login(username,password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const loggedIn = accounts.find(acct => acct.username.toLowerCase() === username.toLowerCase() && acct.password === password);
        if(loggedIn)
          resolve(loggedIn);
        reject({username,password});
      }, delay);
    });
  }
}

export default AccountApi;
