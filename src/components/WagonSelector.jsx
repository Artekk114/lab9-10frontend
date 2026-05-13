import React from 'react';
import styles from './WagonSelector.module.css';

export default function WagonSelector({ wagons, selectedWagon, onSelect }) {
    return (
        <div className={styles.container}>
            <h3>Оберіть вагон:</h3>
            <div className={styles.wagonList}>
                {wagons.map(wagon => (
                    <button
                        key={wagon.id}
                        className={`${styles.wagonBtn} ${selectedWagon === wagon.id ? styles.active : ''}`}
                        onClick={() => onSelect(wagon.id)}
                    >
                        Вагон {wagon.id} ({wagon.type})
                    </button>
                ))}
            </div>
        </div>
    );
}