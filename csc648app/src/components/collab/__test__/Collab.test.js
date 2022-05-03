import React from "react";
import ReactDOM from "react-dom";
import Collab from "../Collab";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

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

  //test if error msg is hidden
  it("error msg displayed correctly", () => {
    const { queryByTestId } = render(<Collab />);
    const errorMsg = queryByTestId("validEmailT");
    expect(errorMsg).toBeNull();
  });

  //test if onsubmit displays correct error msg
  it("submit button displaying correct error msg", async () => {
    const { getByTestId, queryByText } = render(<Collab />);
    const button = getByTestId("mainbuttonT");
    const submit = queryByText("Search", { selector: "button" });
    fireEvent.click(button);
    await waitFor(() => {
      const button2 = screen.queryByTestId("buttonT2");
      const errorMsg = screen.queryByTestId("validEmailT");
      fireEvent.click(button2);
      expect(errorMsg.textContent).toBe("User not found");
    });
  });

  it("on click done button, modal is closed", async () => {
    const { getByTestId, queryByText } = render(<Collab />);
    const button = getByTestId("mainbuttonT");
    fireEvent.click(button);
    await waitFor(() => {
      const button3 = screen.queryByTestId("buttonT3");
      fireEvent.click(button3);
      expect(
        queryByText("Share with people and groups")
      ).not.toBeInTheDocument();
    });
  });
});
