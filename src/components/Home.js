import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

function Home(props) {
	return (
		<div className='home'>
			<style>
				{'.react-typewriter-text { padding: 30rem 0 ; }'}
				{'body {margin: 0; height: 100%; overflow: hidden;}'}
			</style>
			{/* <h1 className='intro-text'>Live the Way You Want to Live...</h1> */}
			<div>
				<TypeWriterEffect
					textStyle={{
						color: 'white',
						fontFamily: 'Dosis',
						textAlign: 'center',
					}}
					startDelay={0}
					cursorColor='white'
					multiText={[
						'Towers Property Renovation, LLC',
						'Live the Way You Want to Live...',
						'Towers Property Renovation, LLC',
						'Live the Way You Want to Live...',
						'Towers Property Renovation, LLC',
						'Live the Way You Want to Live...',
						'Towers Property Renovation, LLC',
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
