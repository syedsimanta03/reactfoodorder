import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




class Home extends Component {
	handleClick = id => {
    this.props.addToCart(id);
	};

	render() {
		let itemList = this.props.items.map(item => {

			return (
				<div className="cards">
					<Card className="card" key={item.id}>
						<CardMedia className="media">
							<img src={item.img} alt={item.title} width="auto" height="280" />
						</CardMedia>

						<CardContent>
							<Typography variant="h6">{item.title}</Typography>
							<span
								to="/"
								className="header__media__btn__btn--3"
								onClick={() => {
									this.handleClick(item.id);
								}}
							>
								<i className="material-icons">add</i>
							</span>

							<div className="card-content">
								<p>{item.desc}</p>
								<p className="pt">
									<b>Price: {item.price}$</b>
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			);
		});

		return (
			<div className="mt">
				<Typography variant="h4" className="center">
					All Our Best Fastfood Items
				</Typography>
				<div className="box">{itemList}</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		items: state.items
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addToCart: id => {
			dispatch(addToCart(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
