import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";

test("App component renders properly", () => {
  const { getByText } = render(<App />);

  const text = getByText(/fetching data/i);
  expect(text).toBeInTheDocument();
});


test('Axios renders a show properly', () => {
    const axios = {
        get: jest.fn(() => Promise.resolve({data: { episodes: "Season" }})),
    }
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
    render(<App url={ url } />)
    expect(axios.get).toHaveBeenCalledTimes(0)
})