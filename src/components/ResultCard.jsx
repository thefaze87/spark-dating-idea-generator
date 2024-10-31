import React from 'react';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';

function ResultCard({ dateIdea, onGenerateAnother, isRegenerating }) {
	const handleGenerateAnother = () => {
		onGenerateAnother("Generate a different date idea");
	};

	return (
		<IonCard className="!rounded-xl !shadow-md !overflow-hidden !mx-0 !mb-2">
			<IonCardContent className="!p-4">
				<h2 className="!text-2xl !font-bold !text-gray-900 !mb-3">
					Your Perfect Date
				</h2>
				<div className={`!bg-gray-100 !rounded-lg !p-3 !mb-3 ${isRegenerating ? 'animate-pulse' : ''}`}>
					{isRegenerating ? (
						<div className="h-16 bg-gray-200 rounded"></div>
					) : (
						<p className="!text-sm !text-gray-700 !leading-relaxed">{dateIdea}</p>
					)}
				</div>
				<div className="!flex !justify-center !items-center">
					<IonButton 
						fill="clear" 
						color="primary" 
						className="!text-sm !font-semibold"
						onClick={handleGenerateAnother}
						disabled={isRegenerating}
					>
						<span className="!mr-1">🔄 Regenerate Idea</span>
					</IonButton>
				</div>
			</IonCardContent>
		</IonCard>
	);
}

export default ResultCard;
