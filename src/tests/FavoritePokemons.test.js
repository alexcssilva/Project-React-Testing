import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibido na tela a mensagem "No favorite pokemon found".', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/favorites');
    const favorite = screen.getByText(/no favorite pokemon found/i);
    expect(favorite).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favoritePokemon = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    userEvent.click(favoritePokemon);

    const linkFavoritePokemon = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavoritePokemon);

    const favorites = screen.getByRole('link', { name: /more details/i });
    expect(favorites).toBeInTheDocument();
  });
});
