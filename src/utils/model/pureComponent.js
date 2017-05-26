import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
class PureComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

}
export default PureComponent;
