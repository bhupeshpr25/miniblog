import { IconButton } from '@chakra-ui/button';
import { Container, Box, Heading, Badge, Text } from '@chakra-ui/layout';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { Link } from '@chakra-ui/react';
import '../index.css';

function Sidebar() {
  return (
    <Container
      className="sidebar"
      p="2"
      w="72"
      mt="8"
      ml="75%"
      h="container.sm"
    >
      <Box
        p="4"
        mt="2"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.600"
        bgColor="#171c26"
      >
        <Heading size="lg">Trending Tags</Heading>
        <Badge color="gray.400" bgColor="#393F4D">
          mongodb
        </Badge>
        <Badge ml="2" color="gray.400" bgColor="#393F4D">
          express
        </Badge>
        <Badge ml="2" color="gray.400" bgColor="#393F4D">
          react
        </Badge>
        <Badge ml="2" color="gray.400" bgColor="#393F4D">
          nodejs
        </Badge>
        <Badge ml="2" color="gray.400" bgColor="#393F4D">
          javascript
        </Badge>
        <Badge ml="2" color="gray.400" bgColor="#393F4D">
          css
        </Badge>
        <Badge ml="2" color="gray.400" bgColor="#393F4D">
          html
        </Badge>
      </Box>

      <Box
        p="4"
        mt="8"
        bgColor="#171c26"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="gray.600"
      >
        <Heading>About us</Heading>
        <Text color="gray.400">
          MiniBlog is a site where people from around the world share their
          experiences in short blog format. Sounds interesting? Join us by
          creating an account and get started right away!
        </Text>
      </Box>

      <Box
        p="4"
        mt="8"
        bgColor="#171c26"
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="gray.600"
      >
        <Link href="https://github.com/HanakoK9/miniblog" isExternal>
          <IconButton
            icon={<FiGithub />}
            variant="outline"
            bgColor="gray.700"
            borderColor="gray.600"
            _hover={{ bg: 'gray.600' }}
          />
        </Link>

        <Text mt="2" ml="2" color="gray.400">
          check out the repo
        </Text>
      </Box>
    </Container>
  );
}

export default Sidebar;
