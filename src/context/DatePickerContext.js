"use client";

import { createContext, useState, useContext } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [recurrence, setRecurrence] = useState('daily');
  const [customRecurrence, setCustomRecurrence] = useState(1);

  return (
    <DatePickerContext.Provider value={{
      selectedDate,
      setSelectedDate,
      recurrence,
      setRecurrence,
      customRecurrence,
      setCustomRecurrence
    }}>
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => useContext(DatePickerContext);
