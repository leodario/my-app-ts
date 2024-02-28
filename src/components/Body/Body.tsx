import { Box, Center, Input } from "@chakra-ui/react";
import { Botao } from "../Botao/Botao";

export const Body = () => {
  return (
    <Box minHeight="100vh" backgroundColor={"#9413dc"} padding={"25px"}>
      <Box backgroundColor={"#FFFFFF"} borderRadius={"25px"} padding={"15px"}>
        
        <Center>
          <h1>Faça o Login</h1>
        </Center>

        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
         <Botao />
        </Center>
      </Box>
    </Box>
  );
};
