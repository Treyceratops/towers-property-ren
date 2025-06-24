import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/tpr-logo.png';

function NavBar(props) {
	return (
		<div className='nav-bar'>
			<img className='tpr-logo' src={Logo} alt='logo' />
			<Link to='/'>
				<button className='nav-butt home-butt'>Home</button>
			</Link>
			{/* <Link to='/contact'>
				<button className='nav-butt contact-butt'>Contact</button>
			</Link> */}
			<Link to='/about'>
				<button className='nav-butt about-butt'>About</button>
			</Link>
			<Link to='/gallery'>
				<button className='nav-butt gallery-butt'>Gallery</button>
			</Link>
		</div>
	);
}

export default NavBar;
