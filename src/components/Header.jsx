import React from 'react';

function Header() {
	return (
		<header className='text-center mb-12'>
			<h1 className='text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl'>
				Spark <span className='text-yellow-400'>⚡</span>
			</h1>
			<p className='mt-4 text-xl text-gray-600 sm:text-2xl max-w-xl mx-auto'>
				Get inspired for your next date with our AI-powered idea generator.
			</p>
		</header>
	);
}

export default Header;
