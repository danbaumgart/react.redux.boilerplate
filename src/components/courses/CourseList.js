import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import DataTable from '../../ui/DataTable';
const CourseList = ({courses, deleteRow}) => {
  return (
    <div>
      <DataTable courses={courses} deleteRow={deleteRow}/>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteRow: PropTypes.func.isRequired
};

export default CourseList;
