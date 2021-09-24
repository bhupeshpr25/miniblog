import React from 'react';
import PostInfo from './PostInfo';
import { Box, Link, Text } from '@chakra-ui/react';

function PostCard({ post }) {
  return (
    <div className="card">
      <Box
        w="72"
        maxW="sm"
        mt="8"
        ml="4"
        p="4"
        borderWidth="2px"
        borderRadius="lg"
        borderColor="#393F4D"
        bgColor="#1f2738"
      >
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          mx="2"
        ></Box>

        <Box
          mb="2"
          fontWeight="semibold"
          color="gray.400"
          display="flex"
          isTruncated
        >
          <img src="/user.png" alt="user" height={5} width={20} />
          <Text fontSize="sm" ml="2">
            {post.username}
          </Text>
        </Box>

        <Box
          fontWeight="bold"
          fontSize="xl"
          _hover={{ color: 'gray.100' }}
          isTruncated
        >
          <Link href={`/post/${post._id}`} _hover={{ textDecoration: 'none' }}>
            {post.title}
          </Link>
        </Box>

        <Box my="2" noOfLines={6}>
          {post.desc}
        </Box>

        <PostInfo />
      </Box>
    </div>
  );
}

export default PostCard;
