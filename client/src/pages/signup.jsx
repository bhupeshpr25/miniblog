import React, { useState } from 'react';
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
import { axiosInstance } from '../config';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axiosInstance.post('/auth/signup', {
        username,
        email,
        password,
      });
      console.log(res.data);
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="signup-page">
      <ChakraProvider>
        <Navbar />
        <Heading ml="4">Signup</Heading>
        <Center>
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            p="6"
            overflow="hidden"
            borderColor="#3e3e3e"
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="username" isRequired>
                <FormLabel>User name</FormLabel>
                <Input
                  placeholder="User name"
                  borderColor="#3e3e3e"
                  onChange={e => setUsername(e.target.value)}
                />
              </FormControl>

              <FormControl id="email" mt="4">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  borderColor="#3e3e3e"
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>

              <FormLabel mt="4">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  borderColor="#3e3e3e"
                  onChange={e => setPassword(e.target.value)}
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
                bgColor="#2C313D"
                _hover={{ bg: 'gray.600' }}
                type="submit"
              >
                Signup
              </Button>
              <Box color="red.300" mt="2" ml="20">
                {error && <span>Something went wrong!</span>}
              </Box>
            </form>

            <Text mx="8" pt="8">
              Already have an account?{' '}
              <Link href="/login" _hover={{ color: 'gray.100' }}>
                Login here
              </Link>
            </Text>
          </Box>
        </Center>
      </ChakraProvider>
    </div>
  );
}

export default Signup;
