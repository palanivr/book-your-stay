import React, { useState } from 'react';
import './co.css';

const BookAppointment = () => {
  const [customerName, setCustomerName] = useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [issue, setIssue] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating appointment submission and validation
    if (customerName && mobileModel && issue && appointmentDate) {
      // Here you can add your logic to handle appointment submission
      // For example, you can send the appointment data to an API endpoint for processing
      setSuccessMessage('Appointment booked successfully!');
      setCustomerName('');
      setMobileModel('');
      setIssue('');
      setAppointmentDate('');
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div class="f">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="book-appointment">
    <br></br>
      <form onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <label htmlFor="mobileModel">Customer Email:</label>
        <input
          type="email"
          id="mobileModel"
          value={mobileModel}
          onChange={(e) => setMobileModel(e.target.value)}
        />
        <label htmlFor="issue">Issue:</label>
        <textarea
        id="issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        />
        <center>
        <button type="submit" className='bg-red-800 text-white-100 py-[8px] px-[12px] rounded-[8px] border border-red-700'>Submit</button>
        </center>
      </form>
    </div>
    </div>
  );
};

export default BookAppointment;