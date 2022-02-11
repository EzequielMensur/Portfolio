import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import SocialIcons from '../subComponents/SocialIcons'
import Me from '../assets/Images/profile-img.png'

import { useTranslation } from 'react-i18next';

const Es = styled.button`
position: fixed;
top: 2.4rem;
left: 46%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 3rem;
height: 3rem;

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
    @media only screen and (max-width: 768px){
        font-size:small;
        }
}
@media only screen and (max-width: 768px){
    width: 2rem;
    height: 2rem;
    left: 43%;
}
@media only screen and (max-width:465px){
    width: 2rem;
    height: 2rem;
    left: 40%;
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
width: 3rem;
height: 3rem;

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
    @media only screen and (max-width: 768px){
    font-size:small;
    }
}

@media only screen and (max-width: 768px){
    width: 2rem;
    height: 2rem;
    right: 40%; 
    
}

@media only screen and (max-width: 465px){
    width: 2rem;
    height: 2rem;
    right: 35%; 
}

`


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
  font-size:2.5rem;
  @media only screen and (max-width: 768px){
      font-size:1.5rem;
  }
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
@media only screen and (max-width: 768px){
    color: ${props => props.theme.body};
}
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
bottom: 2%;
right: calc(4rem + 2vw);

text-decoration: none;
z-index:1;
@media only screen and (max-width: 768px){
    transform: rotate(90deg);
    bottom:55%;
    right: calc(0.5rem);
    color: ${props => props.theme.body};
}

`
const WORK = styled(NavLink)`
color: ${props => props.theme.body };

position: absolute;
bottom: 2%;
left: calc(4rem + 2vw);
text-decoration: none;
z-index:1;

@media only screen and (max-width: 768px){
    transform: rotate(-90deg);
    bottom:55%;
    left: calc(0.5rem);
}

`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index:1;

@media only screen and (max-width: 768px){
    color: ${props => props.theme.text};
    position: absolute;
    bottom: 2%;
    left: 17%;

}
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
@media only screen and (max-width: 768px){
    position: absolute;
    bottom: 2%;
    right: 10%;
}

`

const Cv = styled(NavLink)`
position: absolute;
top: 5rem;
right: 95.7%;
z-index:100000;
font-size:1rem;
color:${props => props.theme.body};

@media only screen and (max-width: 1173px){
    right: 94.4%;
    
    font-size:1rem;
    &>*:last-child{
        color:${props => props.theme.body};
        }
}

@media only screen and (max-width: 768px){
    position: absolute;
    top:10em;
    right: 20%;
    
    font-size:1rem;
    &>*:last-child{
        color:${props => props.theme.body};
        }
}

`


const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000000;
bottom: 0;
right: 50%;
width: 50% ;
height:  100%;
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

@media only screen and (max-width: 768px){
    top:100%
    bottom: 0;
    right:0;
    width: 100% ;
    height:  50%;
}


`

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index:1;
    @media only screen and (max-width: 768px){
        background:none;
        border:2px solid ${props => props.theme.body};
    }
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
@media only screen and (max-width: 768px){
    width: 100%;
    position: absolute;
}

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
    @media only screen and (max-width: 768px){
        transform: translate(-50%,138%);
    }
    @media only screen and (max-width: 380px){
        transform: translate(-50%,145%);
    }
    
}
`
const Text = styled.div`
font-size: calc(2em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}

@media only screen and (max-width: 768px){
    font-size: 1em;
    height: auto;
    width: 100%;
}
}
`


const Main = () => {
    const[t,i18n]=useTranslation("global");


    return (<>
        <MainContainer>
         <DarkDiv/>
            <Container>
            <SocialIcons theme= 'dark' />
            <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>{t("main.1")}</h1>
                    <h3>{t("main.2")}</h3>
                    <h6> {t("main.3")}</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
            <Es onClick={()=>i18n.changeLanguage("es")}>
                <motion.h1
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >ES</motion.h1></Es>
            <En onClick={()=>i18n.changeLanguage("en")}>
                <motion.h1
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >EN</motion.h1></En>
            

            <Contact target="_blank" to={{pathname:"mailto:eze-mensur@hotmail.es"}}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    {t("main.8")}
                </motion.h2>
            </Contact>
            <Cv to="/cv.pdf" target='_blank' download ><motion.h1
             initial={{
                y:-200,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay:1}
            }}
             whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            
            >CV</motion.h1></Cv>
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    {t("main.7")}
                </motion.h2>
            </BLOG>
            <WORK to="/work">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    {t("main.4")}
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about"  >
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    {t("main.5")}
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    {t("main.6")}
                </motion.h2>
            </SKILLS>

            </BottomBar>

            </Container>
        </MainContainer>
        </>
    )
}

export default Main
