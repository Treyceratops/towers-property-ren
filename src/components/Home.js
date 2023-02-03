import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

function Home(props) {
	return (
		<div className='home'>
			{/* <h1 className='intro-text'>Live the Way You Want to Live...</h1> */}
			<TypeWriterEffect
				textStyle={{
					color: 'white',
					// fontSize: '2em',
					fontFamily: 'Sacramento',
				}}
				// startDelay={0}
				cursorColor='white'
				multiText={[
					'Towers Property Renovation',
					'Live the Way You Want to Live...',
				]}
				multiTextDelay={2000}
				typeSpeed={60}
			/>
		</div>
	);
}

export default Home;
