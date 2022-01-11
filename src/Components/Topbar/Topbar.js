import styled from "styled-components";
import { useContext } from 'react'

import UserContext from "../../Context/Context";
import TrackIt from '../../Assets/TrackIt.png'

function Topbar() {
    const { userInfo } = useContext(UserContext);

    return(
        <Top>
            <Logo src={TrackIt} alt="logo" />
            <Photo src={userInfo.image} alt="userphoto"/>
        </Top>
    );
}   

const Top = styled.div`
    width: 100%;
    height: 70px;

    padding: 0 5%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: 0px 4px 4px 0px #00000026;
    background-color: #126BA5;
`
const Logo = styled.img`
    width: 97px;
    height: 49px;
    object-fit: contain;
`
const Photo = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: contain;
`
export default Topbar;