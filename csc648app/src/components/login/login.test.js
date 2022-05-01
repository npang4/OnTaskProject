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
const mockFn = jest.fn();
mockFn.mockResolvedValue({email : "test6@mail.com"});
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

test('check login function',async ()=>{
  const store = createStore(rootReducer, applyMiddleware(thunk));
const username = "test6@mail.com";
const password = "test6@mail.com";
const mockLogin = jest.fn();
render(<Provider store={store}>
  <Login mockLogin={mockLogin(username, password)} />
   </Provider>  );
  const usernameInput = screen.getByTestId('username');
  userEvent.type(usernameInput, 'test6@mail.com');
  const passwordInput = screen.getByLabelText('Password');
  userEvent.type(passwordInput, 'test6@mail.com');
  const loginButton = screen.getByRole('button', { name: /^Login$/i });
  expect(loginButton).not.toBeDisabled();

  // ACT
  userEvent.click(loginButton);

  // ASSERT
  await expect(mockLogin).toHaveBeenCalled();
  await expect(mockLogin).toHaveBeenCalledTimes(1);
  await expect(mockLogin).toHaveBeenCalledWith("username", "test6@mail.com");
});
// test('submits username and password', async () => {

//   // ARRANGE
  // const username = "myusername";
  // const password = "pass1234";
  // const mockLogin = jest.fn();

  // render(<Login onSubmit={mockLogin(username, password)} />);

  // const usernameInput = screen.getByRole('Username', { name: /Username/i });
  // userEvent.type(usernameInput, 'myusername');
  // const passwordInput = screen.getByLabelText('Password');
  // userEvent.type(passwordInput, 'pass1234');
  // const loginButton = screen.getByRole('button', { name: /^Log in$/i });
  // expect(loginButton).not.toBeDisabled();

  // // ACT
  // userEvent.click(loginButton);

  // // ASSERT
  // await expect(mockLogin).toHaveBeenCalled();
  // await expect(mockLogin).toHaveBeenCalledTimes(1);
  // await expect(mockLogin).toHaveBeenCalledWith("myusername", "pass1234");
// });
