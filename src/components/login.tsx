import styled from "styled-components";
import { useState } from "react";

const Login = () => {

    const [mobileNumber, setMobileNumber] = useState<string>('');
    const [otp, setOtp] = useState<string>('');

    const handleLogin = (): void => {
        console.log('Logging in with', mobileNumber, otp);
      };

    return (
        <Container>
            <Content>
                <FrontComps>
                    <Logo src="/images/str Logo.svg" alt="" />
                    <LoginComps>
                        <Description>Enter your registered mobile number</Description>
                        <UserInput
                            type="text"
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        <UserInput
                            type="text"
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <LoginButton onClick={handleLogin}>Login</LoginButton>
                    </LoginComps>
                </FrontComps>
            </Content>
            <FooterDesc>All rights reserved | 2023</FooterDesc>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Content = styled.div`
    //margin-bottom: 10vw;
    width: 100%;
    position: relative;
    //min-height: 100vh;
    min-width: 10vw;
    max-width: 100vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 40px;
    position: relative;
    height: 100%;
`;

const FrontComps = styled.div`
    margin-top: 0;
    margin-bottom: 2vw;
    margin-left: auto;
    margin-right: auto;
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition-timing-function: ease-out;
    transition: 0.2s;
`;

const Logo = styled.img`
    /*
    width: 100%;
    margin-bottom: 20px;
    max-width: 60px;
    min-height: 1px;
    display: block;
    */
    width: 107px;
    height: 69.9px;
    top: 115.47px;
    left: 505px;

`;

const LoginComps = styled.div`
/*  //Estimated values
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
*/
// below values from figma
    width: 285px;
    height: 299px;
    top: 220px;
    left: 416px;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px;
// below estimated values
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Description = styled.p`
    width: 195px;
    height: 54px;
    top: 49.8px;
    left: 36.5px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9px;

    
    font-family: Cardo;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: #2C6AB1;
`;

const UserInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const LoginButton = styled.button`
    width: 25%;
    height: 25px;
    top: 11.5px;
    left: 60px;
    border-radius: 20px;
    border-color: transparent;
    background: #2C6AB1;
    color: #FFFFFF;

    &:hover {
        background: #809fd7;
    };
`;

const FooterDesc = styled.p`
    // FIGMA values below
    //width: 315px;
    //height: 18px;
    //top: 550px;
    position: absolute;
    top: 550px;
    opacity: 0.88px;
    z-index: -1;
    margin-top: 2px;

    font-family: Cardo;
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    justify-content: center;

`;
export default Login;