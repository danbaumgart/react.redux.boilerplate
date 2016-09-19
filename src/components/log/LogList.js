import React, {PropTypes} from 'react';
import LogListRow from './LogListRow';

const LogList = ({log}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Success</th>
        <th>Id</th>
        <th>Action</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
      </thead>
      <tbody>
      {
        log.map((entry) => <LogListRow key={entry.id} entry={entry} />)
      }
      </tbody>
    </table>
  );
};

LogList.propTypes = {
  log: PropTypes.array.isRequired
};


export default LogList
