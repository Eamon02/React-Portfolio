import React from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<div className="contend">Content</div>
			<Navbar />
		</>
	);
}

export default App;
