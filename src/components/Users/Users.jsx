import React from 'react';

// import { Container } from './styles';

const Users = ({users, onButtonClick}) => {
  return ( 
    <>
      {users.map(item => (
          <div className="container" key={item.index}>
              <div className="content">
                  <img className="thumbnail" src={item.img} alt="Foto do usuário" data-testid="user-thumb" />
                  <div className="infos">   
                      <p className='name' data-testid="user-name">{item.name}</p>
                      <p className='username' data-testid="user-username">{item.username}</p>
                  </div>
                  <button className="botao-pagar" onClick={()=>{onButtonClick(item.name)}} data-testid="payment-button">Pagar</button>
              </div>
          </div>
        ))}
    </>);
}

export default Users;