import { useContext, useEffect, useState } from 'react';
import { Input } from '@chakra-ui/input';
import { Button, IconButton } from '@chakra-ui/button';
import { Container, Box, Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';

import {
  FiArrowLeft,
  FiEdit,
  FiShare,
  FiThumbsDown,
  FiThumbsUp,
  FiTrash,
} from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
import { axiosInstance } from '../config';
import Sidebar from './Sidebar';
import { Context } from '../context/Context';

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  return (
    <div className="single-post">
      <Link to="/">
        <IconButton
          icon={<FiArrowLeft />}
          ml="4"
          mb="4"
          bgColor="#2C313D"
          _hover={{ bg: 'gray.600' }}
        />
      </Link>
      <Container maxW="container.md" ml="2" mb="4">
        {updateMode ? (
          <Input
            type="text"
            value={title}
            autoFocus
            onChange={e => setTitle(e.target.value)}
          />
        ) : (
          <Heading size="xl" alignSelf="center">
            {title}
          </Heading>
        )}
        <Heading size="sm" mt="4" color="gray.400">
          {post.username}
        </Heading>

        <Sidebar />

        {updateMode ? (
          <Textarea
            size="lg"
            pb="60"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        ) : (
          <Box pt="8" className="desc">
            {desc}
          </Box>
        )}

        <Box
          p="4"
          mt="8"
          bgColor="#171c26"
          position="absolute"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.600"
        >
          <IconButton
            bgColor="#2C313D"
            _hover={{ bg: 'gray.600' }}
            icon={<FiThumbsUp />}
          />
          <IconButton
            bgColor="#2C313D"
            _hover={{ bg: 'gray.600' }}
            icon={<FiThumbsDown />}
            ml="4"
          />

          <IconButton
            bgColor="#2C313D"
            _hover={{ bg: 'gray.600' }}
            icon={<FiShare />}
            ml="4"
          />
        </Box>
        {post.username === user?.username && (
          <Box
            p="4"
            mt="8"
            ml="52"
            bgColor="#171c26"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.600"
            position="absolute"
          >
            <IconButton
              icon={<FiEdit />}
              bgColor="#2C313D"
              _hover={{ bg: 'gray.600' }}
              onClick={() => setUpdateMode(true)}
            />
            <IconButton
              icon={<FiTrash />}
              variant="ghost"
              borderColor="red.200"
              _hover={{ bg: 'red.900' }}
              ml="4"
              onClick={handleDelete}
            />
          </Box>
        )}
        {updateMode && (
          <Button
            mt="12"
            ml="96"
            bgColor="#2C313D"
            _hover={{ bg: 'gray.600' }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        )}
      </Container>
    </div>
  );
}

export default SinglePost;
