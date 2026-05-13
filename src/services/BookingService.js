// src/services/BookingService.js

// Отримання вже заброньованих місць для конкретного вагона
export const getBookedSeats = (trainId, wagonId) => {
    const db = JSON.parse(localStorage.getItem('railway_bookings')) || {};
    const trainBookings = db[trainId] || {};
    return trainBookings[wagonId] || [];
};

// Збереження нового бронювання
export const saveBooking = (trainId, wagonId, selectedSeats, userData) => {
    const db = JSON.parse(localStorage.getItem('railway_bookings')) || {};
    
    if (!db[trainId]) db[trainId] = {};
    if (!db[trainId][wagonId]) db[trainId][wagonId] = [];
    
    // Додаємо нові місця до існуючих
    db[trainId][wagonId] = [...db[trainId][wagonId], ...selectedSeats];
    
    localStorage.setItem('railway_bookings', JSON.stringify(db));
    
    // В реальному проєкті тут би також зберігалися дані userData
    console.log("Бронь збережена для:", userData);
    return true;
};