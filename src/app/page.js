"use client";

import React from 'react';
// import DatePicker from './components/DatePicker';
// import { DatePickerProvider } from './context/DatePickerContext';
import './globals.css';
import DatePicker from '@/components/DatePicker.';
import { DatePickerProvider } from '@/context/DatePickerContext';

const Home = () => {
  return (
    <DatePickerProvider>
      <div className=" max-w-2xl mx-auto p-10 ">
        <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
        <DatePicker />
      </div>
    </DatePickerProvider>
  );
};

export default Home;
