import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios, { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {
    setStudentDetails,
    selectStudentId,
    selectMobileNum,
    selectStudentName,
    selectGrade,
    selectSchoolName,
    selectExamDate,
    selectExamTime,
} from "../features/students/studentSlice";

interface studentIdResponse {
    id: string,
    mobile: string,
    name: string,
    grade: string,
    school: string,
    examDate: string,
    examTime: string,
};

const Detail = () => {

    const stId = useParams().id;
    console.log("Student Id =", stId);

    let studentName = "";
    let grade = "" ;
    let schoolName = "" ; 
    let examDate = ""; 
    let examTime = "" ; 

    const dispatch = useDispatch();
    studentName = useSelector(selectStudentName);
    grade = useSelector(selectGrade);
    schoolName = useSelector(selectSchoolName);
    examDate = useSelector(selectExamDate);
    examTime = useSelector(selectExamTime);

    const navigate = useNavigate();

    const requestDetails = async (): Promise<studentIdResponse> => {
        let studentData: studentIdResponse ={
            id: "",
            mobile: "",
            name: "",
            grade: "",
            school: "",
            examDate: "",
            examTime: ""
        };
        try {
            const response: AxiosResponse<studentIdResponse> = await axios.get('http://localhost:4600/students/'+stId);
            console.log('Status Code:', response.status);
            console.log('Response Data:', response.data); 

            studentData.id = response.data.id;
            studentData.mobile = response.data.mobile;
            studentData.name = response.data.name;
            studentData.grade = response.data.grade ;
            studentData.school = response.data.school;
            studentData.examDate = response.data.examDate ;
            studentData.examTime = response.data.examTime ;

            return studentData;

        } catch (error) {
            console.error('Error sending Request:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: studentIdResponse = await requestDetails();
                setStudent(result);
                console.log("new student name = ", result.name);
                console.log("Student Name = ", studentName);
            } catch (error) {
                console.error('Getting Error in Effect - Error:', error);
            }
        };
        fetchData();
    }, []);

    const setStudent = (student: { id: string; mobile: string; name: string; grade: string; school: string ; examDate: string; examTime: string}) => {
        return dispatch(
            setStudentDetails({
                studentId: student.id,
                mobileNum: student.mobile,
                studentName: student.name,
                grade: student.grade,
                schoolName: student.school,
                examDate: student.examDate,
                examTime: student.examTime
            })
        );
    };

    const handleSignOut = () => {
        navigate('/');
    };

    return (
        <Container>
            <ContentWrap>
                <HeaderLogo>
                    <Logo src="/images/str Logo.svg" alt="" />
                </HeaderLogo>
                <ContentBody>
                    <StreakContents>
                        <ContentsHead>
                            <StreakContent> Streak Content </StreakContent>
                        </ContentsHead>
                        <BookShelf>
                            <BookCard>
                                <BookImage src="/images/img.png" alt="" />
                                <BookDetailAndButton>
                                    <BookText>School Level Guidebook</BookText>
                                    <ButtonsDiv>
                                        <ViewButton>
                                            <ButtonText href="">View</ButtonText>
                                        </ViewButton>
                                    </ButtonsDiv>
                                </BookDetailAndButton>
                            </BookCard>
                            <BookCard>
                                <BookImage src="/images/img.png" alt="" />
                                <BookDetailAndButton2>
                                    <BookText>Revision Material</BookText>
                                    <ButtonsDiv>
                                        <ViewButton>
                                            <ButtonText href="">View</ButtonText>
                                        </ViewButton>
                                    </ButtonsDiv>
                                </BookDetailAndButton2>
                            </BookCard>
                            <BookCard>
                                <BookImage src="/images/img.png" alt="" />
                                <BookDetailAndButton3>
                                    <BookText>National's Advance Guidebook</BookText>
                                    <ButtonsDiv3>
                                        <ViewButton>
                                            <ButtonText href="">Preview</ButtonText>
                                        </ViewButton>
                                        <BuyButton>
                                            <BuyButtonText href="">Buy</BuyButtonText>
                                        </BuyButton>
                                    </ButtonsDiv3>
                                </BookDetailAndButton3>
                            </BookCard>
                        </BookShelf>
                        <ExamCard>
                            <ExamDetails>
                                <p>Your Exam is scheduled on </p>
                                <ExamDate>{examDate},</ExamDate>
                                <ExamTime>{examTime}</ExamTime>
                            </ExamDetails>
                            <ButtonHolder>
                                <BuyButton2>
                                    <BuyButtonText href="">Buy</BuyButtonText>
                                </BuyButton2>
                            </ButtonHolder>
                        </ExamCard>
                    </StreakContents>
                    <StudentAndSupport>
                        <StudentIdWrap>
                            <StudentName>{studentName}</StudentName>
                            <LineElement />
                            <StudentGrade>{grade} Grade</StudentGrade>
                            <LineElement />
                            <SchoolName>{schoolName}</SchoolName>
                            <LineElement3 />
                            <SignOutLink href="" onClick={handleSignOut}>Sign Out</SignOutLink>
                        </StudentIdWrap>
                        <Support>
                            <img src="/images/contactsupport.svg" alt="" />
                            <SupportText href="">Contact Support</ SupportText>
                        </Support>
                    </StudentAndSupport>
                </ContentBody>
                <PageBottom>Streak Tech|All Right Reserved|2023</PageBottom>
            </ContentWrap>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    background-color: #F8F1F1;
    //text-align: center;
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; //center;    //flex-start;
    width: 100%;
    height: 100%;
    min-height: 100%;
    //justify-content: space-between;
`;

const HeaderLogo = styled.div`
    width: 100%;
`;

const Logo = styled.img`
    position: relative;
    width: 87px;
    height: 56.83px;
    top: 66.52px;
    left: 91px;
`;

const ContentBody = styled.div`
    display: flex;
    flex-direction: row-reverse;

    margin-top: 90px;
    @media only screen and (min-width: 480px)
    {
        margin-left: 60px;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

    //margin-top: 100px;
    //overflow: auto;
`;

const StudentAndSupport = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
    padding: 0px;
    margin-top: 0px;
    align-items: center;
    //justify-content: center;
    text-align: center;

    margin-top: 20px;
`;

const StudentIdWrap = styled.div`
    width: 244px;
    //height: 336px;
    //gap: 12px;
    display: flex;
    flex-direction: column;
    //position: relative;
    background-color: #FFFFFF;
    border-radius: 5%;
    text-align: left;
    
`;

const LineElement = styled.hr`
    border-color: rgba(217, 217, 217, 0.4);
    width: 208px;
    height: 1px;
    border-radius: 10px;
`;

const LineElement3 = styled(LineElement)`
    width: 60px;
    justify-content: left;
    //left: 0px;
    margin-left: 20px;
`;

const Support = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 700;
`;

const SupportText = styled.a`
    padding-top: 15px;
    padding-bottom: 15px;
    text-decoration: none;
    color: rgba(44, 106, 177, 1);
`;
const StudentName = styled.p`
    padding-left: 20px;
    font-weight: 700;
`;

const StudentGrade = styled.p`
    padding-left: 20px;
`;

const SchoolName = styled.p`
    padding-left: 20px;
`;

const SignOutLink = styled.a`
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 20px;
    text-decoration: none;
    color: rgba(228, 110, 24, 1);
`;

const StreakContents = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

const ContentsHead = styled.span`
    position: relative;
    display: inline-block;
    overflow-x: hidden;

    & :after {
        content: "";
        //padding-left: 100%;
        position: absolute;

        //width: Fixed (647px);
        margin-left: 20px;
        top: 25px; 
        width: 100%;
        height: 2px;
        background-color: rgba(217, 217, 217, 0.4);
        

        //width: 504.5px;
        border: 1px;
        opacity: 0.13px;

    }
`;

const StreakContent = styled.p`
    //gap: 50px;
    color: rgba(44, 106, 177, 1);

    font-family: Cardo;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;


`;

const BookShelf = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
    //width: 75%;
    //height: 75%;
`;

const BookCard = styled.div`
    border-radius: 5px;
    background: rgba(217, 217, 217, 0.5);
    //width: 30%;

    border: 1px solid rgba(0, 0, 0, 0.06);

    width: Fixed (191px);
    height: Fixed (243px);
    top: 51px;
    left: 455px;
    border-radius: 13px;
    border: 1px;
    justify-content: space-between;

`;

const BookDetailAndButton = styled.div`
    justify-content: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 5px;
    text-align: center;

    font-family: Cardo;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
/*
    width: 88px;
    height: 44px;
    opacity: 0.9px;
*/

`;

const BookDetailAndButton2 = styled(BookDetailAndButton)`   
    margin-left:40%;
    margin-right:40%;
`;

const BookDetailAndButton3 = styled(BookDetailAndButton)`
    margin-left:20%;
    margin-right:20%;
`;
const BookImage = styled.img`
`;

const BookText = styled.p`
    font-family: Cardo;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(44, 106, 177, 1);
`;

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`;

const ButtonsDiv3 = styled(ButtonsDiv)`
    justify-content: space-between;
`;

const ViewButton = styled.button`
    //margin-right: 5vw;
    width: Fixed (54px);
    height: Fixed (26px);
    //padding: 8px, 14px, 8px, 14px ;
    border-radius: 31.43px ;
    //gap: 10px ;

    background-color: #AEA6A6;
    border: transparent;
 
`;

const ButtonText = styled.a`
    font-family: Cardo;
    color: rgba(44, 106, 177, 1);
    text-decoration: none;
    font-weight: 500;
`;

const BuyButtonText = styled(ButtonText)`
    background: transparent;
    color: #FFFFFF;
`;

const BuyButton = styled.button`
    //padding-left: 5vw ;
    //margin-left: 5vw;
    background: rgba(44, 106, 177, 1);

    //width: Fixed (122px);
    //height: Fixed (30px);
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 31.43px ;
    border: transparent;
    gap: 10px ;

    color: #FFFFFF;

    font-family: Cardo;
    //font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    

`;

const BuyButton2 = styled(BuyButton)`
    padding-left: 25px;
    padding-right: 25px;  
`;

const ExamCard = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

    align-items: center;

    background: linear-gradient(0deg, rgba(4, 27, 63, 0.05), rgba(4, 27, 63, 0.05)),
                linear-gradient(0deg, rgba(187, 210, 245, 0.2), rgba(187, 210, 245, 0.2));

    border: 1px solid rgba(4, 27, 63, 0.05);

    width: Fixed (647px);
    height: Fixed (130px);
    top: 318px;
    left: 0.75px;
    //padding: 20px, 24px, 20px, 24p;x
    border-radius: 13px;
    border: 1px;
    gap: 100px;

    margin-top: 5vh;

`;

const ExamDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:10px;
`;

const ExamDateTime = styled.p`
    top: 0;
    margin-top:0;
    font-family: Cardo;
    font-size: 22px;
    font-weight: 700;
    //line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

`;

const ExamDate = styled(ExamDateTime)`
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

const ExamTime = styled(ExamDateTime)`
    margin-top: 0px;
    padding-top: 0px;
`;


const ButtonHolder = styled.div`
    margin-left: 50%;
`;


const PageBottom = styled.div`
    margin-top: 20px;
    color:rgba(143, 143, 143, 1);

    @media only screen and (min-width: 768px ){
        margin-left: 500px;
    }

    @media only screen and (min-width: 480px) and (max-width: 767px) {
        margin-left: 200px;
    }

    @media only screen and (max-width: 479px) {
        margin-left: 50px;
    }
`;

export default Detail;