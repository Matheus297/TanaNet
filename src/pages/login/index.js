import React from 'react';

// Styles

import {
    Container,
    Title,
    Input,
    Button,
    ButtonText
} from './styles.js';

const Login = () => {
    return (
        <Container>
            <Title>Tana Net</Title>
            <Input placeholder="matheus@hotmail.com" />
            <Input placeholder="********" />
            <Button>
                <ButtonText>Acessar</ButtonText>
            </Button>
        </Container>
    )
}


export default Login;