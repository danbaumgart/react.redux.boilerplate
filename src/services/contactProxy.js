import TrinitaWellnessService from './trinitaWellnessService';
import RESOURCES from './constants/resource';
class ContactService extends TrinitaWellnessService {
    constructor() {
        super(RESOURCES.CONTACT);
    }
}
export default new ContactService();
  // GetById(id) { // to avoid manipulating object passed in.
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       let validation = new Validator(schema);
  //       const errors = validation.validateForm(id);
  //       let hasErrors;
  //       if(accounts.filter(acct => acct.emailAddress.toLowerCase() === account.emailAddress.toLowerCase()).length)
  //           Array.isArray(errors.emailAddress) && errors.emailAddress.length > 0
  //             ? Object.assign(errors, {emailAddress: [...errors.emailAddress, UNAVAILABLE]})
  //             : Object.assign(errors, {emailAddress: []});
  //       Object.keys(errors).forEach(key => {
  //         if(Array.isArray(errors[key]) && errors[key].length > 0)
  //           hasErrors = true;
  //       });
  //       console.log("ERRORS", errors);
  //       if(hasErrors)
  //         reject(errors);
  //       else{
  //         accounts.push(account);
  //         resolve(account);
  //       }
  //
  //     }, delay);
  //   });
  // }
  // loadAccount(emailAddress, password) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const loggedIn = accounts.find(acct => acct.emailAddress.toLowerCase() === emailAddress.toLowerCase() && acct.password === password);
  //       if(loggedIn)
  //         resolve(loggedIn);
  //       reject(loggedIn);
  //     }, delay);
  //   });
  // }
