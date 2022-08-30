import { Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Skill = () => {
    return (
        <Flex justify="center" align="center" height="100px" backgroundColor="gray.100">
            <Text>This portfolio was generated using {" "}<NextLink href="https://github.com/anivanchen/portfolio-generator" passHref><Link>portfolio-generator</Link></NextLink>.</Text>
        </Flex>
    );
}

export default Skill;