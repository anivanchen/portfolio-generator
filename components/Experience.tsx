import { Flex, GridItem, Heading, Text, Link, Icon, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { GoLinkExternal } from "react-icons/go";
import React from "react";
import NextLink from "next/link";

type Props = {
    company: string;
    title: string;
    time: string;
    description: string;
    work: string[];
};

const Experience: React.FC<Props> = ({ company, title, time, description, work }) => {
    return (
        <GridItem>
            <Flex flexDirection="column" justify="top" align="left" padding={6} width="100%" height="100%" backgroundColor="gray.200" rounded={8}>
                <HStack mb={2}>
                    <NextLink href={"https://stuypulse.com"} passHref>
                        <Link><Heading fontSize="lg">{company}</Heading></Link>
                    </NextLink>
                    <Icon as={GoLinkExternal} />
                </HStack>
                <Text>{title}</Text>
                <Text color="gray.500">{time}</Text>
                <Text mt={2}>{description}</Text>
                <Heading fontSize="md" mt={4} mb={2}>Responsibilities</Heading>
                <UnorderedList>
                    {work.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </GridItem>
    );
}

export default Experience;