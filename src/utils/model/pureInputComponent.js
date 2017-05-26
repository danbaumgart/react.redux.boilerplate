import PureComponent from './pureComponent';
class PureInputComponent extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.onUpdateInput = this.onUpdateInput.bind(this);
	}
	onUpdateInput(event, value) {
	    if(event && event.target && event.target.value) this.props.onChange(event.target.value);
	    else if(value) this.props.onChange(value);
    }
}
export default PureInputComponent;
