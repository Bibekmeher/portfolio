import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Reveal from '../utils/Reveal';

const workDetails = [
    {
        orgName: "Neophyte Ambiment Intellgence",
        orgRole: "Full Stack Developer",
        duration: "May, 2024 - July, 2024",
        orgLogo: "/Neophyte.png"
    },
    {
        orgName: "MadAlgos",
        orgRole: "SDE Intern",
        duration: "Dec,2023 - Mar, 2024",
        orgLogo: "/MadAlgos.png"
    },
    {
        orgName: "Codsoft",
        orgRole: "Software Developer Intern",
        duration: "Jun, 2022 - Jul, 2022",
        orgLogo: "/Codsoft.png"
    },
]

export default function Experience() {
    return (
        <Box id="experience" paddingTop="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
            <Reveal>
                <Typography variant="h5" fontWeight={600}>My Experience</Typography>
            </Reveal>
            <Timeline position="alternate" sx={{ width: "100%" }}>
                {
                    workDetails.map((detail, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0', fontSize:{xs:"8px", md:"1rem"} }}
                                    align="right"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {detail.duration}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined" sx={{display:{xs:"none", md:"flex"}}}>
                                        <img src={detail.orgLogo} alt="bottom-street logo" width={40} height={40} style={{ borderRadius: "50%" }} />
                                    </TimelineDot>
                                    <TimelineDot color="primary" variant="outlined" sx={{display:{xs:"flex", md:"none"}}}>
                                        <img src={detail.orgLogo} alt="bottom-street logo" width={24} height={24} style={{ borderRadius: "50%" }} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography fontWeight="600" sx={{fontSize:{xs:"12px", md:"1.5rem"}}} component="span">
                                        {detail.orgName}
                                    </Typography>
                                    <Typography sx={{fontSize:{xs:"8px", md:"1rem"}}}>{detail.orgRole}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </Box>
    );
}
