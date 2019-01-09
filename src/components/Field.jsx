import React from 'react';
import Card from './Card.jsx';

export default class Field extends React.Component{
	constructor(props){
		super(props);
		this.state = {cards: [

			]};
	}

	deleteCard = (ind) => {
		var arr = this.state.cards;
		arr.splice(ind, 1);
		this.setState({cards: arr});
	}

	updateCard = (val, ind) => {
		var arr = this.state.cards;
		arr[ind] = val;
		this.setState({cards: arr});
	}

	renderCard = (val, ind) => {
		return (
		<Card key={ind} index={ind} updateCard={this.updateCard} deleteCard={this.deleteCard}>
		{val}
		</Card>
		);
	}

	addCard = () => {
		var arr = this.state.cards;
		arr.push(this.refs.txtArAddCard.value);
		this.setState({cards: arr});
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-4 m-4">
						<textarea className="w-100" ref="txtArAddCard"></textarea>
					</div>
					<div className="w-100"></div>
					<div className="col-4">
						<button className="btn btn-success w-100" onClick={this.addCard}>Add Card</button>
					</div>
					<div className="w-100"></div>
					{
						this.state.cards.map(this.renderCard)
					}

				</div>
			</div>
		);
	}
}	