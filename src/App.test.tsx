import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import data from '../package.json';


const jsonString = data.name;

test('The name of the app is react-typescript-context', () => {
  expect(jsonString).toMatch(/react-typescript-context/);
});