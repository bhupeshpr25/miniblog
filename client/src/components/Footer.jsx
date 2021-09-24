import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <Container p="20" bg="#1f2738" centerContent>
        <Box maxW="container.xl">
          <Text fontSize="xl">Miniblog &copy; 2021</Text>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
