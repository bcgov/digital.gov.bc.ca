import React from "react";
import ReactDOM from 'react-dom';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, cleanup } from '@testing-library/react';
// import ShallowRenderer from 'react-test-renderer/shallow';
import NavBar from './navbar'
import { BrowserRouter } from 'react-router-dom';

const feature = loadFeature('src/components/Nav/navbar.feature');

defineFeature(feature, (test) => {

  afterEach(cleanup);
  beforeEach(() => {
    
  });

  test('Rendering Navigation Bar', ({ given, when, then }) => {
    when('navigation bar is rendered', () => {
        render(<BrowserRouter><NavBar/></BrowserRouter>);
    });

    then('the title should say "Digital Government"', () => {
        // screen.debug();
        expect(screen.getByText("Digital Government")).toBeInTheDocument();
    });
  });
});