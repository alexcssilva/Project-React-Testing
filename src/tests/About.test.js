import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
    const about = screen.getByRole('heading', { name: /about pokédex/i });
    expect(about).toBeInTheDocument();
  });

  it('Teste se a página contém um heading "h2" com o texto "About Pokédex".', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
    const about = screen.getByRole('heading', { level: 2 });
    expect(about).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
    const aboutTextOne = screen.getByText(/this application simulates a pokédex/i);
    const aboutTextTwo = screen.getByText(/One can filter Pokémons /i);
    expect(aboutTextOne && aboutTextTwo).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
    const img = screen.getByRole('img', { name: /pokédex/i });

    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
