import {render, screen} from '@testing-library/react';
import SignIn from './SignIn';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

const MockBrowserRouter = () =>{
    return(
        <Router>
        <SignIn></SignIn>
    </Router>
    ) 
}
it('renders signin form', async () =>{
    render(<MockBrowserRouter/>)
});

it('renders heading of form', async () =>{
    render(<MockBrowserRouter/>)
    const headingText = screen.getByText(/Sign in/);
    expect(headingText).toBeInTheDocument();
})

it('renders whole form inputs', async () =>{
    render(<MockBrowserRouter/>)
    const inputEmail = screen.getByLabelText('Email', {selector: 'input'});
    const inputPassword = screen.getByLabelText('Password', {selector: 'input'});
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
})

it('renders button', async () =>{
    render(<MockBrowserRouter/>)
    const button = screen.getByText(/Submit/);
    expect(button).toBeInTheDocument();
})