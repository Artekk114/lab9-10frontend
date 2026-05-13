import React from 'react';
import styles from './SeatMap.module.css';

export default function SeatMap({ totalSeats, bookedSeats, selectedSeats, onSeatClick }) {
    const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

    const getSeatClass = (seatNum) => {
        if (bookedSeats.includes(seatNum)) return styles.booked;
        if (selectedSeats.includes(seatNum)) return styles.selected;
        return styles.free;
    };

    return (
        <div className={styles.mapContainer}>
            <div className={styles.legend}>
                <span className={styles.free}>Вільне</span>
                <span className={styles.selected}>Обране</span>
                <span className={styles.booked}>Зайняте</span>
            </div>
            
            <div className={styles.grid}>
                {seats.map(seat => (
                    <button
                        key={seat}
                        disabled={bookedSeats.includes(seat)}
                        className={`${styles.seat} ${getSeatClass(seat)}`}
                        onClick={() => onSeatClick(seat)}
                    >
                        {seat}
                    </button>
                ))}
            </div>
        </div>
    );
}