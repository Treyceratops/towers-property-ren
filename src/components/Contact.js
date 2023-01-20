import React from 'react';
import Email from '../images/email-icon.png';
import Phone from '../images/phone-icon.png';

function Contact(props) {
	return (
		<div>
			<h1>
				<p />
				Towers Property Renovation LLC
				<p />
				<img className='icon email' src={Email} alt='email-icon' />
				<a
					className='link'
					href='mailto:brian@tprenovate.com'
					subject='HTML link'>
					brian@tprenovate.com
				</a>
				<p />
				<img className='icon' src={Phone} alt='phone-icon' />
				<a className='link' href='tel:206-850-7636'>
					206-850-7636
				</a>
			</h1>
		</div>
	);
}

export default Contact;
