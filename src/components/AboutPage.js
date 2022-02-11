import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import IA from '../assets/Images/IA.png'


import { useTranslation } from 'react-i18next';


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const Es = styled.button`
position: fixed;
top: 2.4rem;
left: 46%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2rem;
height: 2rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}

@media only screen and (max-width:768px){
    left: 38.5%;
}
`


const En = styled.button`
position: fixed;
top: 2.4rem;
right: 44%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2rem;
height: 2rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
@media only screen and (max-width: 810px){
    right: 40%; 
}

@media only screen and (max-width: 768px){
    right: 33%; 
}
@media only screen and (max-width: 400px){
    right: 30%; 
}
`


const IABox = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media only screen and (max-width:768px){
    font-size: calc(0.58rem + 1vw);
}
`


const AboutPage = () => {

    const[t,i18n]=useTranslation("global");

    return (
        <ThemeProvider theme={DarkTheme}>
<Box>
    
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <IABox>
            <img src={IA} alt="IA" />
        </IABox>    
        <Main>
        {'=>'+t("aboutpage.1")}
        <br/> <br/>
        {'=>'+t("aboutpage.2")}
        <br/> <br/>
        {'=>'+t("aboutpage.3")}
        <br/> <br/>
        {'=>'+t("aboutpage.4")}
        <br/> <br/>
        {'=>'+t("aboutpage.5")}
        <br/> <br/>
        {'=>'+t("aboutpage.6")}

    </Main>

        <Es onClick={()=>i18n.changeLanguage("es")}>ES</Es>
        <En onClick={()=>i18n.changeLanguage("en")}>EN</En>
        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
