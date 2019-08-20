// Test away!

import React from "react";
import Display from "./display";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
 
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("defaults to unlocked and open", () => {
    const { getByText } = render(<Display locked={true} closed={false} />);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(unlocked).toHaveTextContent(/unlocked/i);
    expect(open).toHaveTextContent(/open/i);
  });
  it("displays Closed if the closed prop is true and Open if otherwise", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    expect(closed.textContent).toMatch(/closed/i);
    expect(locked).toHaveTextContent(/locked/i);
  });
  it("when locked or closed use the red-led class", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    expect(locked).toHaveClass("red-led");
    expect(closed).toHaveClass("red-led");
  });
  it("when unlocked or open use the green-led class", () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const unlocked = getByText();
  });
});