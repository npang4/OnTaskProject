import React from "react";
import ReactDOM from "react-dom";
import UserInfo from "../UserInfo";
import { render, screen } from "@testing-library/react";

//import user from "@testing-library/user-event";
//import { Provider } from "react-redux";
//import thunk from "redux-thunk";
//import { createStore, applyMiddleware } from "redux";
//import Register from "../../../registration/Register";
//import rootReducer from "../../../../redux/reducers/rootReducer";

//Test if component renders correctly
it("renders userinfo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserInfo></UserInfo>, div);
});

//test("Testing submit button with no user data", () => {
//  const store = createStore(rootReducer, applyMiddleware(thunk));

//  const onSubmit = jest.fn();

// render(
//   <Provider store={store}>
//      <Register onSubmit={onSubmit} />
//    </Provider>
//  );
//  const button = screen.getByRole("button");

//  user.click(button);
//  expect(onSubmit).toHaveBeenCalledTimes(0);
//});
/*
it("renders correct names", () => {
  const { getByTestId } = render(<UserInfo name="jia"></UserInfo>);
  expect(getByTestId("user-info-name")).toHaveTextContent("jia");
});
*/
/*
test("text renders correctly", () => {
  const userInfo = { id: 1, name: "Jia", email: "jia@mail.com" };
  render(<UserInfo userInfo={userInfo}></UserInfo>);
  const userElement = screen.getByTestId();
});
*/
