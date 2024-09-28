"use client";

import React from 'react';
import { format, addDays, addMonths, addYears } from 'date-fns';
import { useDatePicker } from '../context/DatePickerContext';
import RecurrenceOptions from './RecurrenceOptions';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePicker = () => {
  const { selectedDate, setSelectedDate, recurrence, customRecurrence } = useDatePicker();

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const getNextDates = () => {
    let dates = [];
    let currentDate = selectedDate;
    for (let i = 0; i < 10; i++) {
      currentDate = getNextDate(currentDate);
      dates.push(currentDate);
    }
    return dates;
  };

  const getNextDate = (date) => {
    switch (recurrence) {
      case 'daily':
        return addDays(date, customRecurrence);
      case 'weekly':
        return addDays(date, customRecurrence * 7);
      case 'monthly':
        return addMonths(date, customRecurrence);
      case 'yearly':
        return addYears(date, customRecurrence);
      default:
        return date;
    }
  };

  return (
    <div className="p-4">
      <input type="date" value={format(selectedDate, 'yyyy-MM-dd')} onChange={handleDateChange} className="border p-2" />
      <RecurrenceOptions />
      <div className="mt-4">
        <p>Next Dates:</p>
        <Calendar
          tileClassName={({ date, view }) => {
            if (getNextDates().find(d => format(d, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'))) {
              return 'highlight';
            }
          }}
        />
      </div>
    </div>
  );
};

export default DatePicker;
