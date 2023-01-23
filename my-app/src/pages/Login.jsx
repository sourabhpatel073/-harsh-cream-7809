// import { useContext } from "react";
// import { Authcontext } from "../context/Authcontext";
// import { Navigate } from "react-router-dom";
// const Login = () => {
//   const { login, isAuth } = useContext(Authcontext);
//   const handlelogin = () => {
//     login();
//   };
//   if (isAuth) {
//     return <Navigate to="/" />;
//   }
//   return (
//     <>
//       <div>
//         <h1>Login Section</h1>
//         <button onClick={handlelogin}>Login</button>
//       </div>
//     </>
//   );
// };
// export default Login;

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign in
              </Button>

              <p
                onClick={() => {
                  navigate("/signup");
                }}
                color={"blue.400"}
              >
                go to signup
              </p>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
