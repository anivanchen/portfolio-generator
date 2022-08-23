import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { chakra, Flex, Spacer, Grid, GridItem, Heading, Text, Icon, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import { GoLocation, GoMail } from "react-icons/go";
import { AiFillPhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Project from "../components/Project";
import Skill from "../components/Skill";

const Home: NextPage = () => {

    const Photo = chakra(Image, {
        shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
    });

    const Projects = [
        {
            title: "portfolio-generator",
            description: "A simple portfolio site generated from a YML file built with Next.js with Typescript.",
            photo: "portfolio-generator.png",
            languages: ["TypeScript", "Next.js", "React", "Chakra UI"],
            link: "https://ivanchen.dev",
            source: "https://github.com/anivanchen/portfolio-generator",
        },
        {
            title: "portfolio-generator",
            description: "A simple portfolio site generated from a YML file built with Next.js with Typescript.",
            photo: "portfolio-generator.png",
            languages: ["TypeScript", "Next.js", "React", "Chakra UI"],
            link: "https://ivanchen.dev",
            source: "https://github.com/anivanchen/portfolio-generator",
        },
        {
            title: "portfolio-generator",
            description: "A simple portfolio site generated from a YML file built with Next.js with Typescript.",
            photo: "portfolio-generator.png",
            languages: ["TypeScript", "Next.js", "React", "Chakra UI"],
            link: "https://ivanchen.dev",
            source: "https://github.com/anivanchen/portfolio-generator",
        },
        {
            title: "portfolio-generator",
            description: "A simple portfolio site generated from a YML file built with Next.js with Typescript.",
            photo: "portfolio-generator.png",
            languages: ["TypeScript", "Next.js", "React", "Chakra UI"],
            link: "https://ivanchen.dev",
            source: "https://github.com/anivanchen/portfolio-generator",
        },
        {
            title: "portfolio-generator",
            description: "A simple portfolio site generated from a YML file built with Next.js with Typescript.",
            photo: "portfolio-generator.png",
            languages: ["TypeScript", "Next.js", "React", "Chakra UI"],
            link: "https://ivanchen.dev",
            source: "https://github.com/anivanchen/portfolio-generator",
        },
        {
            title: "portfolio-generator",
            description: "A simple portfolio site generated from a YML file built with Next.js with Typescript.",
            photo: "portfolio-generator.png",
            languages: ["TypeScript", "Next.js", "React", "Chakra UI"],
            link: "https://ivanchen.dev",
            source: "https://github.com/anivanchen/portfolio-generator",
        },
    ]

    const Skills = [
        {
            language: "TypeScript",
            level: 100,
        },
        {
            language: "TypeScript",
            level: 80,
        },
        {
            language: "TypeScript",
            level: 20,
        },
        {
            language: "TypeScript",
            level: 40,
        },
        {
            language: "TypeScript",
            level: 69,
        },
        {
            language: "TypeScript",
            level: 694,
        },
    ]

    return (
        <>
            <Grid templateColumns="repeat(12, 1fr)" gap={4} minHeight="100vh">
                <GridItem colSpan={3} bgGradient="linear(to-br, teal.200, purple.200)" shadow="base">
                    <Flex flexDirection="column" justify="top" align="center" padding={12} height="90%">
                        <Photo
                            src="https://avatars.githubusercontent.com/u/51217025"
                            alt="pfp"
                            width="256px"
                            height="256px"
                            borderRadius="50%"
                        />
                        <Heading mt={4}>Ivan Chen</Heading>
                        <Text fontSize="lg">Software Engineer</Text>

                        <Heading fontSize="lg" mt={8} mb={2}>Contact</Heading>
                        <HStack>
                            <Icon as={GoMail} />
                            <NextLink href="mailto:me@ivanchen.dev" passHref>
                                <Link>me@ivanchen.dev</Link>
                            </NextLink>
                        </HStack>
                        <HStack>
                            <Icon as={AiFillPhone} />
                            <Text>+19177039398</Text>
                        </HStack>

                        <Heading fontSize="lg" mt={8} mb={2}>Socials</Heading>
                        <HStack>
                            <Icon as={AiFillGithub} />
                            <NextLink href="https://github.com/anivanchen" passHref>
                                <Link>@anivanchen</Link>
                            </NextLink>
                        </HStack>
                        <HStack>
                            <Icon as={AiFillLinkedin} />
                            <NextLink href={"https://www.linkedin.com/in/anivanchen"} passHref>
                                <Link>@anivanchen</Link>
                            </NextLink>
                        </HStack>
                    </Flex>
                    <Flex justify="center" align="center" height="10%">
                        <HStack>
                            <Icon as={GoLocation} />
                            <Text>New York, NY</Text>
                        </HStack>
                    </Flex>
                </GridItem>
                <GridItem colSpan={9}>
                    <Flex flexDirection="column" justify="top" align="center" pl={[12, 36, 48]} pr={[12, 36, 48]} pt={12} pb={12}>
                        <Flex flexDirection="column" justify="top" align="left" padding={6} width="100%" height="100%" backgroundColor="gray.100" rounded={8}>
                            <Heading>My Projects</Heading>
                            <Text color="gray.500">Projects on GitHub I have built.</Text>
                            <SimpleGrid columns={{base: 3, md: 2, sm: 1}} gap={4} mt={4}>
                                {Projects.map((project) => (
                                    <Project
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        photo={project.photo}
                                        languages={project.languages}
                                        link={project.link}
                                        source={project.source}
                                    />
                                ))}
                            </SimpleGrid>
                        </Flex>
                        <Flex flexDirection="column" justify="top" align="left" padding={6} width="100%" height="100%" backgroundColor="gray.100" rounded={8} mt={8}>
                            <Heading>My Skills</Heading>
                            <Text color="gray.500">Breakdown of my skills.</Text>
                            {Skills.map((skill) => (
                                <Skill
                                    key={skill.language}
                                    language={skill.language}
                                    level={skill.level}
                                />
                            ))}
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}

export default Home;
