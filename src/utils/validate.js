
class validate{
  constructor(input){
    this.input = input;
  }
  required(){
    return this.input !== '';
  }
  minlength(){
    return this.input.length >= minlength;
  }
  maxlength(maxlength){
    return !maxlength || this.input.length <= maxlength ;
  }
  pattern(){
    return 
  }
}




export default validate;
