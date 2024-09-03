import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

function ResultCard({ dateIdea }) {
	return (
		<IonCard className='w-full bg-white shadow-lg rounded-lg overflow-hidden border-2 border-yellow-400'>
			<IonCardContent className='p-6'>
				<h2 className='text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2'>
					Your Date Idea:
				</h2>
				<p className='text-gray-600 text-lg leading-relaxed'>{dateIdea}</p>
			</IonCardContent>
		</IonCard>
	);
}

export default ResultCard;
