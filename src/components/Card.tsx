import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

export const Card = () => {
  return (
    <ChakraProvider>
      <Header />
      <Body />
      <Footer />
    </ChakraProvider>
  );
};
