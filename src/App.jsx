import React, { useState, useEffect } from 'react';
import { IonApp, IonContent } from '@ionic/react';
import axios from 'axios';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import './App.scss';

function App() {
	const [dateIdea, setDateIdea] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [apiKey, setApiKey] = useState('');
	const [isRegenerating, setIsRegenerating] = useState(false);

	useEffect(() => {
		const key = import.meta.env.VITE_OPENAI_API_KEY;
		console.log('API Key length:', key ? key.length : 'not found');
		setApiKey(key);
	}, []);

	const generateDateIdea = async (userInput) => {
		if (dateIdea) {
			setIsRegenerating(true);
		} else {
			setIsLoading(true);
		}
		try {
			if (!apiKey) {
				throw new Error('API key is missing');
			}

			console.log('Sending request to OpenAI API...');
			const response = await axios.post(
					'https://api.openai.com/v1/chat/completions',
					{
						model: 'gpt-3.5-turbo',
						messages: [
							{
								role: 'system',
								content:
									'You are a helpful assistant that generates unique date night ideas.',
							},
							{
								role: 'user',
								content: `Generate a unique date night idea based on the following input: ${userInput}`,
							},
						],
						max_tokens: 100,
						n: 1,
						temperature: 0.7,
					},
					{
						headers: {
							Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
							'Content-Type': 'application/json',
						},
					}
				);
			console.log('API Response:', response.data);
			setDateIdea(response.data.choices[0].message.content.trim());
		} catch (error) {
			console.error('Error generating date idea:', error);
			if (error.response) {
				console.error('Error data:', error.response.data);
				console.error('Error status:', error.response.status);
				console.error('Error headers:', error.response.headers);
			} else if (error.request) {
				console.error('Error request:', error.request);
			} else {
				console.error('Error message:', error.message);
			}
			setDateIdea(
				'Sorry, there was an error generating a date idea. Please try again.'
			);
		}
		setIsLoading(false);
		setIsRegenerating(false);
	};

	return (
		<IonApp className="spark-app">
			<IonContent className="ion-padding" style={{ '--background': '#f2f2f7' }}>
				<div className="max-w-md mx-auto">
					<Header />
					<InputForm onSubmit={generateDateIdea} isLoading={isLoading} isRegenerating={isRegenerating} />
					{dateIdea && <ResultCard dateIdea={dateIdea} onGenerateAnother={generateDateIdea} isRegenerating={isRegenerating} />}
				</div>
				<div className="max-w-md mx-auto mt-4">
					<p className='text-xs text-gray-500'>Results powered by ChatGPT</p>
				</div>
			</IonContent>
		</IonApp>
	);
}

export default App;
