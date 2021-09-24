import React from 'react';
import SinglePost from '../components/SinglePost';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '../components/Navbar';

function Post() {
  return (
    <div className="single">
      <ChakraProvider>
        <Navbar />
        <SinglePost />
      </ChakraProvider>
    </div>
  );
}

export default Post;
