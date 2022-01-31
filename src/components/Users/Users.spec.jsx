import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Users from './Users';

describe('Componente Users', () => {
  it('should be able to map users', () => {
    const mockedUsers = [{
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      img: 'https://avatars2.githubusercontent.com/u/174825?v=4',
    }];

    const abrirModalPagar = jest.fn();
    
    const { getByTestId } = render(
      <Users  users={mockedUsers} onButtonClick={abrirModalPagar}/>
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
