import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import { signupForm } from '../../utils/hooks/useForm/formConfig';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders whole form ', async () => {
  render(
    <Router>
      <Form
        formConfig={signupForm}
        heading={'Sign up'}
        formFooter={{
          link: '/',
          text: 'Havent u tested all pages already?',
          linkText: 'Test them all',
        }}
      />
    </Router>
  );
});
