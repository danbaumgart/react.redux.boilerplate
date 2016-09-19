import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import SelectInput from './SelectInput';

function setup(props) {
  return shallow(<SelectInput {...props} />);
}

const getTestProps = ({name = 'selectTest', label = 'Select Test', defaultOption, value, error, options})=> {
  return {
    name: name,
    label: label,
    onChange: ()=>{},
    defaultOption: defaultOption || null,
    value: value || null,
    error: error || null,
    options: options || []
  };
};

describe('SelectInput via Enzyme', () => {
  it('renders inside of a div form-group', () => {
    let scenarioProps = getTestProps({});
    const wrapper = setup(scenarioProps);
    expect(wrapper.node.type).toBe('div');
    expect(wrapper.node.props.className).toContain('form-group');
  });
});
