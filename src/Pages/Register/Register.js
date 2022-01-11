//import styled from "styled-components";
import Loader from "react-loader-spinner";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Swal from 'sweetalert2';

import { registerUser } from "../../Services/Api";
import logo from '../../Assets/logo.png';

import { Container, Logo, Input, Button  } from "../../styleLogin&SignUp";


function Register() {
    const [userRegister, setUserRegister] = useState({email: '', name: '', image: '', password: ''});
    const [loading, setLoading] = useState (false);
    const navigate = useNavigate();

    const register = (obj) => {
        setLoading(true);
        registerUser(obj)
            .then(() =>  navigate('/'))
            .catch((error) => {
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Alguma coisa deu errado, tente novamente mais tarde',
                })
            })

    }

    return(
        <Container>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>

                <Input placeholder="email"
                    type='email'
                    onChange={(e) => setUserRegister({
                        email: e.target.value, 
                        name: userRegister.name, 
                        image: userRegister.image, 
                        password: userRegister.password
                    })} 
                    loading={loading}
                    disabled={loading}
                />

                <Input placeholder="senha"
                    type='password'
                    onChange={ (e) => setUserRegister({
                        email: userRegister.email, 
                        name: userRegister.name, 
                        image: userRegister.image, 
                        password: e.target.value
                    })}
                    loading={loading}
                    disabled={loading}
                />

                <Input placeholder="nome"
                    type='text'
                    onChange={(e) => setUserRegister({
                        email: userRegister.email, 
                        name: e.target.value, 
                        image: userRegister.image, 
                        password: userRegister.password
                    })}
                    loading={loading}
                    disabled={loading}
                />

                <Input placeholder="foto"
                    type='url'
                    onChange={(e) => setUserRegister({
                        email: userRegister.email, 
                        name: userRegister.name, 
                        image: e.target.value, 
                        password: userRegister.password
                    })}
                    loading={loading}
                    disabled={loading}
                />
                <Button loading={loading} disabled={loading} onClick={() => register(userRegister)}>
                    {
                        loading ? 
                        <Loader type="ThreeDots" color="white" height={45} width={80} />
                        : 
                        'Cadrastrar'
                    }
                </Button>
                
                <Link to='/'>
                    <span>Já tem uma conta? Faça login!</span>
                </Link>

        </Container>
    );
}

export default Register;