import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Register from './Register';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';
const mockedUsedNavigate = jest.fn();

jest.mock('axios');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


// First test tests the submit button with no user data
test("Testing submit button with no user data", () => {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  const onSubmit = jest.fn();


  render(<Provider store={store}> <Register onSubmit={onSubmit} /> </Provider>);
  const button = screen.getByRole('button');

  user.click(button);
  expect(onSubmit).toHaveBeenCalledTimes(0);
})

//Testing for name value is the correct name value sent to the database
test("Name should have correct value", () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const onSubmit = jest.fn();

  const { getByLabelText } = render(<Provider store={store}> <Register onSubmit={onSubmit} /> </Provider>);

  const nameField = getByLabelText(/name/i);

  expect(nameField.value).toBe("");
  fireEvent.change(nameField, { target: { value: "Nelson20" } });

  expect(nameField.value).toBe("Nelson20");


})

//Testing for email value is the correct email value sent to the database
test("Email should have correct value", () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const onSubmit = jest.fn();

  const { getByLabelText } = render(<Provider store={store}> <Register onSubmit={onSubmit} /> </Provider>);

  const emailField = getByLabelText(/email/i);

  expect(emailField.value).toBe("");
  fireEvent.change(emailField, { target: { value: "Nelson20@test.com" } });

  expect(emailField.value).toBe("Nelson20@test.com");


})

//Testing for password value is the correct password value sent to the database
test("Password should have correct value", () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const onSubmit = jest.fn();

  const { getByLabelText } = render(<Provider store={store}> <Register onSubmit={onSubmit} /> </Provider>);

  const passwordField = getByLabelText(/password/i);

  expect(passwordField.value).toBe("");
  fireEvent.change(passwordField, { target: { value: "12345678" } });

  expect(passwordField.value).toBe("12345678");


})

// Checking the registration function with user data
test("Checking registration function", async () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const onSubmit = jest.fn();
  const username = "Nelson20";
  const email = "Nelson20@test.com";
  const password = "12345678";

  render(<Provider store={store}> <Register onSubmit={onSubmit} /> </Provider>);

  const usernameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  user.type(usernameInput, username);
  user.type(emailInput, email);
  user.type(passwordInput, password);
  const submitButton = screen.getByRole('button', { name: /^Sign-up$/i });
  user.click(submitButton);
  await expect(onSubmit).toHaveBeenCalledTimes(0);


})


