import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Flex>
        <Center w={'100%'}>
          <Text fontSize={'5xl'}>
            <h1>Dio Bank</h1>
          </Text>          
        </Center>
      </Flex>
    </Box>
  );
};
