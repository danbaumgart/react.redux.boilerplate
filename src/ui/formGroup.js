import React, {PropTypes} from 'react';
import {Divider, Paper} from 'material-ui';
const FormGroup = ({children}) => {
    const formFields = Array.isArray(children) && children.length > 0 ?
        children.map(field => <div>{field}<Divider/></div>) : null;
	return (
	    <Paper zDepth={2}>
            {formFields}
        </Paper>
    );
};

FormGroup.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node)
};
FormGroup.defaultProps = {
	children: null
};


export default FormGroup;
