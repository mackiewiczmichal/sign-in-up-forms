import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuccesfulSign from './SuccessfulSign';

it('renders succesfulsign form', async () => {
  render(<SuccesfulSign />);
});
