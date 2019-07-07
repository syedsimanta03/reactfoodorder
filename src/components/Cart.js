import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {
	removeItem,
	addQuantity,
	subtractQuantity
} from './actions/cartActions';
import Recipe from './Recipe';
class Cart extends Component {
	//to remove the item completely
	handleRemove = id => {
		this.props.removeItem(id);
	};
	//to add the quantity
	handleAddQuantity = id => {
		this.props.addQuantity(id);
	};
	//to substruct from the quantity
	handleSubtractQuantity = id => {
		this.props.subtractQuantity(id);
	};
	render() {
		let addedItems = this.props.items.length ? (
			this.props.items.map(item => {
				return (
					<Fragment>
						<li className="collection-item avatar" key={item.id}>
							<div className="item-img">
								<img src={item.img} alt={item.img} />
							</div>

							<div className="item-desc">
								<h3>{item.title}</h3>
								<p className="ml-12">
									<b>Price: {item.price}$</b>
								</p>
								<p className="ml-12">
									<b>Quantity: {item.quantity}</b>
								</p>
								<div className="add-remove">
									<Link to="/cart">
										<i
											className="material-icons"
											onClick={() => {
												this.handleAddQuantity(item.id);
											}}
										>
											arrow_drop_up
										</i>
									</Link>
									<Link to="/cart">
										<i
											className="material-icons"
											onClick={() => {
												this.handleSubtractQuantity(item.id);
											}}
										>
											arrow_drop_down
										</i>
									</Link>
								</div>
								<button
									className="header__media__btn__btn--1"
									onClick={() => {
										this.handleRemove(item.id);
									}}
								>
									Remove
								</button>
							</div>
						</li>
						<hr />
					</Fragment>
				);
			})
		) : (
			<p className="ml-13">Nothing.</p>
		);
		return (
			<div className="container">
				<div className="cart">
					<Typography variant="h5" className="my">
						<p className="ml-13"> You have ordered:</p>
					</Typography>
					<ul className="collection my">{addedItems}</ul>
				</div>
				<Recipe />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.addedItems
		//addedItems: state.addedItems
	};
};
const mapDispatchToProps = dispatch => {
	return {
		removeItem: id => {
			dispatch(removeItem(id));
		},
		addQuantity: id => {
			dispatch(addQuantity(id));
		},
		subtractQuantity: id => {
			dispatch(subtractQuantity(id));
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
