import React, { useState } from 'react'
// import "./LoginForm.css";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const initialDetails = {
    username: "",
    email: "",
    password: "",
}

const LoginForm = ( { login, error } ) => {
    const [ details, setDetails ] = useState( initialDetails );

    const handleSubmit = e => {
        e.preventDefault();
        login( details );
        setDetails( initialDetails );
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setDetails( {
            ...details,
            [ name ]: value,
        } )
    }

    return (
        <Form inline>
            <FormGroup floating>
                <Input
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="username"
                    value={ details.username }
                    onChange={ handleChange }
                    autoComplete="username"
                />
                <Label for="username">
                    Username
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={ details.email }
                    onChange={ handleChange }
                    autoComplete="email"
                />
                <Label for="email">
                    Email
                </Label>
            </FormGroup>
            { ' ' }
            <FormGroup floating>
                <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={ details.password }
                    onChange={ handleChange }
                    autoComplete="current-password"
                />
                <Label for="password">
                    Password
                </Label>
            </FormGroup>
            { ' ' }
            <Button onClick={ handleSubmit }>
                Submit
            </Button>
        </Form>

    )
}

export default LoginForm