import { Box, Typography, Button } from "@mui/material";
import Reveal from "../utils/Reveal";

const GetInTouch = () => {
    return ( 
        <Box py="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
            <Reveal>
                <Typography variant="body1" fontWeight={600}>Wanna add me to your team?</Typography>
            </Reveal>
            <Reveal>
                <a href="mailto:bibekkumarmeher015@gmail.com">
                    <Button variant="contained">
                        Get in touch
                    </Button>
                </a>
            </Reveal>
        </Box>
    );
}
 
export default GetInTouch;