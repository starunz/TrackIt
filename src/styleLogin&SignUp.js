import styled from "styled-components"

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

export { 
    Container,
    Input,
    Button,
    Logo
}