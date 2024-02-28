import { Button } from "@chakra-ui/react";

function handleClick() {
  alert('Bem Vinda!');
}
  

export const Botao = () => {
  return (
    <Button
      onClick={handleClick}
      colorScheme="teal"
      size="sm"
      width={"100%"}
      marginTop={"5px"}
    >
      Entrar
    </Button>
  );
};
