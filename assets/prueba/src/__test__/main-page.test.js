import React from "react";
import { render, screen } from '@testing-library/react';

import MainPage from "../components/main-page";

beforeEach(() => render(<MainPage />))

describe('App page mount', () => {
    it('must display the app page title', () => {
        expect(screen.getByText('simpsons quote')).toBeInTheDocument();
    })
})

describe("Quotes List", () => {
    it("must display 3 quotes", async () => {
        expect(await screen.findAllByRole("listitem")).toHaveLength(3)
    })
})