import styled from "styled-components";
import { useState, useEffect } from "react";
import db, { RecaptchaVerifier, doc, getDoc } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import axios, { AxiosResponse } from 'axios';

import {
    selectKeyId,
    selectMobileNum,
    selectOtp,
    selectStudentId,
    setAuthenDetails,
} from "../features/students/authenticationSlice";

interface AuthenState {
    keyId: string;
    mobileNum: string;
    otp: string;
    studentId: string;
};

interface SendOtpResponse {
    status: string;
    message: string;
};


declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
    }
}

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let studentId = useSelector(selectStudentId);

    const [mobileNumber, setMobileNumber] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    
    const [buttonText, setButtonText] = useState('Send OTP');
    const [otpSent, setOtpSent] = useState<'notSent' | 'sent' | 'submitted'>('notSent');

    const [validMobNum, validateMobNum] = useState<'empty' | 'notEmpty' | 'invalid' | 'valid'>('empty');

    const sendOtp = async (): Promise<void> => {
        
        // Validating mobile number format
        if (!/^\d{10}$/.test(mobileNumber)) {
            alert('Mobile number must contain exactly 10 digits and only digits.');
            return;
        }
        /*            
        try {
            const response: AxiosResponse<SendOtpResponse> = await axios.post(
                'https://release.streakcard.click/nfo/send-otp',
                {
                    mobileNumber: mobileNumber
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
      
            console.log('Status Code:', response.status);
            console.log('Response Data:', response.data);
            if(response.status == 200)
            {
                setButtonText("Login");
                setOtpSent('sent');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
        */
        setButtonText("Login");
        setOtpSent('sent');
    };

    const submitOtp = async (): Promise<void> => {
        let authenData : AuthenState = {
            keyId: "",
            mobileNum: "",
            otp: "",
            studentId: "",
        };
        try {
            // Validating otp format
            if (!/^\d{4}$/.test(otp)) {
                alert('OTP must contain exactly 4 digits and only digits.');
                return;
            } else {
                const stKeyId = mobileNumber+otp;


                // FIRESTORE CHECK

                const docRef = doc(db, "StudentDetails", stKeyId);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    navigate('/detail/StudentDetail', {state: stKeyId});
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                    alert("INVALID MOB NUMBER OR PASSWORD. TRY AGAIN !");
                    window.location.reload();   
                }
                // FIRESTORE CHECK ENDS
            }
            /*
            const response: AxiosResponse<SendOtpResponse> = await axios.post(
                'https://release.streakcard.click/nfo/verify-otp',
                {
                    mobileNumber: mobileNumber,
                    otp: otp,
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
      
            console.log('Status Code:', response.status);
            console.log('Response Data:', response.data);
            if(response.status == 200)
            {
                setButtonText("OTP Submitted");
                setOtpSent('submitted');
            }
            */
            
            // LOCAL TESTING
            //const response: AxiosResponse<AuthenState> = await axios.get('http://localhost:4500/authenticate/'+stKeyId);
            //console.log('Status Code:', response.status);
            //console.log('Response Data:', response.data);

            //navigate('/detail/StudentDetail', {state: stKeyId});
            /*
            authenData.keyId = response.data.keyId;
            authenData.mobileNum = response.data.mobileNum;
            authenData.otp = response.data.otp;
            authenData.studentId = response.data.studentId;

            setButtonText("OTP Submitted");
            setOtpSent('submitted');
            return authenData;
            */
        } catch (error) {
            console.error('Error sending Request:', error);
            alert("Unregisted Mobile Number or incorrect OTP. Please try again.");
            window.location.reload();
        }

    };
    
    return (
        <Container>
            <Content>
                <FrontComps>
                    <Logo src="/images/str Logo.svg" alt="" />
                    <LoginComps>
                        <Description>Enter your registered mobile number</Description>
                        <UserInput disabled={otpSent != 'notSent'}
                            type="text"
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/, ''))}
                        />
                        <UserInput disabled={otpSent != 'sent'}
                            type="text"
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/, ''))}
                        />
                        <div id="recaptcha"></div>
                        {otpSent === 'notSent' && (
                            <LoginButton onClick={sendOtp}>Send OTP</LoginButton>
                        )}
                        {otpSent === 'sent' && (
                            <div>
                                <p>Please enter the OTP assigned to you</p>
                                <LoginButton onClick={submitOtp}>Submit OTP</LoginButton>
                            </div>
                            )
                        }
                        {otpSent === 'submitted' && (
                            <p>OTP has been submitted. You are now logged in.</p>
                            )
                        }
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
    width: 50%;
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
    color: rgba(143, 143, 143, 1);


`;
export default Login;