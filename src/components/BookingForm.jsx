import React, { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({ onSubmit, selectedCount }) {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3>Оформлення квитків (Обрано: {selectedCount})</h3>
            <div className={styles.inputGroup}>
                <label>ПІБ пасажира</label>
                <input 
                    type="text" 
                    required 
                    minLength={3}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Іванов Іван Іванович"
                />
            </div>
            <div className={styles.inputGroup}>
                <label>Номер телефону</label>
                <input 
                    type="tel" 
                    required 
                    pattern="[0-9]{10,12}"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="380XXXXXXXXX"
                />
            </div>
            <div className={styles.inputGroup}>
                <label>Email для квитків</label>
                <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={selectedCount === 0}>
                Підтвердити бронювання
            </button>
        </form>
    );
}