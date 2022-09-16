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

it("must contain quote value", async () => {
    const [firstQuote, secondQuote, thirdQuote] = await screen.findAllByRole("listitem")
    expect(firstQuote.textContent).toBe("Gah, stupid sexy Flanders!")
    expect(secondQuote.textContent).toBe("Eat my shorts")
    expect(thirdQuote.textContent).toBe("Shut up, brain. I got friends now. I don't need you anymore")
})