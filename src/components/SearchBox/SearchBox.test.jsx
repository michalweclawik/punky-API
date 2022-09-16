import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import SearchBox from "./SearchBox";

it(" should render keypress", () => {
  render(
    <Router>
      <SearchBox />
    </Router>
  );

  const search = screen.findAllByPlaceholderText("Type here...");

  expect(search).toBeTruthy();
});
