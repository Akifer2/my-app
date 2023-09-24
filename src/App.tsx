import * as React from "react"
import { ChakraProvider, Grid, Text, VStack, StackDivider } from "@chakra-ui/react"

import Header from "./components/header"

import CustomCard from "./components/CustomCards";

import theme from "./theme.fonts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <VStack divider={<StackDivider />}>
      <Text color='blue.300' m={5} fontSize={'5xl'} as="b">Bem vindos! {' '}
        ao meu teste com ChackraUI</Text>
      <Grid templateColumns='repeat(5, 1fr)' gap={10} m={5}>
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />
        <CustomCard title="título do card" text1="Texto1" text2="Texto2" />

      </Grid>
    </VStack>
  </ChakraProvider>
)
