import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import keyValuePairs from '../../utils/dataHelper';
/* eslint-disable no-case-declarations */

class LogDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      entry:Object.assign({},props.entry),
    };
  }
  componentWillReceiveProps(nextProps){
    if(this.props.entry.id != nextProps.entry.id){
      //Necessary to populate form when existing log entry is loaded directly.
      this.setState({
        entry:Object.assign({},nextProps.entry),
      });
    }
  }
  redirectToLogList(){
    this.context.router.push('/log');
  }
  render() {
    console.log(this.state);
    const rows = this.state.entry.data.map((d,i)=>{
      return <tr key={d.key}><td>{d.key}</td><td>{d.value}</td></tr>;
    });
    return (
      <div>
        <h1>Log Entry</h1>
        <div className="row">
        
        </div>
        <table className="table table-responsive">
          <thead>
          <tr>
            <th>{this.state.entry.type} - #{this.state.entry.id}</th>
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

LogDetails.propTypes = {
  entry:PropTypes.object.isRequired
};
LogDetails.contextTypes = {
  router:PropTypes.object
};

function getLogById(data,id){
  const log = data.filter(entry => entry.id == id);
  if(log)
    return log[0]; //since filter returns an array, need to take first one.
  return null;
}


function mapStateToProps(state, ownProps) {
  const logId = ownProps.params.id; // from the path `/course/:id`;
  const standardkeys = ['id','type','timestamp'];
  const entry = {id:'',type:'',timestamp:'',data:[]};
  if(logId && state.log.length > 0) {
    let found = getLogById(state.log, logId);
    if (found) {
      let subkeys = Object.keys(found).filter(key => standardkeys.indexOf(key.toLowerCase()) == -1);
      let formattedData = [];
      Object.assign(entry,
        {id: found.id},
        {type: found.type},
        {timestamp: found.timestamp},
        {data:subkeys.map(k => keyValuePairs(k, found[k]))[0]}
      );
    }
  }
  console.log(entry.data);
  return {
    entry:entry
  };
}


export default connect(mapStateToProps)(LogDetails);
