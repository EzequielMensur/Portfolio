import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';



import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

import { useTranslation } from 'react-i18next';


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

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
right: 43.4%;
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
@media only screen and (max-width: 1088px){
    right: 43%; 
}
@media only screen and (max-width: 768px){
    right: 31.7%;  
}
@media only screen and (max-width: 414px){
    right: 30.2%;  
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5¿3;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.9em + 0.9vw);
@media only screen and (max-width: 768px){
    font-size: calc(0.7em + 0.7vw);

}

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
@media only screen and (max-width: 768px){
    margin-right: 0.7rem;

}

`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

@media only screen and (max-width: 400px){
    font-size: calc(0.47em + 1vw);
    }
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;

    @media only screen and (max-width: 768px){
        margin: 1rem;
        }
    }
`

const MySkillsPage = () => {
    const[t,i18n]=useTranslation("global");

    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<SocialIcons theme='light'/>
<PowerButton />
<Es onClick={()=>i18n.changeLanguage("es")}>ES</Es>
<En onClick={()=>i18n.changeLanguage("en")}>EN</En>
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} />{t("skill.1")}
</Title>
<Description>
<strong>{t("skill.2")}</strong>
<p>
{t("skill.3")}
</p>
</Description>
<Description>
<strong>{t("skill.4")}</strong>
<p>
{t("skill.5")}
</p>
</Description>
<Description>
<strong>{t("skill.6")}</strong>
<p>
{t("skill.8")}
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> {t("skill.10")}
</Title>

<Description>
<strong>{t("skill.11")} </strong>
<p>
{t("skill.12")}
</p>
</Description>
<Description>
<strong>{t("skill.13")} </strong>
<p>
{t("skill.14")}
</p>
</Description>
<Description>
<strong>{t("skill.15")}</strong>
<p>
{t("skill.16")}
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
