import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createAccount, changeRegistrationForm, loadSchema, changeRegistrationErrors} from '../../actions/registrationActions';
import {toastError, toastSuccess} from '../../actions/alertsActions';
import Validator from '../../utils/validate';
import {REQUIRED, RESTRICT_VALUE, UNAVAILABLE} from '../../utils/constants/validation';
import PageTitle from '../../ui/common/PageTitle';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            submitted: false,
            loading: false
        };
        this.updateField = this.updateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.register = this.register.bind(this);
    }
    componentWillMount(){
       this.props.actions.loadSchema();
    }
    updateField(event) {
        const {name, value = ''} = event.target;
        const form = Object.assign({}, this.props.form, {[name]: value});
        const errors = Object.assign({}, this.props.errors, {
            [name]: this.props.validation.validateField(name, value)
        });
        if (name === 'emailAddress') this.props.actions.changeRegistrationForm(form)
            .then(res => res === UNAVAILABLE
                ? this.props.actions.changeRegistrationErrors(Object.assign(
                    errors, {emailAddress: UNAVAILABLE})
                ) : this.props.actions.changeRegistrationErrors(errors));
        else{
            this.props.actions.changeRegistrationForm(form);
            this.props.actions.changeRegistrationErrors(errors);
        }
    }

    register() {
        this.setState({loading: true});
        this.props.actions.createAccount(this.props.form)
            .then(() => this.props.actions.toastSuccess({emailAddress: ["REGISTERED"]}))
            .catch(err => this.props.actions.toastError(err));
    }

    submitForm() {
        Object.keys(this.props.errors).find(field =>
        Array.isArray(this.props.errors[field]) &&
        this.props.errors[field].length > 0)
            ? this.register()
            : this.setState({submitted: true, loading: false});
    }

    render() {
        const errors = {};
        if (this.state.submitted)
            Object.assign(errors, this.props.errors);
        return (
            <div>
                <PageTitle title="Registration"/>
                <RegistrationForm account={this.props.form}
                                  errors={this.props.errors}
                                  update={this.updateField}
                                  save={this.submitForm}
                                  saving={this.state.loading}/>
            </div>
        );
    }
}


function initializeForm(...keys) {
    const form = {}, errors = {}, schema = {};
    keys.forEach(key => {
        Object.assign(form, {[key]: ''});
        Object.assign(errors, {[key]: []});
        Object.assign(schema, {[key]: {}});
    });
    return Object.assign({}, {form}, {errors}, {schema});
}

RegistrationPage.propTypes = {
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    validation: PropTypes.object.isRequired,
    errors: PropTypes.object
};
RegistrationPage.defaultProps = {
    errors: {}
};
RegistrationPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const registration = initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword');
    let {form, errors, schema} = state.registration;
    if (form) Object.assign(registration, {form});
    if (errors) Object.assign(registration, {errors});
    if (schema) Object.assign(registration, {schema});
    Object.assign(registration, {
        validation: new Validator(
            Object.assign({}, schema, {
                confirmPassword: {
                    [REQUIRED]: true,
                    [RESTRICT_VALUE]: registration.form.password
                }
            })
        )
    });
    return registration;
}
function mapDispatchToProps(dispatch) {
    const actions ={
        changeRegistrationForm,
        createAccount,
        toastSuccess,
        loadSchema,
        toastError,
        changeRegistrationErrors
    };
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
