import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import FormInput from '../common/FormInput';
import SelectInput from '../common/SelectInput';
import SubmitButton from '../common/SubmitButton';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput label="Title"
                 name="title"
                 onChange={onChange}
                 value={course.title}
                 errors={errors.title} />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />
      <SubmitButton
        onSave={onSave}
        label={saving ? 'Saving...' : 'Save'}
        idle={!saving}/>
    </form>
  );
};

CourseForm.propTypes = {
  course:React.PropTypes.object.isRequired,
  allAuthors:React.PropTypes.array,
  onSave:React.PropTypes.func.isRequired,
  onChange:React.PropTypes.func.isRequired,
  saving:React.PropTypes.bool,
  errors:React.PropTypes.object
};

export default CourseForm;
