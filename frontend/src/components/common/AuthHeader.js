import styled from "styled-components";

const HeaderBlock = styled.header`
    width:1280px;
    height:57px;
    box-sizing:border-box;
    border-bottom:1px solid black;
    margin:auto;
    display:flex;
    img{
        width:90px;
        height:32px;
        margin-top:12px;
        margin-left:23px;
    }
    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        padding-right:23px;
        margin-left:auto;
        margin-top:18px;
    }
`;

const AuthHeader = ({ type }) => {
    return (
        <HeaderBlock>
            <img src={require('../../images/logo.png').default} />
            {type === 'register' || 'condition' ? (<p>LOGIN</p>) : (<></>)}
        </HeaderBlock>
    )

}

export default AuthHeader;