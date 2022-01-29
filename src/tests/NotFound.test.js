import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com texto Page requested not found 😭', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/trybe');
    const notFound = screen.getAllByRole('heading', { level: 2 });
    expect(notFound).toBe();
  });
});
