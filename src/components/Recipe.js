import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { addShipping } from './actions/cartActions';

class Recipe extends Component {
	componentWillUnmount() {
		if (this.refs.shipping.checked) this.props.substractShipping();
	}

	handleChecked = e => {
		if (e.target.checked) {
			this.props.addShipping();
		} else {
			this.props.substractShipping();
		}
	};

	render() {
		return (
			<div className="container">
				<div className="collection">
					<li className="collection-item">
						<label>
							<input
								type="checkbox"
								ref="shipping"
								onChange={this.handleChecked}
							/>
							<span className="ml-12">Shipping(+12$)</span>
						</label>
					</li>
					<li className="collection-item">
						<b>Total: {this.props.total} $</b>
					</li>
				</div>
				<div className="ml-13 my">
					<Button
						variant="contained"
						color="primary"
						//className={classes.button}
					>
						Check Out
          </Button>
          <br/>
          <br/>
          <br/>
          <br/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		addedItems: state.addedItems,
		total: state.total
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addShipping: () => {
			dispatch({ type: 'ADD_SHIPPING' });
		},
		substractShipping: () => {
			dispatch({ type: 'SUB_SHIPPING' });
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Recipe);
