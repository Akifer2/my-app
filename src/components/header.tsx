import '@fontsource/montserrat-subrayada/400.css';
import '@fontsource/open-sans/700.css'

import React from "react";

import { Link, Box, Stack, Heading, ChakraProvider } from "@chakra-ui/react";
import { BiHomeAlt, BiAtom, BiMessageAltDetail } from 'react-icons/bi';
import { Icon } from '@chakra-ui/react'

import theme from "../theme.fonts";

export default function Header(){
    return(
        <ChakraProvider  theme={theme}>
            <Box w='100%' p='20' alignContent='center' justifyContent='center' bgColor='teal.400' pos='sticky' boxShadow='md'>
                <Stack  align='center' justify='space-around' direction='row' spacing={20}>
                    <Box alignContent='center'>
                        <Heading fontSize='5xl' as='b' textTransform='uppercase' className="different-font" color='Aceent.100' letterSpacing={'1xl'}>
                            Akifer
                        </Heading>
                    </Box>
                    <Box display='flex' gap='30px' textAlign='center' justifyContent='center'>
                        <Link fontSize='2xl' as='b' >
                            <Icon as={BiHomeAlt} /> {' '}
                            Home
                        </Link>
                        <Link fontSize='2xl' as='b'>
                            <Icon as={BiAtom} /> {' '}
                            Projects
                        </Link>
                        <Link fontSize='2xl' as='b'>
                            <Icon as={BiMessageAltDetail} /> {' '}
                            Contact
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </ChakraProvider>
    )
}