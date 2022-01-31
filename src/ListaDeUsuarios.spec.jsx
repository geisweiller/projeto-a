import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import ListaDeUsuarios from './ListaDeUsuarios.jsx';
import axios from 'axios';

jest.mock('axios');
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
    axios.get.mockImplementation(() => Promise.resolve({ status: 200, resp }));
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

  it('should be able to map users', () => {
    const mockedUsers = [{
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      img: 'https://avatars2.githubusercontent.com/u/174825?v=4',
    }];

    const abrirModalPagar = jest.fn();
    
    const { getByTestId } = render(
      <> 
        {mockedUsers?.map((item) => (
          <div className="container" key={item.id}>
              <div className="content">
                  <img className="thumbnail" src={item.img} data-testid="user-thumb" alt="Foto do usuário" />
                  <div className="infos">   
                      <p className='name' data-testid="user-name">{item.name}</p>
                      <p className='username' data-testid="user-username">{item.username}</p>
                  </div>
                  <button className="botao-pagar" onClick={()=>{abrirModalPagar(item.name)}} data-testid="payment-button">Pagar</button>
              </div>
          </div>
        ))}      
      </>
    );
    const name = getByTestId('user-name');
    const username = getByTestId('user-username');
    const thumbnail = getByTestId('user-thumb');
    const button = getByTestId('payment-button');
    expect(name).toBeTruthy();
    expect(username).toBeTruthy();
    expect(thumbnail).toBeTruthy();

    expect(name.textContent).toBe('John Doe');
    expect(username.textContent).toBe('johndoe');
    expect(thumbnail.src).toBe('https://avatars2.githubusercontent.com/u/174825?v=4');
    expect(button).toBeTruthy();

    act(() => {
      fireEvent.click(button);
    });

  })
});
