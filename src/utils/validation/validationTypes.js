import * as valid from '../../actions/validTypes';


const validate = (criterion)=>{
  switch(criterion){
    case valid.REQUIRED:
      break;
    case valid.MINLENGTH:
      break;
    case valid.MAXLENGTH:
      break;
    case valid.MINVALUE:
      break;
    case valid.MAXVALUE:
      break;
    case valid.EMAIL:
      break;
    case valid.LOWERCASE:
      break;
    case valid.UPPERCASE:
      break;
    case valid.ALPHA:
      break;
    case valid.NUMERIC:
      break;
    case valid.SPECIAL:
      break;
    default:
      return true;
  }
};



