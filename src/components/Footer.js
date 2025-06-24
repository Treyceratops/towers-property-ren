import React from 'react';
import Towers from '../images/towers.png';

function Footer(props) {
	return (
		<div className='footer'>
			<div className='foot-text'>
				<p>Towers Property Renovation LLC</p>
				<p>Phone:</p>
				<a href='tel:206-850-7636'>206-850-7636</a>
				<p>E-mail:</p>{' '}
				<a
					className='contact-link'
					href='mailto:brian@tprenovate.com'
					subject='HTML link'
					rel='noreferrer'>
					{/* <button className='contact-button'>CONTACT</button> */}
					brian@tprenovate.com
				</a>
			</div>
		</div>
	);
}

export default Footer;
