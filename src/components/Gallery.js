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
import gallery16 from '../images/gallery-16.jpg';
import gallery17 from '../images/gallery-17.jpg';
import gallery18 from '../images/gallery-18.jpg';
import gallery19 from '../images/gallery-19.jpg';
import gallery20 from '../images/gallery-20.jpg';
import gallery21 from '../images/gallery-21.jpg';
import gallery22 from '../images/gallery-22.jpg';
import gallery23 from '../images/gallery-23.jpg';
import gallery24 from '../images/gallery-24.jpg';
import gallery25 from '../images/gallery-25.jpg';
import gallery26 from '../images/gallery-26.jpg';

function Gallery(props) {
	return (
		<div className='gallery'>
			<style>
				{'.carousel-indicators { bottom: -3rem ; }'}
				{'.gallery-butt { color: #746d11; text-decoration: underline; }'}
			</style>
			<Carousel fade>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery1} alt='First slide' />

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>Pacific Grand Condos Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery2} alt='Second slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Pacific Grand Condos Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery3} alt='Third slide' />

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>Olive 8 Condominiums Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery4} alt='Fourth slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Olive 8 Condominiums Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery5} alt='Fifth slide' />

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>Queen Anne Residence Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery6} alt='Sixth slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Queen Anne Residence Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery7} alt='Seventh slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Queen Anne Residence Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery8} alt='Eighth slide' />

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>98 Union Condos Bathroom #1</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery9} alt='Ninth slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>98 Union Condos Bathroom #1</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery10} alt='Tenth slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>98 Union Condos Bathroom #1</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery11} alt='Eleventh slide' />

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>98 Union Condos Bathroom #2</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={gallery12} alt='Twelfth slide' />

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>98 Union Condos Bathroom #3</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery13}
						alt='Thirteenth slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>98 Union Condos Bathroom #3</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery14}
						alt='Fourteenth slide'
					/>

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>98 Union Condos Shower #4</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery15}
						alt='Fifteenth slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>98 Union Condos Shower #4</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery16}
						alt='Sixteenth slide'
					/>

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>Bellora Condos Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery17}
						alt='Seventeenth slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Bellora Condos Kitchen</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery18}
						alt='Eighteenth slide'
					/>

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>Entire 5,770 Square Foot House at The Highlands Paint</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery19}
						alt='Nineteenth slide'
					/>

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>Living Room at The Highlands Paint</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery20}
						alt='Twentieth slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Living Room at The Highlands – 1 Paint</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery21}
						alt='Twenty First slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>Living Room at The Highlands – 2 Paint</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery22}
						alt='Twenty Second slide'
					/>

					<Carousel.Caption>
						<h3 className='before'>BEFORE</h3>
						<h5>1st & 2nd floor decks at The Highlands Intrusion Repair</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery23}
						alt='Twenty Third slide'
					/>

					<Carousel.Caption>
						<h3 className='during'>DURING</h3>
						<h5>1st & 2nd floor decks at The Highlands – 1 Intrusion Repair</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery24}
						alt='Twenty Fourth slide'
					/>

					<Carousel.Caption>
						<h3 className='during'>DURING</h3>
						<h5>1st & 2nd floor decks at The Highlands – 2 Intrusion Repair</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery25}
						alt='Twenty Fifth slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>1st & 2nd floor decks at The Highlands – 1 Intrusion Repair</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={gallery26}
						alt='Twenty Sixth slide'
					/>

					<Carousel.Caption>
						<h3 className='after'>AFTER</h3>
						<h5>1st & 2nd floor decks at The Highlands – 2 Intrusion Repair</h5>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Gallery;
