import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LogListRow = ({entry}) => {
  
  const displayProps = {glyph: 'glyphicon glyphicon-',style:{color:'black'}};
  let entryType = entry.type.slice(entry.type.lastIndexOf('_')+1);
  switch(entryType)
  {
    case 'SUCCESS':
      displayProps.glyph += 'ok-circle';
      displayProps.style.color = 'green';
      break;
    case 'ERROR':
      displayProps.glyph += 'ban-circle';
      displayProps.style.color = 'red';
      break;
    default:
      displayProps.glyph += 'question-sign';
      break;
  }
  return (
    <tr>
      <td><i className={displayProps.glyph} style={displayProps.style}/></td>
      <td>{entry.id}</td>
      <td><Link to={'/log/'+entry.id}>{entry.type}</Link></td>
      <td>{entry.timestamp.date}</td>
      <td>{entry.timestamp.time}</td>
    </tr>
  );
};

LogListRow.propTypes = {
  entry:PropTypes.object.isRequired
};
LogListRow.defaultProps = {
  entry:{id:'',type:'',timestamp:{}}
};

export default LogListRow;
