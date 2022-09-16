import React from "react";
import { render, screen } from '@testing-library/react';

import  MainPage  from "../components/main-page";

describe('App page mount', () => {
    it('must display the app page title', () => {
        render(<MainPage />);
        expect(screen.getByText('simpsons quote')).toBeInTheDocument();
    })
})