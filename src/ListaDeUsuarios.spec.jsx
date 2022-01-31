import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import ListaDeUsuarios from './ListaDeUsuarios.jsx';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
const apiMock = new MockAdapter(axios);

describe('Lista de Usuários', () => {
  it('should be able to render', () => {
    const page = render(
      <ListaDeUsuarios />
    );

    expect(page).toBeTruthy();
  });

  it('should render modal', () => {
    const {getByTestId} = render(
      <ListaDeUsuarios />
    );

    const modal = getByTestId('modal');
    expect(modal).toBeTruthy();
  })

  it('should be able to open modal', () => {
    const {getByTestId} = render(
      <ListaDeUsuarios />
    );

    const button = getByTestId('button-open-modal');
    expect(button).toBeTruthy();
    act(() => {
      fireEvent.click(button);
    });
  })

  it('should be able to close modal', () => {
    const {getByTestId} = render(
      <ListaDeUsuarios />
    );

    const button = getByTestId('button-close-modal');
    expect(button).toBeTruthy();
    act(() => {
      fireEvent.click(button);
    });
  })

  it('should be able to cancel payment', () => {
    const { getByTestId } = render(
      <ListaDeUsuarios />
    );

    const button = getByTestId('button-cancel-modal');
    expect(button).toBeTruthy();
    act(() => {
      fireEvent.click(button);
    });
  })

  it('should be able to fetch users', () => {
    const users = [{
      name: 'John Doe',
      username: 'johndoe',
      img: 'https://avatars2.githubusercontent.com/u/174825?v=4',
    }];
    const resp = {data: users};

    apiMock.onGet('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').reply(200, {
      data: users,
    });
  })

  it('should be able to set an input value', () => {
    const { getByTestId } = render(
      <ListaDeUsuarios />
    );

    const input = getByTestId('number-input');
    expect(input).toBeTruthy();
    act(() => {
      fireEvent.change(input, { target: { value: '20' } });   
    });
    expect(input.value).toBe('R$ 20');
  })
});
