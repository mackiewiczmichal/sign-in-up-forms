import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from './Input';

it('renders Input field', async () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  render(
    <InputField
      id="test"
      type="text"
      name="test"
      value=""
      placeholder="test"
      onChange={handleChange}
    />
  );
});
