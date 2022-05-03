import React from 'react'
import List from '../to-do-list/List';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

jest.mock('axios');

describe('<List>', () => {
  it('renders without crashing', () => {
    const randomTask = "TEST: Add a Cat"
    const store = createStore(rootReducer, applyMiddleware(thunk));

    const { container, queryByText, getByDisplayValue } = render(
      <Provider store={store}>
        <List id={0} />
      </Provider>
    );

    // adding task to the input field
    expect(queryByText(randomTask)).not.toBeInTheDocument();
    fireEvent.change(container.querySelector('#input'), { target: { value: randomTask } });
    expect(getByDisplayValue(randomTask)).toBeInTheDocument();

    // clicking submit
    axios.post.mockImplementation(() => Promise.resolve({data:"task completed"}));
    fireEvent.click(container.querySelector('#submit')); 

    // reseting the page
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
            {
              title: 'Walk The Dog.'
            },
            {
              title: 'Meet with group.'
            }
          ]
      });
    }
    );
    
    // check if the todolist was reset
    setTimeout(() => {
      expect(store.getState().todo.items.length).toBe(2);
    },2)
  });
});