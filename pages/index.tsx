import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { chakra, Flex, Spacer, Grid, GridItem, Heading, Text, Icon, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import { GoLocation, GoMail, GoLinkExternal } from "react-icons/go";
import { AiFillPhone, AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import Project from "../components/Project";
import Skill from "../components/Skill";

import data from "../config/config.yml";

const Home: NextPage = () => {

    const Photo = chakra(Image, {
        shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
    });

    const Projects = data.projects;
    const Skills = data.skills;
    const Socials = data.socials;

    function getSocialIcon(social: string) {
        switch (social) {
            case "github":
                return <Icon as={AiFillGithub} />;
            case "linkedin":
                return <Icon as={AiFillLinkedin} />;
            case "facebook":
                return <Icon as={AiFillFacebook} />;
            case "instagram":
                return <Icon as={AiFillInstagram} />;
            case "twitter":
                return <Icon as={AiFillTwitterSquare} />;
            default:
                return <Icon as={GoLinkExternal} />;
        }
    }

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
                        <Heading mt={4}>{data.personal.name}</Heading>
                        <Text fontSize="lg">{data.personal.bio}</Text>
                        <Text fontSize="sm">Currently working @ {data.personal.company}</Text>

                        <Heading fontSize="lg" mt={8} mb={2}>Contact</Heading>
                        <HStack>
                            <Icon as={GoMail} />
                            <NextLink href={"mailto:" + data.contact.email} passHref>
                                <Link>{data.contact.email}</Link>
                            </NextLink>
                        </HStack>
                        <HStack>
                            <Icon as={AiFillPhone} />
                            <Text>+{data.contact.phone}</Text>
                        </HStack>

                        <Heading fontSize="lg" mt={8} mb={2}>Socials</Heading>
                        {Socials.map((social: any) => (
                           <HStack key={social.platform}>
                                {getSocialIcon(social.platform)}
                                <NextLink href={"https://" + social.platform + ".com/" + social.user} passHref>
                                    <Link>{social.user}</Link>
                                </NextLink>
                            </HStack> 
                        ))}
                    </Flex>
                    <Flex justify="center" align="center" height="10%">
                        <HStack>
                            <Icon as={GoLocation} />
                            <Text>{data.personal.location}</Text>
                        </HStack>
                    </Flex>
                </GridItem>
                <GridItem colSpan={9}>
                    <Flex flexDirection="column" justify="top" align="center" pl={[12, 36, 48]} pr={[12, 36, 48]} pt={12} pb={12}>
                        <Flex flexDirection="column" justify="top" align="left" padding={6} width="100%" height="100%" backgroundColor="gray.100" rounded={8}>
                            <Heading>My Projects</Heading>
                            <Text color="gray.500">Projects on GitHub I have built.</Text>
                            <SimpleGrid columns={{base: 3, md: 2, sm: 1}} gap={4} mt={4}>
                                {Projects.map((project: any) => (
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
                            {Skills.map((skill: any) => (
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
