import React from 'react';
import homePic from '../images/home-pic.JPG';

function Home(props) {
	return (
		<div className='home'>
			<img className='shadow' src={homePic} alt='home-pic' />
			<h1 className='centered'>Live the way you want to live</h1>
		</div>
	);
}

export default Home;
