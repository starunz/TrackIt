import styled  from 'styled-components' 
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect, useCallback } from 'react'
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2';

import UserContext from '../../Context/Context';
import logo from '../../Assets/logo.png'
import { login } from '../../Services/Api'


function Login() {
    const [userLogin, setUserLogin] = useState({email: '', password: ''});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    let check = localStorage.getItem("hasLogged");
    const { setUserInfo, setLogged} = useContext(UserContext);

    const storeUserInfo = useCallback((userInfo) => {
        if (!check) {
            let store = JSON.stringify(userInfo);
            localStorage.setItem('userInfo', store);
        }
    }, [check]);

    const tryLogin = useCallback((userInfo) => {
        setLoading(true);

        const body = {
            email: userInfo.email, 
            password: userInfo.password
        }
        login(body)
            .then((response) => {
                setUserInfo(response.data);
                storeUserInfo(response.data);
                localStorage.setItem('hasLogged', 'true');
                setLogged(true);
                navigate('/hoje');
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Alguma coisa deu errado, tente novamente mais tarde',
                });
            });

    }, [setLoading, navigate, storeUserInfo, setUserInfo, setLogged]);

    useEffect(() => {
        function checkUserHasLogged() {
            if (check) {
                let stored = JSON.parse(localStorage.getItem('userInfo'));
                tryLogin(stored);
            }
        }

        checkUserHasLogged();
	}, [check, tryLogin]);

    return(
        <Container>
            <Logo>
                <img src={logo} alt='logo'/>
            </Logo>

            <Input placeholder="email"
                    type='email'
                    onChange={(e) => setUserLogin({
                        email: e.target.value, 
                        password: userLogin.password
                    })} 
                    loading={loading}
                    disabled={loading}
                />

                <Input placeholder="senha"
                    type='password'
                    onChange={ (e) => setUserLogin({
                        email: userLogin.email, 
                        password: e.target.value
                    })}
                    loading={loading}
                    disabled={loading}
                />

                <Button loading={loading} disabled={loading} onClick={() => tryLogin(userLogin)}>
                    {
                        loading ? 
                        <Loader type="ThreeDots" color="white" height={45} width={80} />
                        : 
                        'Entrar'
                    }
                </Button>
                
                <Link to='/cadastro'>
                    <span>Não tem uma conta? Cadastre-se!</span>
                </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: normal;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`
const Logo = styled.div`
    img {
        width: 180px;
        height: 178.38px;

        margin: 68px 0 27px 0;
    }
`
const Input = styled.input`
    width: 303px;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    outline: none;

    padding-left: 10px;
    margin-bottom: 6px;

    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};

    ::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }
`
const Button = styled.button`
    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;

    color: white;

    margin-bottom: 30px;

    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};
    cursor: ${props => props.loading ? 'wait' : 'pointer'};
`
export default Login