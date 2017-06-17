import React from '../../../utils/react';
import {WARNING, SUCCESS, INFO, ERROR} from '../constants';
import StatusComponent from '../handlers/component';
import StyleHandler from '../handlers/style';
class StatusIcon extends React.PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        const props = {style: StyleHandler[this.props.status]};
        const Icon = StatusComponent[this.props.status];
        return <Icon {...props} />;
    }
}
StatusIcon.propTypes = {
    status: React.PropTypes.oneOf([WARNING, ERROR, SUCCESS, INFO]).isRequired
};
const STATUS_ICONS = {
    WarningIcon: () => <StatusIcon status={WARNING}/>,
    SuccessIcon: () => <StatusIcon status={SUCCESS}/>,
    ErrorIcon: () => <StatusIcon status={ERROR}/>,
    InfoIcon: () => <StatusIcon status={INFO}/>
};
export const {WarningIcon, SuccessIcon, ErrorIcon, InfoIcon} = STATUS_ICONS;
