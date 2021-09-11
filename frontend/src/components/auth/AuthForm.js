import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import AuthHeader from '../common/AuthHeader';
import Footer from '../common/Footer';

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
`;

/* 버튼 여백 */
const ButtonWithMargin = styled(Button)`
  margin-top:48px;
`;
const LinkBox = styled.div`
 width:280px;
 margin:24px auto;
 margin-bottom:0;
 display:flex;
 justify-content:space-between;
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
                color:#757575;`};
 }
`;

/*구글 로그인*/
const GoogleButton = styled.button`
  margin-top:48px;
  width: 240px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 2px;
  padding:0;
  line-height: 1.5rem;
  img{
    position: relative;
    left: -15px;
    top: 5px;
    width: 18px;
    margin-right: 10px;
  }
`;



/* 에러를 보여준다 */
const ErrorMessage = styled.div`
 color: red;
 text-align: center;
 font-size: 0.875rem;
 margin-top: 1rem;
`;

/* 타입에 따라 회원가입인지 로그인인지 분별해 문구 등을 바꿔준다 */
const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <AuthHeader />
      <h3>{text}</h3>
      <form>
        <StyledInput autoComplete='username' name='username' placeholder='이메일' />
        <StyledInput autoComplete='new-password'
          name='password'
          placeholder='비밀번호'
          type='password' />
        {type === 'register' && (
          <StyledInput autoComplete='new-password'
            name='passwordConfirm'
            placeholder='비밀번호 확인'
            type='password' />
        )}
        <ButtonWithMargin>{text}</ButtonWithMargin>
        {type === 'login' ?
          (<><LinkBox><LinkDeco><Link to='/register'>회원가입</Link></LinkDeco>
            <LinkDeco gray><Link to='/register'>비밀번호가 기억나지 않으세요?</Link></LinkDeco></LinkBox>
            <GoogleButton><img src={require('../../images/Google.png').default} />Google 계정으로 로그인</GoogleButton>
          </>) :
          (<Link to='/login'>로그인</Link>)}
      </form>
      <Footer />
    </AuthFormBlock>
  );
}

export default AuthForm;