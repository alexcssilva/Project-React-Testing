import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../components';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com texto Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByRole('heading', {
      name: /page requested not found crying emoji/i });
    expect(notFound).toBeInTheDocument();
  });

  it('Teste se página mostra a imagem "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    renderWithRouter(<NotFound />);

    const imgNotFound = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(imgNotFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
