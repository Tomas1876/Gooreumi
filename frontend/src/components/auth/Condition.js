import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

/* 회원가입 또는 로그인 폼 */
const ConditionBlock = styled.div`
    width: 480px;
    height: 272px;
    background: #FFFFFF;
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 8px;
    padding:20px 20px 12px 20px;
`;
const TermsOfUse = styled.div`
    width:440px;
    height:44px;
    border-bottom:1px solid #DBDBDB;
    display:flex;
    input[id='oval1']: checked + label {
        div{
            background-color:#007DF0;
        }
    }
    input[id='oval1'] {
	    display: none;
    }
`;
const Oval = styled.label`
    width: 24px;
    height: 24px;
    background: #FFFFFF;
    border: 2px solid #DBDBDB;
    border-radius : 12px;
    margin-right:12px;
    div{
        width: 12px;
        height: 12px;
        border-radius:6px;
        position:relative;
        top:4px;
        left:4px;
    }
`;

const TermsField = styled.div`
    width:440px;
    height:140px;
    padding:18px 0;
    
    border-bottom:1px solid #DBDBDB;
    ul>li{
        display:flex;
        height:24px;
        margin-bottom:16px;
        input[id='oval2']: checked + label {
            div{
                background-color:#007DF0;
            }
        }
        input[id='oval2'] {
            display: none;
        }
        input[id='oval3']: checked + label {
            div{
                background-color:#007DF0;
            }
        }
        input[id='oval3'] {
            display: none;
        }
        input[id='oval4']: checked + label {
            div{
                background-color:#007DF0;
            }
        }
        input[id='oval4'] {
            display: none;
        }
        &:last-child{
            margin-bottom:0;
        }
    }
`;
const Comment = styled.div`
    width:408px;
    height:42px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #757575;
    text-align:left;
    margin-left:auto;
    margin-top:12px;
`;
const Policy = styled.span`
    color:#ff6c3e;
    text-decoration:underline;
`;
const LinkBox = styled.div`
 width:280px;
 margin:24px auto;
 margin-bottom:0;
 display:flex;
 justify-content:space-between;
 ${props => props.rgister && css`
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
const ButtonWithMargin = styled(Button)`
  margin-top:48px;
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

const Condition = () => {
    const PreventSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <ConditionBlock>
                <TermsOfUse>
                    <input type="checkbox" id="oval1" /><Oval htmlFor='oval1'><div /></Oval>
                    <p>이용약관 전체동의</p>
                </TermsOfUse>
                <TermsField>
                    <ul>
                        <li>
                            <input type="checkbox" id="oval2" /><Oval htmlFor='oval2'><div /></Oval>
                            <p>이용약관 전체동의</p>
                        </li>
                        <li>
                            <input type="checkbox" id="oval3" /><Oval htmlFor='oval3'><div /></Oval>
                            <p>개인정보 수집 및 이용에 대한 동의</p>
                        </li>
                        <li>
                            <input type="checkbox" id="oval4" /><Oval htmlFor='oval4'><div /></Oval>
                            <p>마케팅 정보 수신 동의</p>
                        </li>
                    </ul>
                </TermsField>
                <Comment>구르미 서비스에 가입함으로써<br />
                    <Policy>서비스약관</Policy> 및 <Policy>개인정보보호정책</Policy>, <Policy>쿠키정책</Policy>에 동의합니다.
                </Comment>
            </ConditionBlock>
            <Link to='/register'><ButtonWithMargin onSubmit={PreventSubmit}>다음</ButtonWithMargin></Link>
            <LinkBox rgister><span>이미 계정이 있으십니까?</span><LinkDeco><Link to='/login'>로그인</Link></LinkDeco></LinkBox>
        </>
    );
}

export default Condition;