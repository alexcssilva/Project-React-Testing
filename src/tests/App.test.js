import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const about = screen.getByText(/about/i);
    // fazer os teste
    expect(about).toBeInTheDocument();
  });

  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    // acessar os elementos da tela
    const favoritePokemon = screen.getByText(/Favorite Pokémons/i);
    // fazer os teste
    expect(favoritePokemon).toBeInTheDocument();
  });
});

describe('Teste se a aplicação é redirecionada para a página inicial.', () => {
  it('Na URL "/" ao clicar no link "Home" da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});

describe('Teste se a aplicação é redirecionada para a página de "About"', () => {
  it('Na URL "/about", ao clicar no link "About" da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
});

describe('Teste se a aplicação é redirecionada para a "Pokémons Favoritados"', () => {
  it('Na URL "/favorite", ao clicar no link "Favorite Pokémons" da barra.', () => {
    const { history } = renderWithRouter(<App />);

    const favoritetLink = screen.getByRole('link', { name: /Favorite pokémons/i });
    userEvent.click(favoritetLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});

describe('Teste se a aplicação é redirecionada para a página "Not Found"', () => {
  it('Ao entrar em uma URL desconhecida deve aparecer "Not Found"', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/trybe');

    const textPage = screen.getByRole('img', { name: /crying emoji/i });
    expect(textPage).toBeInTheDocument();
  });
});
