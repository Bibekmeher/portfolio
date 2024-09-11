import { Box, Typography, Stack, Breadcrumbs } from "@mui/material";
import Reveal from "../utils/Reveal";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframe for fade-in effect
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for the work card
const WorkCard = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 90%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  animation: ${fadeIn} 0.5s ease both;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid black;
  }

  @media (min-width: 600px) {
    width: 35%;
  }

  @media (min-width: 960px) {
    width: 28%;
  }
`;

// Styled component for the project link
const ProjectLink = styled.a`
  color: #1a73e8;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #007bff;
    transform: scale(1.1);
  }
`;

// Styled component for the project image with zoom effect on hover
const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Limit content to three to four lines and add ellipsis
const ProjectDescription = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Show only three/four lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Work = () => {
  const [work, setWork] = useState<Item[]>([
    {
      title: "Online C++ Compiler",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Express.js", "Socket.IO", "Node-pty"],
      site: "https://online-cpp-compiler.vercel.app/",
      imageRef: "/CodeEditor.png",
      content: [
        {
          text: "The Online C++ Compiler is a web-based platform that allows users to write, compile, and execute C++ code directly from the browser. It provides a user-friendly interface, along with real-time collaboration capabilities, making it an excellent tool for developers and students learning C++.",
        },
      ],
    },
    {
      title: "E-Bharat E-commerce Platform",
      tags: ["React.js", "Redux", "Firebase Authentication", "Firestore"],
      site: "https://ebharat.vercel.app/",
      imageRef: "/ecommerce.png",
      content: [
        {
          text: "E-Bharat is a dynamic e-commerce platform designed to provide a seamless shopping experience for customers. With features such as secure authentication using Firebase and a responsive design, this platform serves as a modern and robust solution for online shopping.",
        },
      ],
    },
    {
      title: "AI Image Generator",
      tags: ["MongoDB", "React.js", "Node.js", "Express.js", "OpenAI"],
      site: "https://aidalle.netlify.app/",
      imageRef: "/AI image Generator.png",
      content: [
        {
          text: "The AI Image Generator allows users to generate images based on textual descriptions using OpenAI's powerful API. This project highlights the integration of machine learning models with web development, offering users a creative way to generate unique images.",
        },
      ],
    },
    {
      title: "HealthBooker 🧑‍⚕️",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
      site: "https://healthbooker.onrender.com/",
      imageRef: "/HealthBooker.png",
      content: [
        {
          text: "Welcome to our comprehensive healthcare platform, HealthBooker. Users can book appointments with healthcare professionals, access medical records, and view available services. Built with React and Node.js, this project aims to streamline healthcare access for all users.",
        },
      ],
    },
    {
      title: "Clash Of Clans Profile Tracker",
      tags: ["Next.js", "Tailwind CSS", "Recoil.js", "Next UI", "Next-auth", "Express", "Firebase"],
      site: "https://coc-nextjs.vercel.app/",
      imageRef: "/coc.png",
      content: [
        {
          text: "Clash of Clans Profile Tracker is a web application where users can track their progress in the game. With features such as player statistics, real-time updates, and authentication using Next-auth, it provides a great experience for Clash of Clans enthusiasts.",
        },
      ],
    },
    {
      title: "Hotel Room Booking System",
      tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Next.js", "Redux.js", "Ant Design", "Tailwind CSS"],
      site: "https://mukul-beach-resort.vercel.app/",
      imageRef: "/resort.png",
      content: [
        {
          text: "The Beach Resort Hotel Room Booking System is a full-stack project that allows users to search for available rooms and book them seamlessly. With features like room filtering, secure payment processing, and responsive design, this platform ensures an easy booking experience.",
        },
      ],
    },
  ]);

  return (
    <Box id="work" paddingTop="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
      <Reveal>
        <Typography variant="h5" fontWeight={600}>My Works</Typography>
      </Reveal>
      <Stack justifyContent="center" sx={{ flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "center", sm: "stretch" }, flexWrap: "wrap" }}>
        {work.map((item: Item, index: number) => (
          <WorkCard key={index}>
            <Reveal>
              <Typography variant="h5" fontWeight={500}>{item.title}</Typography>
            </Reveal>
            <Reveal>
              <Breadcrumbs separator="|">
                {item.tags.map((tag: string, tagIndex: number) => (
                  <Typography key={tagIndex} variant="body2">{tag}</Typography>
                ))}
              </Breadcrumbs>
            </Reveal>
            <ProjectImage src={item.imageRef} alt={item.title} />
            <Reveal>
              <ProjectDescription variant="body2" fontWeight={500}>
                {item.content[0].text}
              </ProjectDescription>
            </Reveal>
            {item.site && (
              <Reveal>
                <span>
                  <ProjectLink href={item.site} target="_blank" rel="noopener noreferrer">Link</ProjectLink>
                </span>
              </Reveal>
            )}
          </WorkCard>
        ))}
      </Stack>
    </Box>
  );
};

export default Work;
