import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Login from "./Login";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("#F8FEE5", "gray.700");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Sign Up</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input placeholder="User Name" type="name" variant="filled" mb={6} />
        <Input
          placeholder="Set Password"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" variant="ghost" mb={5}>
          Sign Up
        </Button>
        <Button colorScheme="teal" variant="link" mb={8} onClick={routeChange}>
          Login
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default SignUp;
