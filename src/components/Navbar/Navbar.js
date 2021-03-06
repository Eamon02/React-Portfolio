import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
// import '../../sass/main.css';

class Navbar extends Component {
	state = {
		clicked: false,
	};

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className='NavbarItem'>
				<h1 className='NavbarItem__logo'>
					React<i className='NavbarItem__ fab fa-react'></i>
				</h1>
				<div
					className='NavbarItem__menu-icon'
					onClick={this.handleClick}
				>
					<i
						className={
							this.state.clicked
								? 'fas fa-times'
								: 'fas fa-bars'
						}
					></i>
				</div>
				<ul
					className={
						this.state.clicked
							? 'nav-menu active'
							: 'nav-menu'
					}
				>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a
									className={item.cName}
									href={item.url}
								>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
