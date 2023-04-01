import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import HomePic from '../images/home-pic.JPG';

function Home(props) {
	return (
		<div className='home'>
			<style>
				{
					'.react-typewriter-text { padding: 30rem 0; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); }'
				}
				{'body {margin: 0; height: 100%; overflow: hidden;}'}
				{'.home-butt { color: #746d11; text-decoration: underline; }'}
			</style>
			<img className='home-pic' src={HomePic} alt='kitchen-pic' />
			<div>
				<TypeWriterEffect
					textStyle={{
						color: 'white',
						fontWeight: 'bold',
						fontFamily: 'Dosis',
						textAlign: 'center',
					}}
					startDelay={0}
					cursorColor='white'
					multiText={[
						'Live the Way You Want to Live...',
						'Towers Property Renovation, LLC',
					]}
					multiTextDelay={2000}
					typeSpeed={80}
				/>
			</div>
		</div>
	);
}

export default Home;
