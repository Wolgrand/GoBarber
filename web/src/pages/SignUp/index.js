import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
    password: Yup.string().min(6, 'No mínimo 6 caracteres').required('A senha é obrigatória'),
});

export default function SignUp() {

    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
        <img src={logo} alt="GoBarber" />

        <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Seu nome completo" />
            <Input name="email" type="email" placeholder="Seu e-mail" />
            <Input name="password" type="password" placeholder="Sua Senha" />

            <button type="submit">Criar conta</button>
            <Link to="/">Já tenho login</Link>

        </Form>
        </>
    );
}
