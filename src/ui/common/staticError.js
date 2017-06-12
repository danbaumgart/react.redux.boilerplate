import React from 'react';
const StaticError = ({errors}) => {
	return (<span><ul>{errors.map(error => <li key={error}>{error}</li>)}</ul></span>);
};
StaticError.propTypes = {
	errors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default StaticError;
