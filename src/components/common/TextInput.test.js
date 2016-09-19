import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TextInput from './TextInput';

function setup(props) {
  return shallow(<TextInput {...props} />);
}

const getTestProps = ({name = 'textInput', label = 'Text Input', value, error, placeholder})=>{
  return {
    name: name,
    label: label,
    onChange:()=>{},
    value: value || null,
    placeholder: placeholder || null,
    error: error || null
  };
};

describe('TextInput via Enzyme', () => {
  it('renders inside of a form-group', () => {
    let testProps = getTestProps({});
    const wrapper = setup(testProps);
    expect(wrapper.node.type).toBe('div');
    expect(wrapper.node.props.className).toContain('form-group');
  });
  it('renders the label', () => {
    let testProps = getTestProps({});
    const wrapper = setup(testProps);
    expect(wrapper.find('label').text()).toEqual(testProps.label);
  });
  it('populates text field with provided value', () => {
    let testProps = getTestProps({value:'Baumgart'});
    const wrapper = setup(testProps);
    expect(wrapper.find('input').props().value).toBe(testProps.value);
  });
  it('renders error message', () => {
    let testProps = getTestProps({error:'Invalid last name.'});
    const wrapper = setup(testProps);
    expect(wrapper.find('div').node.props.className).toContain('has-error');
    expect(wrapper.find('div.alert.alert-danger').text()).toEqual(testProps.error);
  });
});
