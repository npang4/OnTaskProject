import React from "react";
import ReactDOM from "react-dom";
import UserInfo from "../UserInfo";
import { render, screen } from "@testing-library/react";

import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Register from "../../../registration/Register";
import rootReducer from "../../../../redux/reducers/rootReducer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserInfo></UserInfo>, div);
});

test("Testing submit button with no user data", () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const onSubmit = jest.fn();

  render(
    <Provider store={store}>
      <Register onSubmit={onSubmit} />
    </Provider>
  );
  const button = screen.getByRole("button");

  user.click(button);
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
//it("renders without crashing", () => {
//  const { getByTestId } = render(<UserInfo></UserInfo>);
//  expect(getByTestId("user-info")).toHaveTextContent("hello");
//});
