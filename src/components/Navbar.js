import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartBadge from './../components/CartBadge';


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		color: 'white'
	}
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.root}>
				<AppBar position="fixed" color="secondary">
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							<Link to="/" className="link-w logo">
								<i class="material-icons">fastfood</i> Reestora
							</Link>
						</Typography>
						<ul className="shop-items">
							<li>
								<Link to="/" className="link-w">
									Shop
								</Link>
							</li>
							<li>
								<Link to="/cart" className="link-w ml-1">
									<CartBadge/>
								</Link>
							</li>
						</ul>
					</Toolbar>
				</AppBar>
			</div>
			<div class="header header__content">
				<Typography variant="h4">
					<p class="display-1">
						Good food choices are good <br />
						investments.
					</p>
				</Typography>

				<p className="mt">
					There is a powerful need for symbolism, and that means the
					architecture must have <br />
					something that appeals to the human heart.{' '}
				</p>

				<div class="header__media">
					<button class="header__media__btn header__media__btn__btn--1 btn-primary">
						Order Now
					</button>

					<p>Watch our story</p>

					<button class="header__media__btn header__media__btn__btn--2">
						<i class="fas fa-play" />
					</button>
				</div>
			</div>
		</Fragment>
	);
}
