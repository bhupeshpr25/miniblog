import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Box,
  Stack,
  FormLabel,
  Input,
  Textarea,
  Button,
  ChakraProvider,
} from '@chakra-ui/react';
import { Context } from '../context/Context';
import { Redirect } from 'react-router';
import { axiosInstance } from '../config';

function Write() {
  const [resize] = React.useState('vertical');
  const firstField = React.useRef();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [response, setResponse] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    try {
      const res = await axiosInstance.post('/posts/', newPost).then(res => {
        setResponse(true);
      });
      console.log(res.data);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className="write-page">
      <ChakraProvider>
        <Navbar />

        <form onSubmit={handleSubmit}>
          <Stack spacing="8" ml="2" pt="6">
            <Box>
              <FormLabel htmlFor="username">Title</FormLabel>
              <Input
                ref={firstField}
                id="username"
                placeholder="Enter a title"
                borderColor="#3e3e3e"
                onChange={e => setTitle(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel htmlFor="desc">Content</FormLabel>
              <Textarea
                id="desc"
                h="50vh"
                resize={resize}
                borderColor="#3e3e3e"
                onChange={e => setDesc(e.target.value)}
              />
            </Box>
          </Stack>

          <Button
            type="submit"
            ml="2"
            bgColor="#2C313D"
            _hover={{ bg: 'gray.600' }}
          >
            {response ? <Redirect to="/" /> : ''}
            Submit
          </Button>

          <Button variant="outline" m="4" borderColor="#3e3e3e" _hover="none">
            Cancel
          </Button>
        </form>
      </ChakraProvider>
    </div>
  );
}

export default Write;
