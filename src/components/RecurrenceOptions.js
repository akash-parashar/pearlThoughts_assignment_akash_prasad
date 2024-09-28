"use client";

import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence, customRecurrence, setCustomRecurrence } = useDatePicker();

  const handleRecurrenceChange = (e) => {
    setRecurrence(e.target.value);
  };

  const handleCustomRecurrenceChange = (e) => {
    setCustomRecurrence(e.target.value);
  };

  return (
    <div className="flex items-center mt-2">
      <select value={recurrence} onChange={handleRecurrenceChange} className="border p-2">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <input type="number" value={customRecurrence} onChange={handleCustomRecurrenceChange} className="border p-2 ml-2" />
    </div>
  );
};

export default RecurrenceOptions;
