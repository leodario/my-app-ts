import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return(
    <Box bg="tomato" w="100%" p={4} color="white">
      <Flex>
        <Center w={'100%'}>
          <Text fontSize={'3xl'}>
            Footer
          </Text>          
        </Center>
      </Flex>
    </Box>
  )
}