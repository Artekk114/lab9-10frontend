import React, { useState } from 'react';
import TrainCard from './TrainCard';
import { trainsData } from '../data/trains';
import styles from './TrainList.module.css';

export default function TrainList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trainsData.filter((train) => {
    const query = searchQuery.toLowerCase();
    const fromCity = train.route.from.toLowerCase();
    const toCity = train.route.to.toLowerCase();
    const trainNumber = train.number.toLowerCase();

    return (
      fromCity.includes(query) || 
      toCity.includes(query) || 
      trainNumber.includes(query)
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Пошук за містом відправлення, прибуття або номером потяга..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.listSection}>
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <div className={styles.noResults}>
            <h3>Рейсів не знайдено</h3>
            <p>Спробуйте змінити критерії пошуку.</p>
          </div>
        )}
      </div>
    </div>
  );
}