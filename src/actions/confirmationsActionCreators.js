import ACTIONS from './types/confirmationsActions';
import Confirmations from '../services/confirmations';
function _loadConfirmations(confirmations){
    return {type: ACTIONS.LOAD_CONFIRMATIONS, payload: confirmations};
}
export function loadConfirmations(){
    return function(dispatch){
        return Confirmations.Get()
            .then(confirmations => dispatch(_loadConfirmations(confirmations.content)));
    }
}
