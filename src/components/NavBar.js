import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div className='nav-bar'>
			<Link to='/'>
				<button className='nav-butt'>Home</button>
			</Link>
			<Link to='/contact'>
				<button className='nav-butt'>Contact</button>
			</Link>
			<Link to='/about'>
				<button className='nav-butt'>About</button>
			</Link>
			<Link to='/gallery'>
				<button className='nav-butt'>Gallery</button>
			</Link>
		</div>
	);
}

export default NavBar;
