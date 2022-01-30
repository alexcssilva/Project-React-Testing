import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('O nome correto do Pokémon deve ser mostrado na tela;', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getByText(/pikachu/i);
    expect(pokemon).toHaveTextContent('Pikachu');
  });

  it('O tipo correto do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.innerHTML).toBe('Electric');
  });

  it('O peso médio do pokémon deve ser exibido com um texto no formato', () => {
    renderWithRouter(<App />);

    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toHaveTextContent('Average weight');
  });

  it('A imagem do Pokémon deve ser exibida', () => {
    renderWithRouter(<App />);

    const imgPokemon = screen.getByAltText(/pikachu sprite/i);
    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('A imagem do Pokémon deve ser exibida.', () => {
    renderWithRouter(<App />);

    const srcPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(srcPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(srcPokemon).toHaveAttribute('alt', 'Pikachu sprite');
  });
});

test('Teste se o card do Pokémon indicado na Pokédex contém um link', () => {
  renderWithRouter(<App />);

  const cardPokemon = screen.getByRole('link', { name: /more details/i });
  expect(cardPokemon).toHaveAttribute('href', '/pokemons/25');
});

test('Teste se ao clicar no link de navegação do Pokémon', () => {
  renderWithRouter(<App />);

  const navPokemon = screen.getByRole('link', { name: /more details/i });
  userEvent.click(navPokemon);
  const sumary = screen.getByText(/pokémon favoritado/i);
  expect(sumary).toBeInTheDocument();
});

test('Teste também se a URL exibida no navegador muda para "/pokemon/<id>"', () => {
  const { history } = renderWithRouter(<App />);

  const urlPokemon = screen.getByRole('link', { name: /more details/i });
  userEvent.click(urlPokemon);
  expect(history.location.pathname).toBe('/pokemons/25');
});

test('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
  renderWithRouter(<App />);

  const moreDetails = screen.getByRole('link', { name: /more details/i });
  userEvent.click(moreDetails);

  const favoritePokemon = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
  userEvent.click(favoritePokemon);

  const starIcon = screen.getByAltText(/pikachu is marked as favorite/i);
  expect(starIcon).toHaveAttribute('src', '/star-icon.svg');
});
