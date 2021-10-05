import React from 'react';
import Form from '../../components/Form/Form';
import { signinForm } from '../../utils/hooks/useForm/formConfig';

export default function SignIn() {
  return (
    <Form
      formConfig={signinForm}
      heading={'Sign in'}
      formFooter={{
        text: 'Not registered yet? Create account now.',
        link: '/signup',
        linkText: 'Sign up',
      }}
    />
  );
}
