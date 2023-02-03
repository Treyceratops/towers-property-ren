import React from 'react';

function About(props) {
	return (
		<div>
			<div className='about'>
				<div className='about-text'>
					<p>
						Towers Property Renovation LLC was established in 2014 by owner,
						Brian Towers, who brings over 40 years of construction experience to
						every project.
					</p>
					<hr />
					<p>
						Specializing in kitchen and bath remodels, we are experienced in a
						variety of project types and scopes. In addition to construction
						know-how, we are here to assist you in developing a design that both
						expresses your personality and works within the parameters of your
						home.
					</p>
					<hr />
					<p>
						We have extensive experience working in high-rise condos and their
						specific construction challenges. Our ability to navigate HOA
						construction applications, building rules, permitting, insurance,
						utility coordination, and neighbor communication/relations makes the
						difference between a good project experience and a great project
						experience.
					</p>
					<hr />
					<p>TPR can help you make your vision a reality so you can…</p>
					<h1 className='intro-text'>Live The Way You Want To Live</h1>
					<a
						className='link credential'
						href='https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604806594&LIC=TOWERPR796QC&SAW='
						target='_blank'>
						Credential Link
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
