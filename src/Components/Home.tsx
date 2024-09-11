import { Stack, Typography, Avatar, Button, IconButton } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Reveal from "../utils/Reveal";
import { useContext } from "react";
import { switchThemeContext } from "../context/themeContext";


const Hero = () => {
    const {isDark} = useContext(switchThemeContext)
    return (
        <Stack marginY="2rem" gap="2rem">
            <Stack alignItems="center" position="relative" mt="10rem">
                <Typography 
                    variant="h1"
                    position="absolute"
                    width="100%"
                    textAlign="center"
                    top="50%"
                    left="50%"
                    fontFamily="'Dancing Script', cursive" 
                    fontWeight={400}
                    padding="1rem"
                    sx={{
                        "backgroundImage":"linear-gradient(316deg, #f42b03 0%, #ffbe0b 74%)",
                        "backgroundClip":"text",
                        "WebkitTextFillColor": "transparent",
                        "filter": "blur(15px)",
                        "pointerEvents": "none",
                        "transform": "translate(-50%, -50%)",
                        fontSize:{
                            xs:"96px",
                            md:"128px"
                        }
                    }}
                >
                    Bibek Kumar Meher
                </Typography>
                <Avatar alt="Prerit Agrawal" src="/bibek4.png" sx={{height:"200px", width:"200px", filter:"grayscale(100%)", transition:"filter 0.3s ease-out", ':hover':{filter:"grayscale(0%)"}}}/>
            </Stack>
            <Stack alignItems="center" gap="1rem" padding="0 1rem">
                <Reveal>
                    <Typography variant="h4" fontWeight={700} textAlign="center">Namastey, I am Bibek Kumar Meher</Typography>
                </Reveal>
                <Reveal>
                    <Typography variant="body1" textAlign="center">A CS undergrad from VSSUT & full-stack developer</Typography>
                </Reveal>
                <Reveal>
                    <Stack flexDirection="row" gap="0.5rem">
                        <LocationOnIcon sx={{color:isDark ? "#C4C7C7" : "#343434"}}/>
                        <Typography variant="body1">Burla, Sambalpur</Typography>
                    </Stack>
                </Reveal>
            </Stack>
            <Stack justifyContent="center" flexDirection="row" gap="0.5rem">
                <a href="https://drive.google.com/file/d/1_zbCLvoI9__IRV1_2xgj7rc4_TRaruDi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" sx={{height:"100%"}}>
                        Resume
                    </Button>
                </a>
                <a href="https://github.com/bibekmeher" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="github-icon">
                            <GitHubIcon/>
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/bibek-kumar-meher-893423229/" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="linkedin-icon">
                            <img src="./linkedin.svg" alt="linkedin-icon" width="24px"/>
                    </IconButton>
                </a>
                <a href="mailto:bibekkumarmeher015@gmail.com">
                    <IconButton aria-label="email-icon">
                            <EmailIcon/>
                    </IconButton>
                </a>
            </Stack>
        </Stack>
    )
}

export default Hero