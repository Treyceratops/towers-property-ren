import React from 'react';

function About(props) {
	return (
		<div className='centered'>
			<div className='about'>
				<div className='about-text'>
					<p>
						Towers Property Renovation LLC was officially established as a
						licensed general contractor in 2014 however our experience extends
						back to 1982 when the owner began from the ground up working in the
						industry.
					</p>
					<p>
						Although excelling in all scopes of work TPR specializes in kitchen
						and bath remodel offering personalized design, form and function.{' '}
					</p>
					<p>
						Our extensive experience in the high-rise condo environment ensures
						peace of mind with proper preparation for neighbors, HOA
						requirements and safety considerations.{' '}
					</p>
				</div>
			</div>
			<a
				className='link'
				href='https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604806594&LIC=TOWERPR796QC&SAW='
				target='_blank'>
				Credential Link
			</a>
		</div>
	);
}

export default About;
