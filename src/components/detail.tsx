import styled from "styled-components";

const Detail = () => {
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
                                        <ViewButton>View</ViewButton>
                                    </ButtonsDiv>
                                </BookDetailAndButton>
                            </BookCard>
                            <BookCard>
                                <BookImage src="/images/img.png" alt="" />
                                <BookDetailAndButton2>
                                    <BookText>Revision Material</BookText>
                                    <ButtonsDiv>
                                        <ViewButton>View</ViewButton>
                                    </ButtonsDiv>
                                </BookDetailAndButton2>
                            </BookCard>
                            <BookCard>
                                <BookImage src="/images/img.png" alt="" />
                                <BookDetailAndButton3>
                                    <BookText>National's Advance Guidebook</BookText>
                                    <ButtonsDiv>
                                        <ViewButton>Preview</ViewButton>
                                        <BuyButton>Buy</BuyButton>
                                    </ButtonsDiv>
                                </BookDetailAndButton3>
                            </BookCard>
                        </BookShelf>
                        <ExamCard>
                            <ExamDetails>
                                <p>Your Exam is scheduled on </p>
                                <ExamDateTime>19th November, 2023 <br/> 10am to 11.30am </ExamDateTime>
                            </ExamDetails>
                            <ButtonHolder>
                                <BuyButton>Buy</BuyButton>
                            </ButtonHolder>
                        </ExamCard>
                    </StreakContents>
                    <StudentAndSupport>
                        <StudentIdWrap>
                            <StudentName>Student Name</StudentName>
                            <LineElement />
                            <StudentGrade>nth Grade</StudentGrade>
                            <LineElement />
                            <SchoolName>Full Name of the School</SchoolName>
                            <LineElement />
                            <SignOutButton>Sign Out</SignOutButton>
                        </StudentIdWrap>
                        <Support>
                            <img src="/images/contactsupport.svg" alt="" />
                            <p>Contact Support</p>
                        </Support>
                    </StudentAndSupport>
                </ContentBody>
            </ContentWrap>
            <PageBottom>Streak Tech|All Right Reserved|2023</PageBottom>
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
    align-items: flex-start;
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

    @media (max-width: 768px) {
        flex-direction: column;
    }

    //margin-top: 100px;
    //overflow: auto;
`;

const StudentAndSupport = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding: 0px;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
    
`;

const StudentIdWrap = styled.div`
    width: 244px;
    height: 336px;
    //gap: 12px;
    display: flex;
    flex-direction: column;
    //position: relative;
    background-color: #FFFFFF;
    border-radius: 10%;
    text-align: left;
    
`;

const LineElement = styled.hr`
    background: rgba(217, 217, 217, 0.4);
    width: 208px;
    height: 1px;
    border-radius: 10px;
`;

const Support = styled.div`
    display: flex;
    flex-direction: row;
`;

const StudentName = styled.p`
    padding-left: 20px;
`;

const StudentGrade = styled.p`
    padding-left: 20px;
`;

const SchoolName = styled.p`
    padding-left: 20px;
`;

const SignOutButton = styled.button`

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
        //angle: -0.06 deg;

        //background: rgba(44, 106, 177, 1);

        //border: 1px solid rgba(44, 106, 177, 1);

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
    @media (max-width: 768px) {
        flex-direction: column;
    }
    //width: 75%;
    //height: 75%;
`;

const BookCard = styled.div`
    border-radius: 5px;
    background: rgba(217, 217, 217, 0.5);
    //width: 30%;

    //-----------------------------------
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
    justify-content: space-between;
`;

const ViewButton = styled.button`
    //margin-right: 5vw;
    width: Fixed (54px);
    height: Fixed (26px);
    //padding: 8px, 14px, 8px, 14px ;
    border-radius: 31.43px ;
    //gap: 10px ;
    //background: rgba(99, 101, 103, 0.15);
    background-color: #AEA6A6;
    //border: transparent;
/*
    & :hover {
        background-color: #41C7DC;
        letter-spacing: 5px;
    }
*/
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
    gap: 10px ;

    color: #FFFFFF;

    font-family: Cardo;
    //font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    

`;

const ExamCard = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    align-items: center;

    background: linear-gradient(0deg, rgba(4, 27, 63, 0.05), rgba(4, 27, 63, 0.05)),
                linear-gradient(0deg, rgba(187, 210, 245, 0.2), rgba(187, 210, 245, 0.2));

    border: 1px solid rgba(4, 27, 63, 0.05);

    ///-------------

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
    
`;


const ButtonHolder = styled.div`
    margin-left: 50%;
`;

const PageFooter = styled.div`

    //align-items: center;
    //justify-content: center;
    //text-align: center;

`;

const PageBottom = styled.div`
   /*
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
    position: static;
    text-align: center;
    //justify-content: space-between;
    //margin-left: 40%;
    //margin-right: 40%;
    */
`;

export default Detail;