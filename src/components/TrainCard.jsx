import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TrainCard.module.css';

export default function TrainCard({ train }) {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.card}>
      <div className={styles.routeInfo}>
        <p className={styles.trainNumber}>{train.number} {train.type}</p>
        <h3 className={styles.cities}>
          {train.route.from} — {train.route.to}
        </h3>
      </div>
      
      <div className={styles.timeInfo}>
        <div><strong>Відправлення:</strong> {formatTime(train.departure)}</div>
        <div><strong>Прибуття:</strong> {formatTime(train.arrival)}</div>
        <div><small>Час у дорозі: {train.duration}</small></div>
      </div>

      <div className={styles.action}>
        {/* Підготовка до Лаб 10: маршрутизація на сторінку бронювання конкретного потяга */}
        <Link to={`/booking/${train.id}`} className={styles.bookButton}>
          Вибрати місця
        </Link>
      </div>
    </div>
  );
}