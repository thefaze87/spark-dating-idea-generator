import React from 'react';
import sparkLogo from '../assets/datespark-logo.svg'; // Adjust the path as needed


function Header() {
	return (
		<header className='text-center mb-8'>
			<h1 className='text-3xl font-bold text-gray-900 mb-2'>
				<img 
					src={sparkLogo} 
					alt="Spark Logo" 
					className="mx-auto mb-6 mt-10" // Adjust size as needed
				/>
			</h1>
			<p className='text-base text-gray-600'>
				AI-powered date ideas for your next adventure
			</p>
		</header>
	);
}

export default Header;
