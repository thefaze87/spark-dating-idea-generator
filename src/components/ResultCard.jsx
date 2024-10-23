import React from 'react';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';

function ResultCard({ dateIdea, onGenerateAnother, isRegenerating }) {
	const handleGenerateAnother = () => {
		onGenerateAnother("Generate a different date idea");
	};

	return (
		<IonCard className="!rounded-xl !shadow-md !overflow-hidden">
			<IonCardContent className="!p-6">
				<h2 className="!text-3xl !font-bold !text-gray-900 !mb-4">
					Your Perfect Date
				</h2>
				<div className={`!bg-gray-100 !rounded-lg !p-4 !mb-4 ${isRegenerating ? 'animate-pulse' : ''}`}>
					{isRegenerating ? (
						<div className="h-20 bg-gray-200 rounded"></div>
					) : (
						<p className="!text-base !text-gray-700 !leading-relaxed">{dateIdea}</p>
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
