import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {getHomeLinks, getUserLinks} from './actions/linksActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import muiCustom from './styles/muiCustom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

const toField = data => ({section: data._section_id, entry: data._entry_id});
const toDataOrgElement = (data, idx) => Object.assign({}, {_section_id: (idx < 2 ? 1 : Math.floor(idx/3)+1), _entry_id: idx%3 + 1, double_value: String(1/(3*(idx+1))*idx)});
const createData = length => new Array(isNaN(length) ? 10 : length).fill({_section_id: null, _entry_id: null, double_value: null}).map(toDataOrgElement);
const createFields = data => (Array.isArray(data) ? data : createData()).map(toField);


const dataHasMatchingField = (data, sumFields) => data && sumFields.some(field => field.section === data._section_id && field.entry === data._section_id);
const filterDataForFields = (data_org, sumFields) => data_org.filter(data => dataHasMatchingField(data, sumFields));
const toParsedDoubleValue = obj => Number(obj.double_value);
const getFieldDoubleValues = (data_org, sumFields) => filterDataForFields(data_org, sumFields).map(toParsedDoubleValue);
const sum = (a, b) => a + b;
const reduceSumDoubleValues = (data_org, sumFields) => getFieldDoubleValues(data_org, sumFields).reduce(sum);
const sumSectionDoubles = (data_org, sumFields, valuation) => (isNaN(valuation) ? 0 : valuation) + reduceSumDoubleValues(data_org, sumFields);

function runReducerExample(){
  const data_org = createData(20);
  const sumFields = createFields();
  const sumTotal = sumSectionDoubles(data_org, sumFields, 35);
  console.log("TOT", sumTotal);
  return sumTotal;
}
runReducerExample();
Promise.all([
  store.dispatch(getHomeLinks()),
  store.dispatch(getUserLinks())
]);
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiCustom)}>
    <Router history={browserHistory} routes={routes}/>
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
