import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

// smoke test
test("carousal renders without crashing", () => {
  render(<Carousel/>)
})

// Snapshot test
test('matches anapshot', () => {
  const { asFragment } = render(<Carousel />)
  expect(asFragment()).toMatchSnapshot()
})

// 
test("check if arrows work", () => {
  const {getByTestId, getByText } = render(<Carousel />)

  // click to move onto the second image
  fireEvent.click(getByTestId("right-arrow"))
  expect(getByText('Image 2 of 3.')).toBeInTheDocument()
  
  // click to move back to 1st image
  fireEvent.click(getByTestId("left-arrow"))
  expect(getByText('Image 1 of 3.')).toBeInTheDocument()
})


test('check if arrows are present ', () => {
  const { getByTestId, getByText, debug, queryByTestId } = render(<Carousel />)
  // check if left arrow is not present
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument()
  
  // check if right arrows is present
  expect(queryByTestId("right-arrow")).toBeInTheDocument()
  
  // click right arrows to move onto next image
  fireEvent.click(getByTestId("right-arrow"))
  
  // cheak if left arrow is not present
  expect(queryByTestId("left-arrow")).toBeInTheDocument()
  
  // click right arrows to move onto next image
  fireEvent.click(getByTestId("right-arrow"))
  
  // check if right arrow i snot present
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument()
})