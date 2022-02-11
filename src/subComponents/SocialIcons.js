import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {  Github, YouTube } from '../components/AllSvgs'
import {DarkTheme} from '../components/Themes'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;


position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
@media only screen and (max-width: 768px){
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,1));
    transform: translateX(-20px);
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
@media only screen and (max-width: 768px){
    background-color: ${props => DarkTheme.body };
}
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/EzequielMensur"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.youtube.com/channel/UCnGbPxTm4289-_mX22ASp9Q"}}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>

            <Line color={props.theme}

initial={
    {
        height:0
    }
}
animate={{
    height: '8rem'
}}
transition={{
    type:'spring', duration:1, delay:0.8
}}
            />
        </Icons>
    )
}

export default SocialIcons
