import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import DatePicker from './DatePicker.js';
import { DatePickerProvider } from '../context/DatePickerContext';
import '@testing-library/jest-dom';
import DatePicker from './DatePicker.';

// Utility to wrap DatePicker with context provider
const renderWithProvider = (component) => {
  return render(
    <DatePickerProvider>
      {component}
    </DatePickerProvider>
  );
};

describe('DatePicker Component', () => {
  test('renders date input and recurrence options', () => {
    renderWithProvider(<DatePicker />);
    
    // Check if date input field is rendered
    const dateInput = screen.getByLabelText('Pick a date');
    expect(dateInput).toBeInTheDocument();

    // Check if recurrence options are rendered
    const recurrenceText = screen.getByText(/Next Dates:/i);
    expect(recurrenceText).toBeInTheDocument();
  });

  test('changes the date when user selects a new date', () => {
    renderWithProvider(<DatePicker />);

    // Find the date input field
    const dateInput = screen.getByLabelText('Pick a date');
    
    // Simulate user changing date
    fireEvent.change(dateInput, { target: { value: '2024-10-15' } });

    // Assert that the input value has changed
    expect(dateInput.value).toBe('2024-10-15');
  });

  test('updates the highlighted dates when recurrence is set', () => {
    renderWithProvider(<DatePicker />);

    // Find the recurrence options component (simple check)
    const recurrenceText = screen.getByText(/Next Dates:/i);
    expect(recurrenceText).toBeInTheDocument();
    
    // You can implement more specific recurrence logic tests here based on your needs
  });
});

