import React, { useState } from 'react';
import { IonInput, IonButton, IonSpinner } from '@ionic/react';

function InputForm({ onSubmit, isLoading }) {
	const [userInput, setUserInput] = useState('');

	const handleSubmit = () => {
		if (userInput.trim()) {
			onSubmit(userInput);
		}
	};

	return (
		<div className='mb-8 space-y-4'>
			<IonInput
				value={userInput}
				placeholder='E.g., Outdoor activity for a sunny day...'
				onIonChange={(e) => setUserInput(e.detail.value)}
				className="custom-input"
			/>
			<IonButton
				expand='block'
				onClick={handleSubmit}
				className='w-full h-14 text-lg font-semibold rounded-lg overflow-hidden'
				color='warning'
				disabled={isLoading || !userInput.trim()}
			>
				{isLoading ? <IonSpinner name='crescent' /> : 'Generate Date Idea'}
			</IonButton>
		</div>
	);
}

export default InputForm;
