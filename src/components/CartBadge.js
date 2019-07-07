import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles(theme => ({
	badge: {
		top: '30%',
		right: -5,
		// The border color match the background color.
		border: `2px solid ${
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[900]
		}`
	}
}))(Badge);

export default function CustomizedBadges(props) {
	return (
		<IconButton aria-label="Cart" style={{ color: 'white' }}>
			<StyledBadge badgeContent={props.items} color="primary">
				<ShoppingCartIcon />
			</StyledBadge>
		</IconButton>
	);
}
