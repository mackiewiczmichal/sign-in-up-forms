import {render, screen} from '@testing-library/react';
import SignUp from './SignUp';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

const MockBrowserRouter = () =>{
    return(
    <Router>
        <SignUp></SignUp>
    </Router>
    ) 
}
it('renders signin form', async () =>{
    render(<MockBrowserRouter/>)
});

it('renders heading of form', async () =>{
    render(<MockBrowserRouter/>)
    const headingText = screen.getByText(/Sign up/);
    expect(headingText).toBeInTheDocument();
})

it('renders whole form inputs', async () =>{
    render(<MockBrowserRouter/>)
    const inputEmail = screen.getByLabelText('Email', {selector: 'input'});
    const inputFullName= screen.getByLabelText('Full name', {selector: 'input'});
    const inputPassword = screen.getByLabelText('Password', {selector: 'input'});
    const inputPasswordConfirm = screen.getByLabelText('Password confirm', {selector: 'input'});
    expect(inputEmail).toBeInTheDocument();
    expect(inputFullName).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputPasswordConfirm).toBeInTheDocument();
})

it('renders button', async () =>{
    render(<MockBrowserRouter/>)
    const button = screen.getByText(/Submit/);
    expect(button).toBeInTheDocument();
})