// tests/Users.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Users from '../pages/Users'; // adjust path if needed
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData = [
  { id: 1, name: "Leanne Graham", username: "Bret" },
  { id: 2, name: "Ervin Howell", username: "Antonette" },
  { id: 3, name: "Clementine Bauch", username: "Samantha" },
];

mockedAxios.get.mockResolvedValue({ data: mockData });

describe('Users', () => {
  it('filters users by name', async () => {
    render(<Users />);

    const input = await screen.findByPlaceholderText('Filter by name');
    fireEvent.change(input, { target: { value: 'Leanne' } });

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
  });
});