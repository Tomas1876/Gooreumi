import styled from "styled-components";
import { Link } from 'react-router-dom'

/* 회원가입/로그인 페이지의 레이아웃 */

/* 화면 전체를 채울 최상의 요소 */
const AuthTemplateBlock = styled.div`
  width:100%;
  height:100%;
  margin:0 auto;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>

      {children}

    </AuthTemplateBlock>
  )
}

export default AuthTemplate;