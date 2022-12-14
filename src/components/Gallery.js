import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/home-pic.JPG';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/about-pic.jpg';
import gallery5 from '../images/gallery-5.jpg';
import gallery6 from '../images/gallery-6.jpg';
import gallery7 from '../images/gallery-7.jpg';
import gallery8 from '../images/gallery-8.jpg';
import gallery9 from '../images/gallery-9.jpg';
import gallery10 from '../images/gallery-10.jpg';
import gallery11 from '../images/gallery-11.jpg';
import gallery12 from '../images/gallery-12.jpg';
import gallery13 from '../images/gallery-13.jpg';
import gallery14 from '../images/gallery-14.jpg';
import gallery15 from '../images/gallery-15.jpg';

function Gallery(props) {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery1} alt='First slide' />

				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery2} alt='Second slide' />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery3} alt='Third slide' />

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery4} alt='Fourth slide' />

				<Carousel.Caption>
					<h3>Fourth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery5} alt='Fifth slide' />

				<Carousel.Caption>
					<h3>Fifth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery6} alt='Sixth slide' />

				<Carousel.Caption>
					<h3>Sixth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery7} alt='Seventh slide' />

				<Carousel.Caption>
					<h3>Seventh slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery8} alt='Eighth slide' />

				<Carousel.Caption>
					<h3>Eighth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery9} alt='Ninth slide' />

				<Carousel.Caption>
					<h3>Ninth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery10} alt='Tenth slide' />

				<Carousel.Caption>
					<h3>Tenth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery11} alt='Eleventh slide' />

				<Carousel.Caption>
					<h3>Eleventh slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery12} alt='Twelfth slide' />

				<Carousel.Caption>
					<h3>Twelfth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery13} alt='Thirteenth slide' />

				<Carousel.Caption>
					<h3>Thirteenth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery14} alt='Fourteenth slide' />

				<Carousel.Caption>
					<h3>Fourteenth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={gallery15} alt='Fifteenth slide' />

				<Carousel.Caption>
					<h3>Fifteenth slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Gallery;
