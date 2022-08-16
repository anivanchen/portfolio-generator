import { chakra, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

type Props = {
    photo: string;
    title: string;
    description: string;
    languages: string[];
};

const Project: React.FC<Props> = ({ title, description, photo, languages }) => {

    const Cover = chakra(Image, {
        shouldForwardProp: (prop) => ["width", "height", "src", "alt", "objectFit"].includes(prop),
    });

    return (
        <Flex flexDirection="column" justify="top" align="left" width="100%" height="100%" backgroundColor="gray.200" rounded={8}>
            <Cover src={"/repo-images/" + photo} alt={title} width="100%" height="60%" objectFit="cover" rounded={8} />
            <Flex flexDirection="column" justify="top" align="left" width="100%" height="40%" padding={4}>
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
                <Flex flexDirection="row" gap={4}>
                    {languages.map((language) => (
                        <Text key={language} color="gray.500">{language}</Text>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Project;