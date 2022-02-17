import { render, screen } from '@testing-library/react';
import Vehicle from './Vehicle';

test('if vehicle === "car" render car emoji', () => {
  const vehicle = 'car';
  render(<Vehicle vehicle={vehicle} />);
  const emoji = screen.getByTitle('vehicle-test');
  expect(emoji.textContent).toBe('🚗');
});

test('if vehicle === "truck" render truck emoji', () => {
  const vehicle = 'truck';
  render(<Vehicle vehicle={vehicle} />);
  const emoji = screen.getByTitle('vehicle-test');
  expect(emoji.textContent).toBe('🚚');
});

test('if vehicle === "bus" render bus emoji', () => {
  const vehicle = 'bus';
  render(<Vehicle vehicle={vehicle} />);
  const emoji = screen.getByTitle('vehicle-test');
  expect(emoji.textContent).toBe('🚌');
});

test('if vehicle === "motorcycle" render motorcycle emoji', () => {
  const vehicle = 'motorcycle';
  render(<Vehicle vehicle={vehicle} />);
  const emoji = screen.getByTitle('vehicle-test');
  expect(emoji.textContent).toBe('🏍️');
});
