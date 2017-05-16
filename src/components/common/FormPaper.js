import React, {PropTypes} from 'react';
import {Paper} from 'material-ui';
const FormPaper = ({children}) => {
    const props = {
        zDepth: 1,
        //style: {display: "inline-block", width: "100%", padding: "10px"},
        children
    };
    return <Paper {...props} />;
};

FormPaper.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node)
};
FormPaper.defaultProps = {
    children: []
};


export default FormPaper;
