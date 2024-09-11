import { Box, Typography, Stack } from "@mui/material";
import Reveal from "../utils/Reveal";

const Skills = () => {
    return ( 
        <Box paddingTop="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
            <Reveal>
                <Typography variant="h5" fontWeight={600}>My Skills</Typography>
            </Reveal>
            <Stack justifyContent="center" width="100%" sx={{flexDirection:{xs:"column", sm:"row"}, alignItems:{xs:"center", sm:"stretch"}}}>
                <Box display="flex" flexDirection="column" justifyContent="start" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{transition:"border 0.2s", width:{xs:"90%", sm:"30%", md:"20%"}, ":hover":{border:"1px solid black"}}}>
                    <Reveal>
                        <Typography variant="h5" fontWeight={500}>Frontend</Typography>
                    </Reveal>
                    <Reveal>
                        <Typography variant="body2">Developing websites using latest technologies. Building dynamic layouts and integrating APIs while keeping modular structure of code.</Typography>
                    </Reveal>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="start" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{transition:"border 0.2s", width:{xs:"90%", sm:"30%", md:"20%"}, ":hover":{border:"1px solid black"}}}>
                    <Reveal>
                        <Typography variant="h5" fontWeight={500}>Backend</Typography>
                    </Reveal>
                    <Reveal>
                        <Typography variant="body2">Developing REST APIs which are easy to integrate.</Typography>
                    </Reveal>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="start" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{transition:"border 0.2s", width:{xs:"90%", sm:"30%", md:"20%"}, ":hover":{border:"1px solid black"}}}>
                    <Reveal>
                        <Typography variant="h5" fontWeight={500}>CI/CD</Typography>
                    </Reveal>
                    <Reveal>
                        <Typography variant="body2">Learning new CI/CD tools and technologies to seamlessly manage the project.</Typography>
                    </Reveal>
                </Box>
            </Stack>
        </Box>
    );
}
 
export default Skills;