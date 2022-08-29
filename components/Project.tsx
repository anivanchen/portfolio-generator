import { chakra, Flex, GridItem, Heading, Text, Link, Icon, HStack } from "@chakra-ui/react";
import { GoLink, GoLinkExternal } from "react-icons/go";
import React from "react";
import Image from "next/image";
import NextLink from "next/link";

type Props = {
    photo: string;
    title: string;
    description: string;
    languages: string[];
    link: string;
    source: string;
};

const Project: React.FC<Props> = ({ title, description, photo, languages, link, source }) => {

    const Cover = chakra(Image, {
        shouldForwardProp: (prop) => ["width", "height", "src", "alt", "objectFit"].includes(prop),
    });

    return (
        <GridItem>
            <Flex flexDirection="column" justify="top" align="left" width="100%" height="320px" backgroundColor="gray.200" rounded={8}>
                <Cover src={"/repo-images/" + photo} alt={title} width="100%" height="120px" objectFit="cover" rounded={8} />
                <Flex flexDirection="column" justify="top" align="left" width="100%" padding={4}>
                    <Heading size="md">{title}</Heading>
                    <Text>{description}</Text>
                    <Text color="gray.500" mt={2}>{languages.join(", ")}</Text>
                    <Flex flexDirection="row" justify="left" align="center" gap={2} mt={2}>
                        <HStack>
                            <Icon as={GoLink} />
                            <NextLink href={link} passHref>
                                <Link>
                                    {" Project"}
                                </Link>
                            </NextLink>    
                        </HStack>
                        <HStack>
                            <Icon as={GoLinkExternal} />
                            <NextLink href={source} passHref>
                                <Link>
                                    {" Code"}
                                </Link>
                            </NextLink>    
                        </HStack>
                    </Flex>
                </Flex>
            </Flex>
        </GridItem>
        
    );
}

export default Project;