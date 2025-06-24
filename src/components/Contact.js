import React from 'react';
import Email from '../images/mail-icon.png';
import Phone from '../images/phone-icon.png';
import Square from '../images/square-icon.png';
import ConnectPic from '../images/gallery-17.jpg';
import 'animate.css';

function Contact(props) {
	return (
		<div className='contact'>
			<style>{'.contact-butt { text-decoration: underline dotted; }'}</style>
			<p>Contact: brian towers</p>
			{/* <img
				className='contact-pic animate__animated animate__fadeIn'
				src={ConnectPic}
				alt='kitchen-pic'
			/> */}
			<div className='contact-tower'>
				<img className='icon' src={Email} alt='email-icon' />
				{/* <a
					className='link animate__animated animate__fadeIn'
					href='mailto:brian@tprenovate.com'
					subject='HTML link'>
					brian@tprenovate.com
				</a> */}
				{/* <p /> */}
				<img className='icon' src={Phone} alt='phone-icon' />
				{/* <a
					className='link animate__animated animate__fadeIn'
					href='tel:206-850-7636'>
					206-850-7636
				</a> */}
				<img className='icon' src={Square} alt='square-icon' />
				<img className='icon' src={Square} alt='square-icon' />
				<img className='icon' src={Square} alt='square-icon' />
				<img className='icon' src={Square} alt='square-icon' />
			</div>
		</div>
	);
}

export default Contact;
