import { render, screen } from '@testing-library/react';
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
