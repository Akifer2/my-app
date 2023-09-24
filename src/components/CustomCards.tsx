import '@fontsource/montserrat-subrayada/400.css';
import '@fontsource/open-sans/700.css';

import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    StackDivider,
    Stack,
    Text,
    Divider,
    CardFooter,
    Button,
    Icon
} from "@chakra-ui/react";

import { BiRightArrowAlt } from 'react-icons/bi';
import React from "react";

interface CustomCardProps {
    title: string;
    text1: string;
    text2: string;
}

export default function CustomCard(props: CustomCardProps) {
    const { title, text1, text2 } = props;

    return (
        <>
            <Card maxW={{ base: '100%', md: '400px', lg: '600px' }}>
                <CardHeader>
                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                        {title}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack
                        divider={<StackDivider />}
                        spacing={4}
                    >
                        <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} as='b' color='blue.400'>
                            {text1}
                        </Text>
                        <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                            {text2}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='solid' colorScheme='teal' size={{base: 'xs', md: 'sm', lg: 'lg' }} fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}>
                        Veja Mais {" "} <Icon as={BiRightArrowAlt} />
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};
