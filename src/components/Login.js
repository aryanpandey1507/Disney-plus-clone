import styled from 'styled-components';


const Login = ()=>{
   
    return(
   <Container>
     <Content>
         <CTA>
             <CTALogoOne src='/images/cta-logo-one.svg' />
             <Signup>Get All there</Signup>
             <Description>Subscribe to disney plus and get no entertainment in just 2000$ .This is a pure entertainment  stunt and will always be my first project in reactjs . This is the unworthy usage of react styled components and firebase authentication.</Description>
             <CTALogotwo src ='/images/cta-logo-two.png'></CTALogotwo>
         </CTA>
        <BgImage />
     </Content>
   </Container>
    );
    
};

const Container= styled.section`
overflow:hidden;
display:flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position: relative;
min-height:100vh;
box-sizing: border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 80px 40px;
height:100%;
`;

const BgImage = styled.div`
 height:100%;
 background-position: top;
 background-size:cover;
 background-repeat:no-repeat;
 background-image: url('/images/login-background.jpg'); 
 position:absolute;
 top:0;
 left:0;
 right:0;
 z-index:-1;
 `;


const CTA= styled.div`

max-width:650px;
width: 100%;
display: flex;
flex-direction: column ;
/* border: 2px solid white; */
`;

const CTALogoOne=styled.img`
max-width:600px;
/* border: 2px solid red; */
min-height:1px;
display:block;
width:100%;
margin-left:auto;
margin-right:auto;
margin-bottom:2px;
`;


const Signup = styled.a`

font-weight: bold;
color:#f9f9f9;
background-color: #0063e5;
width:100%;
margin-bottom: 12px;
letter-spacing: 1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
    cursor:pointer;
}


`;   

const Description = styled.p`

 color: hsla(0, 0%, 95.3% , 1);
 font-size:11px;
 margin: 0 0 24px ;
 line-height:1.5em;
 letter-spacing: 1.5px;
`;

const CTALogotwo = styled.img`
max-width:600px;
margin-bottom:20px;
display: inline-block;
vertical-align:bottom;
width:100%;
`;



export default Login;
