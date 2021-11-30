import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: #DBDBDB;
  border-radius: 8px;
  border:none;
  color:white;
  width:160px;
  height:48px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  &:hover {
    background: #007DF0;
  }
  
${props => props.fullWidth && css`
                                padding-top:0.75rem;
                                padding-bottom:0.75rem;
                                width:100%;
                                font-size:1.125rem
                                `};
${props => props.blue && css`
                          background:#007DF0;
                          &:hover{
                            background:#007DF0;
                          }                          
                          `};
${props => props.able && css`
              background:#007DF0;
              color:#FFF;
                  &:hover{
                       background:#007DF0;
                  }
  `};
`;


const Button = props => <StyledButton {...props} />;
export default Button;