import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component{
  constructor(props,context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }
  deleteRow(event){
    const target = Object.assign({}, event);
    this.props.actions.deleteCourse(target)
      .then(() => toastr.success('Course deleted'))
      .catch(error=> toastr.error(error));
  }
  render(){
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} deleteRow={this.deleteRow} />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
