import React from "react";
import ReactDOM from "react-dom";
import Collab from "../Collab";
import Modal from "react-modal";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

afterEach(() => {
  cleanup();
});

describe("Collab Button Component", () => {
  //test if collab component renders
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Collab></Collab>, div);
  });
  //test if button renders
  it("renders the modal", async () => {
    const { getByTestId, queryByText } = render(<Collab />);
    const button = getByTestId("mainbuttonT");
    expect(button).toBeTruthy();
    fireEvent.click(button);
    await waitFor(() =>
      expect(queryByText("Share with people and groups")).toBeInTheDocument()
    );
  });

  //test if onsubmit, output is correct.
  it("error msg displayed correctly", () => {
    const { queryByTestId } = render(<Collab />);
    const errorMsg = queryByTestId("validEmailT");
    expect(errorMsg).toBeNull();
  });
});

/*
const errorMsg = getByTestId("validEmailT");
const button = getByTestId("buttonT2");
    fireEvent.click(button);
    expect(error.innerHTML).toBe("");
*/
