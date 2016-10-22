import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Link} from 'react-router';
import * as icons from 'material-ui/svg-icons/index';
import {IconMenu, MenuItem, FlatButton, RaisedButton, IconButton} from 'material-ui';
import {teal600, teal400, red700, fullWhite} from 'material-ui/styles/colors';
import ActionButton from './ActionButton';

const DataTable = ({courses, deleteRow}) => {
  let flatButtonStyle = {
    minWidth: "0px",
    lineHeight: "0px",
    height: "auto"
  };
  let iconStyle = {
    height: "30px",
    width: "65px"
  };
  const rows = courses.map(course => {
    return (
      <TableRow key={course.id} selectable={false}>
        <TableRowColumn style={{width:"10%"}}>
          <FlatButton style={flatButtonStyle} hoverColor={fullWhite} fullWidth={true} href={course.watchHref} target="_blank" icon={<icons.NotificationOndemandVideo hoverColor={teal400} style={iconStyle} />} />
        </TableRowColumn>
        <TableRowColumn style={{width:"10%"}}>
          <FlatButton hoverColor={fullWhite} style={flatButtonStyle} fullWidth={true} icon={<icons.ActionDelete hoverColor={red700} style={iconStyle}/>} onClick={()=>deleteRow(course)}/>
        </TableRowColumn>
        <TableRowColumn><Link to={'/course/'+course.id}>{course.title}</Link></TableRowColumn>
        <TableRowColumn>{course.authorId}</TableRowColumn>
        <TableRowColumn>{course.category}</TableRowColumn>
        <TableRowColumn>{course.length}</TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
      <ActionButton actionType="edit" />
      <ActionButton actionType="create" />
      <ActionButton actionType="delete" />
      <ActionButton actionType="save" />
      <ActionButton actionType="link" />
      <ActionButton actionType="cancel" />
      <ActionButton actionType="search" />
      <ActionButton actionType="submit" />
    <Table fixedHeader={true} courses={courses} deleteRow={deleteRow}>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn style={{width:"10%"}}/>
        <TableHeaderColumn style={{width:"10%"}}/>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Author</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Length</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {rows}
    </TableBody>
  </Table>
    </div>
  );
};

Table.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteRow: PropTypes.func.isRequired
};

export default DataTable;
