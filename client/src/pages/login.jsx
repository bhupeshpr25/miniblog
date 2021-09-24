import React, { useContext } from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Heading,
  Center,
  Text,
  Link,
  ChakraProvider,
} from '@chakra-ui/react';
import { Context } from '../context/Context';
import { axiosInstance } from '../config';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axiosInstance.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="login-page">
      <ChakraProvider>
        <Navbar />
        <Heading ml="4">Login</Heading>
        <Center>
          <form onSubmit={handleSubmit}>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              p="6"
              overflow="hidden"
              borderColor="#3e3e3e"
            >
              <FormControl id="username">
                <FormLabel>User name</FormLabel>
                <Input
                  placeholder="User name"
                  color="gray.200"
                  borderColor="#3e3e3e"
                  ref={userRef}
                />
              </FormControl>

              <FormLabel mt="4">Password</FormLabel>
              <InputGroup size="md" borderColor="#3e3e3e">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  ref={passwordRef}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    bgColor="#3e3e3e"
                    _hover={{ bg: 'gray.600' }}
                    onClick={handleClick}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button
                mt="8"
                ml="28"
                type="submit"
                bgColor="#2C313D"
                _hover={{ bg: 'gray.600' }}
                className="loginButton"
                disabled={isFetching}
              >
                Login
              </Button>
              <Text mx="8" pt="8">
                Don't have an account?{' '}
                <Link href="/signup" _hover={{ color: 'gray.100' }}>
                  Signup here
                </Link>
              </Text>
            </Box>
          </form>
        </Center>
      </ChakraProvider>
    </div>
  );
}

export default Login;
