import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reserveTable } from './store';
import './bok.css';
const BookingPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create reservation object
    const reservation = {
      name,
      email,
      date,
      time,
      guests,
    };

    // Dispatch action to reserve table
    dispatch(reserveTable(reservation));

    // Clear form inputs
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests(1);
  };

  return (
    <center>
    <div className='bod9'>
    <form className="reservation-form" onSubmit={handleSubmit}>
  
      <h2>Table Reservation</h2>
      <div className='clr'>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          min="1"
          max="10"
          required
        />
      </div>
      <br/>
      <div className="form-group">
        <button type="submit"  className='bg-red-800 text-white-100 py-[8px] px-[12px] rounded-[8px] border border-red-700'>Reserve</button>
      </div>
      </div>
    </form>
    </div>
    </center>
  );
};

export default BookingPage;