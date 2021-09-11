import styled from "styled-components";

const FooterBlock = styled.footer`
    position:absolute;
    bottom:0px;
    width:100%;
    height:120px;
    box-sizing:border-box;
    border-top:1px solid #DBDBDB;
    padding-top:27px;
    display:flex;

`;
/* 로고 */
const LogoBox = styled.div`
    width:83px;
    background-color:gray;
    margin-left:104px;
`;

/* 영업시간, 휴일, 대표번호 정보 */
const InfoBox = styled.div`
    width:450px;
    margin-left:104px;
`;

const InfoUl = styled.ul`
    width:100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    li{
        margin-bottom:9px;
    }
`;

/* 회사소개, 이용약관, 개인정보처리방침 */
const FooterMenu = styled.div`
    width:786px;
    margin-left:83px;
    display:flex;
`;

const FooterMenuUl = styled.ul`
    width:100%;
    display:flex;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    li{
        margin-right:80px;
    }
`;

const Footer = () => {
    return (
        <FooterBlock>
            <LogoBox></LogoBox>
            <InfoBox>
                <InfoUl>
                    <li>AM 10:00 - PM 05:00 Off-time PM12:00 - PM 02:00</li>
                    <li>DAY OFF (SATURDAY, SUNDAY, HOLYDAY)</li>
                    <li>대표번호 : 010.6796.9940  이메일 : ninfo@gooreumi.com  대표 : 김구름</li>
                </InfoUl>
            </InfoBox>
            <FooterMenu>
                <FooterMenuUl>
                    <li>회사소개</li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                </FooterMenuUl>
            </FooterMenu>
        </FooterBlock>
    )

}

export default Footer;