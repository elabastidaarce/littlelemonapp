import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

test('render Heading component', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();

  const menuButton = screen.getByText("Order Menu");
  fireEvent.click(menuButton);

  const reservationButton = screen.getByRole('button', {
    name: /On Click/i
  });
  fireEvent.click(reservationButton);
});


test('render Form component', () => {
  const availableTimes = [];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  const headingElementChooseDate = screen.getByLabelText('Date:', {exact:false});
  expect(headingElementChooseDate).toBeInTheDocument();
});