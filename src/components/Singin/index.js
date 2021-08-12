import axios from 'axios';
import React, { useState } from 'react'
import { Container, FormButton, FormLabel, FormWrap, FromContent, FormH1, FormInput, Icon, Form } from './UserElements';

const Users = () =>{
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

const login = () =>{
    axios.post("http://localhost3001/login",{
   username: username,
   password: password, 
}).then((response) => {
    console.log(response);
});
};

    return(
        <>
            <Container>
                <FormWrap>
                    <Icon to ="/">Megapositivo</Icon>
                    <FromContent>
                        <Form action ="#">
                            <FormH1>Entrar</FormH1>
                            <FormLabel htmlFor = 'for'>Utilizador</FormLabel>
                            <FormInput type = 'user'onChange = {(e) =>{setUsername(e.target.value);
                            }} required />
                            <FormLabel htmlFor = 'for'>Password</FormLabel>
                            <FormInput type = 'password' onChange = {(e) =>{setPassword(e.target.value);
                            }} required />
                            <FormButton type = 'submit' onClick={login}>Continuar</FormButton>
                        </Form>
                    </FromContent>
                </FormWrap>
            </Container>
        </>

    )
}

export default Users;