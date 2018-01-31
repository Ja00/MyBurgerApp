import React from 'react';
import imgSrc from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={imgSrc} alt="MyBurger"/>
	</div>
);

export default logo;