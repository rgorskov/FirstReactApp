import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Card extends React.Component{
	constructor(props){
		super(props);

		this.state = {edit: false};
	}

	edit = () => {
		this.setState({edit: true})
	}

	delete = () => {
		this.props.deleteCard(this.props.index);
	}

	save = () => {
		var val = this.refs.txtAr.value;
		this.props.updateCard(val, this.props.index)
		this.setState({edit: false});
	}

	renderNorm = () => {
		return (
			<div className="card m-4 col-2">
			<div className="card-body text-center">
			<p className="card-text">{this.props.children}</p>
			<button className="btn btn-primary m-1 edit" onClick={this.edit}>Edit</button>
			<button className="btn btn-warning m-1 delete" onClick={this.delete}>Delete</button>
			</div>
			</div>
		); 
	}

	renderEdit = () => {
		return (
		<div className="card m-4 col-2">
		<div className="card-body text-center">
		<textarea rows='3' defaultValue={this.props.children} ref='txtAr'></textarea>
		<button className="btn btn-success" onClick={this.save}>Save</button>
		</div>
		</div>
		); 
	}

	render(){
		if(this.state.edit){
			return this.renderEdit();
		} else {
			return this.renderNorm();
		}
	}
}