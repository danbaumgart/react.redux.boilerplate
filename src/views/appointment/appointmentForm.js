import React from '../../utils/react';

class AppointmentForm extends React.PureComponent {
    constructor(props){
        super(props);
    }
    getProps
    render() {
        const {values, schema, errors, actions} = this.props;
        const keys = Object.keys(schema);
        const FormHandler = keys.map(key => {
            values
        })
    }
}

AppointmentForm.propTypes = {
    values: React.PropTypes.object.isRequired,
    schema: React.PropTypes.object.isRequired,
    errors: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};


export default AppointmentForm;
