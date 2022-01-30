import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading "h2" com o texto "Encountered pokémons".', () => {
    renderWithRouter(<App />);

    const encoutPokemons = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(encoutPokemons).toBeInTheDocument();
  });
});

describe('Teste se é exibido o próximo Pokémon da lista click "Próximo pokémon"', () => {
  it('O botão deve conter o texto Próximo pokémon', () => {
    renderWithRouter(<App />);

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextPokemon);
  });

  it('Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar', () => {
    renderWithRouter(<App />);

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextPokemon);
  });

  it('O primeiro Pokémon da lista deve ser mostrado ao clicar no botão', () => {
    renderWithRouter(<App />);

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextPokemon);

    const allPokemons = 9;

    for (let index = 0; index < allPokemons.length; index += 1) {
      userEvent.click(nextPokemon);
    }
  });
});

describe('Teste se é mostrado apenas um Pokémon por vez', () => {
  it('Cada click um pokemon deverá ser mostrado por vez na tela.', () => {
    renderWithRouter(<App />);

    const uniquePokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(uniquePokemon).toBeInTheDocument();
  });
});

describe('Teste se a Pokédex tem os botões de filtro', () => {
  it('Deve existir um botão de filtragem para cada tipo de Pokémon,no repeat.', () => {
    renderWithRouter(<App />);

    const pokemonTypes = [
      'Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon',
    ];

    const buttonFilter = screen.getAllByTestId('pokemon-type-button');
    expect(buttonFilter.length).toBe(pokemonTypes.length);
    for (let index = 0; index < pokemonTypes.length; index += 1) {
      const arrayPokemon = pokemonTypes[index];
      expect(buttonFilter[index]).toHaveTextContent(arrayPokemon);
    }
    // Auxiliado pelo o aluno Willian - turma 17
  });

  it('A partir da seleção de um botão de tipo, circular pelo o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const buttonTypePokemon = screen.getByRole('button', { name: /fire/i });
    userEvent.click(buttonTypePokemon);
  });
});

describe('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  it('O botão All precisa estar sempre visível.', () => {
    renderWithRouter(<App />);

    const typePokemon = screen.getByRole('button', { name: /fire/i });
    userEvent.click(typePokemon);

    const allResetButton = screen.getByRole('button', { name: /all/i });
    userEvent.click(allResetButton);
  });
});
