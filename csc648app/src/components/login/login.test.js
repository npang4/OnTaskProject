import React from 'react';
import { render, screen, userEvent, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import Login from './Login';
import axios from 'axios';
import user from"@testing-library/user-event";
import UserInfo from '../to-do-list/collab/userInfo/UserInfo';
//axios

jest.mock('axios');
describe('<Check Login form>', () => {
  it('renders Login', () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const login = {
      email: "",
      loggedIn: false,
      attempt: false
    };
    const { getByText } = render(
      <Provider store={store}>
        <Login login={login} />
      </Provider>
    );
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });
});


test('test login buttion does not work',()=>{
const onSubmit = jest.fn();
const store = createStore(rootReducer, applyMiddleware(thunk));
render(<Provider store={store}>
   <Login onSubmit={onSubmit} />
    </Provider>  );
const button = screen.getByRole('button');
user.click(button);
expect(onSubmit).toHaveBeenCalledTimes(0);

});

test('set user name', ()=>{
  const store = createStore(rootReducer, applyMiddleware(thunk));
const username = "test6@mail.com";
render(<Provider store={store}>
  <Login />
   </Provider>  );
  const usernameInput = document.getElementById('user-email');
  fireEvent.change(usernameInput, {target: {value:username}});
  expect(document.getElementById("user-email").value).toEqual("test6@mail.com");

});

test('set user password', ()=>{
  const store = createStore(rootReducer, applyMiddleware(thunk));
const password = "test6@mail.com";
render(<Provider store={store}>
  <Login />
   </Provider>  );
  const passwordInput = document.getElementById('password');
  fireEvent.change(passwordInput, {target: {value: password}});
  expect(document.getElementById("password").value).toEqual("test6@mail.com");

});
