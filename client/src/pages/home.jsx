import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';
import { ChakraProvider, Text, Container } from '@chakra-ui/react';
import Footer from '../components/Footer';
import { axiosInstance } from '../config';

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="homepage">
      <div>
        <ChakraProvider>
          <Navbar />
          <div className="showcase">
            <Container
              bgImage="showcase.jpg"
              bgSize="cover"
              bgPosition="center"
              color="gray.300"
              h="400"
              maxW="100%"
              borderRadius="10px"
              centerContent
            >
              <Text fontSize="5xl" pt="28">
                MiniBlog
              </Text>
              <Text fontSize="2xl" pt="4">
                Share thoughts, ideas and moments with people around the world!
              </Text>
            </Container>

            <Sidebar />

            <Cards posts={posts} />
          </div>
        </ChakraProvider>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
