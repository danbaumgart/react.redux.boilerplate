import React, {PropTypes} from 'react';
import {EditorModeEdit, ContentSave, ImageFlare, ActionDelete, ContentLink, ActionSearch, AvPlayCircleOutline, NavigationCancel} from 'material-ui/svg-icons'
import config from '../styles/muiCustom';
import {FlatButton, RaisedButton} from 'material-ui';
import {fade} from 'material-ui/utils/colorManipulator';

const ActionButton = ({actionType, handleClick, buttonType, href}) => {
  let col = config.actionButton[actionType];
  const props = {
    primary: true,
    //secondary: true,
    labelStyle: {
      color: 'white'
    },
    style:{margin:"20px"},
    label: actionType,
    backgroundColor: config.actionButton[actionType],
    labelPosition: 'after',
    rippleColor: config.ripple.color,
    hoverColor: fade(config.actionButton[actionType], .25),
  };
  
  const getIconComponent = () => {
    switch (actionType) {
      case 'cancel':
        return <NavigationCancel color={props.labelStyle.color}/>;
      case 'create':
        return <ImageFlare color={props.labelStyle.color}/>;
      case 'delete':
        return <ActionDelete color={props.labelStyle.color}/>;
      case 'edit':
        return <EditorModeEdit color={props.labelStyle.color}/>;
      case 'link':
        return <ContentLink color={props.labelStyle.color}/>;
      case 'save':
        return <ContentSave color={props.labelStyle.color}/>;
      case 'search':
        return <ActionSearch color={props.labelStyle.color}/>;
      case 'submit':
        return <AvPlayCircleOutline color={props.labelStyle.color}/>;
    }
  };
  let IconComponent = getIconComponent();
  console.log(props);
  return buttonType === 'flat'
    ? <FlatButton onTouchStart={handleClick}
                  icon={IconComponent}
                  {...props}/>
    : <RaisedButton
                    icon={IconComponent}
                    {...props}/>
};
ActionButton.propTypes = {
  actionType: PropTypes.oneOf(['cancel', 'create', 'delete', 'edit', 'link', 'save', 'search', 'submit']).isRequired,
  handleClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['raised', 'flat']),
  href: PropTypes.string
};
ActionButton.defaultProps = {
  buttonType: 'raised',
  href: null
};

export default ActionButton;
