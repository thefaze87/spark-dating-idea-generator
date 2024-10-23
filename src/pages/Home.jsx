import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ResultCard from '../components/ResultCard';

const Home = () => {
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
    // Move the generateDateIdea function from App.jsx to here
    // ... (copy the entire function)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DateSpark</IonTitle>
        </IonToolbar>
      </IonHeader>
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
    </IonPage>
  );
};

export default Home;

