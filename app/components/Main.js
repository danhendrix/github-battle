var React = require('react');
var ReactDOM = require('react-dom');
var exports = module.exports;

var Main = React.createClass({
	render: function(){
		return (
			<div>  
			{this.props.children}
			</div>
		)
	}
});

module.exports = Main;

// var sayHi = function(props){
	// return (
		// <div>{props.name}</div>
		// )
// }


// ReactDOM.render(<sayHi name='Danny' />,document.getElementById('app'));


