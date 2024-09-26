import styled, { css } from 'styled-components';
import AuthHeader from '../common/AuthHeader';
import Footer from '../common/Footer';
import FormDetail from './FormDetail';
import Condition from './Condition';
import React, { useState, useRef } from 'react';

/* 회원가입 또는 로그인 폼 */
const AuthFormBlock = styled.main` //최상위 요소에는 Block이라는 단어를 붙일 것
 h3 {
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  letter-spacing: -0.236364px;
  margin: 60px 0 43px 0;
 }
 form{
   width:480px;
   margin:0 auto;
   text-align:center;
 }
`;
const textMap = {
  login: {
    title: '로그인',
  },
  register: {
    title: '회원가입',
  },
  condition: {
    title: '회원가입'
  }
};
const AuthForm = ({ type }) => {
  const text = textMap[type];

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  });
  const [color, setColor] = useState({
    color: ''
  });
  const loginInput = React.createRef();
  const { username, password } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value.trim()
    });

    if (type === 'login') {
      if (inputs.username != '' && inputs.password != '') {
        setColor({
          color: 'able'
        });
      } else {
        setColor({
          color: 'disable'
        });
      }
    } else if (type === 'register') {

      if (inputs.username != '' && inputs.password != '' && inputs.passwordConfirm != '') {
        passwordCheck();
      }
    }
  };
  const passwordCheck = () => {
    console.log(`rw ${inputs.password}`);
    console.log(`passwordConfirm ${inputs.passwordConfirm}`);
    if (inputs.password === inputs.passwordConfirm) {
      setColor({
        color: 'able'
      });
    } else {
      setColor({
        color: 'disable'
      });
    }

  }
  const data = {
    type: type,
    onChange: onChange,
    inputs: inputs,
    buttonColor: color
  };

  return (
    <AuthFormBlock>
      <AuthHeader type={type} />
      <h3>{text.title}</h3>
      <form>
        {type === 'login' ? (<FormDetail props={data} ref={loginInput} />) : (type === 'condition' ? (<Condition />) : (<FormDetail props={data} />))}
      </form>
      <Footer />
    </AuthFormBlock>
  );
}

export default AuthForm;