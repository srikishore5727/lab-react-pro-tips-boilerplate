import React, { useState, useEffect } from 'react';
import './Form.css';

function RegistrationForm(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [formError, setFormError] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Dynamically update state based on the input field
    switch (id) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contact':
        setContact(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(checkError());
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit && Object.keys(formError).length === 0) {
      setSuccess(true);
    }
  }, [formError]);

  const checkError = () => {
    let error = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (firstName.length === 0) {
      error.firstName = 'Please enter your first name';
    }

    if (lastName.length === 0) {
      error.lastName = 'Please enter your last name';
    }

    if (email.length === 0) {
      error.email = 'Please enter your email';
    } else if (!regex.test(email)) {
      error.email = 'Please enter a valid email';
    }

    if (contact.length === 0) {
      error.contact = 'Please enter your contact';
    } else if (contact.length !== 10) {
      error.contact = 'Please enter a valid contact';
    }

    return error;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="items">
          {success ? <p className='successMessage'>Registration success</p> : <p></p>}
          <input type="text" id='firstName' value={firstName} onChange={handleChange} placeholder='First Name' />
          <p className='error'>{formError.firstName}</p>
          <input type="text" id='lastName' value={lastName} onChange={handleChange} placeholder='Last Name' />
          <p className="error">{formError.lastName}</p>
          <input type="text" id='email' value={email} onChange={handleChange} placeholder='Email' />
          <p className="error">{formError.email}</p>
          <input type="number" id='contact' value={contact} onChange={handleChange} placeholder='Contact' />
          <p className="error">{formError.contact}</p>
          <button type='submit'>Register</button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
