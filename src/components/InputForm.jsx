import React, { useState } from 'react';
import { IonInput, IonButton, IonSpinner } from '@ionic/react';

function InputForm({ onSubmit, isLoading, isRegenerating }) {
	const [userInput, setUserInput] = useState('');

	const handleSubmit = () => {
		if (userInput.trim()) {
			onSubmit(userInput);
		}
	};

	return (
		<div className="mb-6">
			<div className="relative mb-4">
				<IonInput
					value={userInput}
					placeholder="E.g., Outdoor activity for a sunny day..."
					onIonChange={(e) => setUserInput(e.detail.value)}
					className="custom-input !w-full !py-3 !px-4 !bg-white !rounded-lg !shadow-sm"
				/>
			</div>
			<IonButton
				expand="block"
				onClick={handleSubmit}
				className="!w-full !h-12 !text-base !font-semibold !rounded-lg"
				style={{ '--background': '#00A848', '--color': 'white' }}
				disabled={isLoading || isRegenerating || !userInput.trim()}
			>
				{isLoading || isRegenerating ? <IonSpinner name="crescent" /> : 'Generate Date Idea'}
			</IonButton>
		</div>
	);
}

export default InputForm;
