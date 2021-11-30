import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import React, { useCallback, useMemo, useState } from 'react';

/* 스타일링된 input */
const StyledInput = styled.input`
  width: 480px;
  height: 56px;
  background: #FFFFFF;
  border: 2px solid #DBDBDB;
  box-sizing: border-box;
  border-radius: 8px;
  outline:none;
  display:block;
  margin:0 auto;
  margin-top:36px;
  padding-left:20px;
  ${props => props.eamil && css`
          width:312px;
          margin:0;
          margin-right:8px;
          display:inline;

  `}
`;

/* 버튼 여백 */
const ButtonWithMargin = styled(Button)`
  margin-top:48px;
  ${props => props.white && css`
              background: #FFFFFF;
              border: 2px solid #DBDBDB;
              color:black;
              margin-right:40px;
              &:hover {
                color:white;
              }`};
  ${props => props.blue && css`
              height:56px; 
              margin:0;              
  `};
`;
const LinkBox = styled.div`
width: 300px;
margin: 24px auto;
margin-bottom: 0;
display: flex;
justify-content: space - between;
 ${props => props.register && css`
               display:block;`}
  span{
  color:#757575;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.127273px;
}

`;
/*버튼 아래 링크*/
const LinkDeco = styled.span`
 a{
  color:#007DF0;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.127273px;
  text-decoration-line: underline;
  ${props => props.gray && css`
                color:#757575;
                margin-left:30px;`};
  ${props => props.able && css`
              background:#007DF0;
              color:#FFF;
                  &:hover{
                       background:#007DF0;
                  }
`}
}
`;

/*구글 로그인*/
const GoogleButton = styled.button`
margin-top: 48px;
width: 240px;
height: 40px;
background: #FFFFFF;
border: 1px solid #EEEEEE;
border-radius: 2px;
padding: 0;
line-height: 1.5rem;
  img{
  position: relative;
  left:-15px;
  top: 5px;
  width: 18px;
  margin-right: 10px;
}
`;



/* 에러를 보여준다 */
const ErrorMessage = styled.div`
color: red;
text - align: center;
font - size: 0.875rem;
margin - top: 1rem;
`;

/* 타입에 따라 회원가입인지 로그인인지 분별해 문구 등을 바꿔준다 */
const textMap = {
  login: {
    title: '로그인',
    email: '이메일',
  },
  register: {
    title: '회원가입',
    email: '아이디로 사용할 이메일',
  }
};

const FormDetail = React.forwardRef(({ props, loginInput }) => {

  const text = textMap[props.type];
  const buttonColor = props.buttonColor.color;


  return (

    <>
      {
        props.type === 'login' ?
          (<StyledInput autoComplete='username'
            name='username'
            onChange={props.onChange}
            placeholder={text.email}
            ref={loginInput} />) :

          <><StyledInput eamil autoComplete='username'
            name='username'
            placeholder={text.email}
            onChange={props.onChange}
            value={props.inputs.username}
            ref={loginInput} />
            <ButtonWithMargin blue>이메일 인증</ButtonWithMargin></>
      }

      < StyledInput autoComplete='new-password'
        name='password'
        placeholder='비밀번호'
        type='password'
        onChange={props.onChange}
        value={props.inputs.password}
        ref={loginInput} />
      {
        props.type === 'register' && (
          <StyledInput autoComplete='new-password'
            name='passwordConfirm'
            placeholder='비밀번호 확인'
            onKeyUp={props.onChange}
            onChange={props.onChange}
            type='password' />
        )
      }
      {
        props.type === 'register' && (<Link to='condition'><ButtonWithMargin white>이전</ButtonWithMargin></Link>)
      }
      {
        buttonColor === 'able' ? (<ButtonWithMargin able>{text.title}</ButtonWithMargin>) : (<ButtonWithMargin>{text.title}</ButtonWithMargin>)
      }
      {
        props.type === 'login' ?
          (<><LinkBox><LinkDeco able><Link to='/condition'>회원가입</Link></LinkDeco>
            <LinkDeco gray><Link to='/condition'>비밀번호가 기억나지 않으세요?</Link></LinkDeco></LinkBox>
            <GoogleButton><img src={require('../../images/Google.png').default} />Google 계정으로 로그인</GoogleButton>
          </>) :
          (<LinkBox rgister><span>이미 계정이 있으십니까?</span><LinkDeco><Link to='/login'>로그인</Link></LinkDeco></LinkBox>)
      }
    </>
  );
});

export default FormDetail;