import React from 'react';
import sparkLogo from '../assets/datespark-logo.svg'; // Adjust the path as needed


function Header() {
	return (
		<header className='text-center mb-12'>
			<h1 className='text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl'>
			<img 
				src={sparkLogo} 
				alt="Spark Logo" 
				className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32" // Adjust size as needed
			/>
			</h1>
			<p className='mt-4 text-xl text-gray-600 sm:text-2xl max-w-xl mx-auto'>
				Get inspired for your next date with our AI-powered idea generator.
			</p>
		</header>
	);
}

export default Header;
