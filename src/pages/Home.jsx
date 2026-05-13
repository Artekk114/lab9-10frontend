import React from 'react';
import TrainList from '../components/TrainList';

export default function Home() {
  return (
    <main>
      <header style={{ backgroundColor: '#1a73e8', color: 'white', padding: '1rem 0', textAlign: 'center' }}>
        <h1>Укрзалізниця: Пошук квитків</h1>
      </header>
      <TrainList />
    </main>
  );
}