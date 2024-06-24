import { render, screen, fireEvent } from '@testing-library/react';
import WeatherFilter from './WeatherFilter';
import WeatherDisplay from './WeatherDisplay';
import WeatherData from './WeatherData';

test('renders Weather Filter', () => {
    render(<WeatherFilter />);
    const inputElement = screen.getByPlaceholderText(/Search.../i);
    expect(inputElement).toBeInTheDocument();
});

test('renders Weather Display', () => {
    render(<WeatherDisplay filterText={''} filteredWeather={WeatherData} />);
    const para = screen.getByText(/Weather Details/i);
    expect(para).toBeInTheDocument();
});

test('m search returns Manchester', () => {
    render(<WeatherDisplay filterText={'m'} filteredWeather={WeatherData} />);
    const h2Element =  screen.getByText(/Manchester/i);
    expect(h2Element).toBeInTheDocument();
});

describe('WeatherFilter', () => {
    it('calls the onChange callback handler', () => {
      
       const onFilterTextChange = jest.fn();
      
      render(
        <WeatherFilter value="" onFilterTextChange={onFilterTextChange}>
        </WeatherFilter>
      );
  
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
  
      expect(onFilterTextChange).toHaveBeenCalledTimes(1);
    });
  });
