import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { getBookedSeats, saveBooking } from '../services/BookingService';
import { trainsData } from '../data/trains'; 
import styles from './Booking.module.css';

const MOCK_WAGONS = [
    { id: 1, type: 'Купе', totalSeats: 36 },
    { id: 2, type: 'Плацкарт', totalSeats: 54 },
    { id: 3, type: 'Люкс', totalSeats: 18 }
];

export default function Booking() {
    const { trainId } = useParams();
    const navigate = useNavigate();
    
    const [train, setTrain] = useState(null);
    const [selectedWagon, setSelectedWagon] = useState(MOCK_WAGONS[0]);
    const [bookedSeats, setBookedSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const currentTrain = trainsData.find(t => t.id === trainId);
        if (!currentTrain) {
            navigate('/');
            return;
        }
        setTrain(currentTrain);
        
        
        const booked = getBookedSeats(trainId, selectedWagon.id);
        setBookedSeats(booked);
        setSelectedSeats([]); 
    }, [trainId, selectedWagon.id, navigate]);

    const handleWagonSelect = (wagonId) => {
        const wagon = MOCK_WAGONS.find(w => w.id === wagonId);
        setSelectedWagon(wagon);
    };

    const handleSeatClick = (seatNum) => {
        setSelectedSeats(prev => {
            if (prev.includes(seatNum)) {
                return prev.filter(s => s !== seatNum); 
            }
            if (prev.length >= 4) {
                toast.warning("Можна обрати не більше 4 місць за раз!");
                return prev;
            }
            return [...prev, seatNum]; 
        });
    };

    const handleBookingSubmit = (userData) => {
        saveBooking(trainId, selectedWagon.id, selectedSeats, userData);
        toast.success(`Успішно! Квитки (${selectedSeats.join(', ')}) відправлено на ${userData.email}`);
        
        
        setBookedSeats([...bookedSeats, ...selectedSeats]);
        setSelectedSeats([]);
    };

    if (!train) return <div>Завантаження...</div>;

    return (
        <div className={styles.bookingContainer}>
            <button onClick={() => navigate('/')} className={styles.backBtn}>← Назад до пошуку</button>
            
            <div className={styles.header}>
                <h1>Потяг {train.number}: {train.route.from} — {train.route.to}</h1>
                <p>Відправлення: {new Date(train.departure).toLocaleString('uk-UA')}</p>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.selectionArea}>
                    <WagonSelector 
                        wagons={MOCK_WAGONS} 
                        selectedWagon={selectedWagon.id} 
                        onSelect={handleWagonSelect} 
                    />
                    
                    <h3>Схема вагона №{selectedWagon.id} ({selectedWagon.type})</h3>
                    <SeatMap 
                        totalSeats={selectedWagon.totalSeats}
                        bookedSeats={bookedSeats}
                        selectedSeats={selectedSeats}
                        onSeatClick={handleSeatClick}
                    />
                </div>

                <div className={styles.formArea}>
                    <BookingForm 
                        onSubmit={handleBookingSubmit} 
                        selectedCount={selectedSeats.length} 
                    />
                </div>
            </div>
        </div>
    );
}