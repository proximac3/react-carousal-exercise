import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import Card from './Card.js'

// Card component smoke test
test("Card renders without crashing", () => {
    render(<Card/>)
})

// card Component snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})

