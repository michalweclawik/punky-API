import { render, screen } from "@testing-library/react";

import SearchBox from "./SearchBox";

it(" should render keypress", () => {
  render(<SearchBox />);

  const search = screen.findAllByPlaceholderText("Type here...");

  expect(search).toBeTruthy();
});
