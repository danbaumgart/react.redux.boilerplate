import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
const FormPaper = ({children}) => {
    const props = {
        zDepth: 2,
        style: {
            display: "inline-block",
            width: "100%",
            padding: "10px"
        }
    };
    return <Paper {...props} >{children}</Paper>;
};

FormPaper.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node)
};
FormPaper.defaultProps = {
    children: []
};


export default FormPaper;
