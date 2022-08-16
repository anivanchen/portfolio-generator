import { Flex, Heading, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";

const Skills: NextComponentType = () => {
    return (
        <Flex flexDirection="column" justify="center" align="center" padding={12} height="100%">
            <Heading>My Skills</Heading>
            <Text color="gray.500">Programming languages I use.</Text>
        </Flex>
    );
}

export default Skills;