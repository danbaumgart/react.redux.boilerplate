import React, {Component, PropTypes} from 'react';
import {AutoComplete} from 'material-ui';
const dataSource = ["testapi.trinitawellness.com/api/University/Name/"];
class Typeahead extends Component {
  constructor(props){
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.state = {dataSource};
  }
  onUpdateInput(inputValue) {
    const promise = new Promise((res, rej) => {
      
    })
  }
  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value
      ]
    });
  }
  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={["http://testapi.trinitawellness.com/api/University/Name/"]}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
        />
      </div>
    );
  }
}
export default Typeahead;
