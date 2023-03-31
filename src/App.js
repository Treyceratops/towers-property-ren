import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<style>{'body { background-color: #1b141e; }'}</style>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/gallery' element={<Gallery />} />
			</Routes>
		</div>
	);
}

export default App;
