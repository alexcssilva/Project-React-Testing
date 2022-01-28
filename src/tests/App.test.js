import React from 'react';
import { render, screen } from "@testing-library/react";
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links.', () => {
  it('O primeiro link deve possuir o texto Home.', () => {
    renderWithRouter(<App />);
    // acessar os elementos da tela

    const home = screen.getByText(/home/i);
    // interagir com os elementos (se for necessário)
    expect(home).toBeInTheDocument();
    // fazer os teste
  });

  it('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    // acessar os elementos da tela
    const home = screen.getByText(/about/i);
    // fazer os teste
    expect(home).toBeInTheDocument();
  });

  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    // acessar os elementos da tela
    const home = screen.getByText(/Favorite Pokémons/i);
    // fazer os teste
    expect(home).toBeInTheDocument();
  });
});
