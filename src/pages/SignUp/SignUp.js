import React from 'react';
import { signupForm } from '../../utils/hooks/useForm/formConfig';

import Form from '../../components/Form/Form';

export default function SignUp() {
  return (
    <Form
      formConfig={signupForm}
      heading={'Sign up'}
      formFooter={{
        link: '/',
        text: 'Already have an account?',
        linkText: 'Sign in',
      }}
    />
  );
}
