import React from 'react';
import AboutPic from '../images/about-pic.jpg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<div className='about'>
				<img
					className='about-pic'
					src={AboutPic}
					alt='kitchen-renovation-pic'
				/>
				<div className='about-text'>
					<p data-aos='fade-left'>
						Towers Property Renovation LLC was established in 2014 by owner,
						Brian Towers, who brings over 40 years of construction experience to
						every project.
					</p>
					<hr />
					<p data-aos='fade-left'>
						Specializing in kitchen and bath remodels, we are experienced in a
						variety of project types and scopes. In addition to construction
						know-how, we are here to assist you in developing a design that both
						expresses your personality and works within the parameters of your
						home.
					</p>
					<hr />
					<p data-aos='fade-left'>
						We have extensive experience working in high-rise condos and their
						specific construction challenges. Our ability to navigate HOA
						construction applications, building rules, permitting, insurance,
						and neighbor communication/relations makes the difference between a
						good project experience and a great project experience.
					</p>
					<hr />
					<a
						className='link credential'
						href='https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604806594&LIC=TOWERPR796QC&SAW='
						target='_blank'>
						Credential Link
					</a>
					<p data-aos='fade-left'>
						TPR can help you make your vision a reality so you can…
					</p>
					<p />
					<h1 className='intro-text' data-aos='fade-left'>
						Live The Way You Want To Live
					</h1>
				</div>
			</div>
		</div>
	);
}

export default About;
