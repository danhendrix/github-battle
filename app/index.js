var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function(){
		return (
			<h1>{this.props.message}</h1>
		)
	}
})

ReactDOM.render(<HelloWorld message="Working?"/>,
	document.getElementById('app')
	);