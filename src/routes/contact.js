import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='container mx-auto max-w-2xl px-5 pt-6'>
      <h1 className='text-3xl font-medium font-display text-center'>
        Contact Us
      </h1>

      <div className='mt-6 max-w-xl mx-auto flex gap-5'></div>
    </div>
  );
};

export default Contact;
