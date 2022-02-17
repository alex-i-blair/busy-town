import { render, screen } from '@testing-library/react';
import TrafficLight from './TrafficLight';

test('if color is red className of div is "red circle on"', () => {
  const red = 'red';

  render(<TrafficLight color={red} />);

  const divRed = screen.getByTitle('light-color-red');
  expect(divRed.className).toBe('red circle on');
});

test('if color is green className of div is "green circle on"', () => {
  const green = 'green';

  render(<TrafficLight color={green} />);

  const divGreen = screen.getByTitle('light-color-green');
  expect(divGreen.className).toBe('green circle on');
});

test('if color is yellow className of div is "yellow circle on"', () => {
  const yellow = 'yellow';

  render(<TrafficLight color={yellow} />);

  const divYellow = screen.getByTitle('light-color-yellow');
  expect(divYellow.className).toBe('yellow circle on');
});
