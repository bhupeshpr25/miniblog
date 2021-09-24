import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Heading } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Context } from '../context/Context';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <Flex className="navbar">
      <Box>
        <Heading size="md" p="4" className="header" color="gray.400">
          <Link to="/" textDecoration="none">
            MINIBLOG
          </Link>
        </Heading>
      </Box>

      {user ? (
        <>
          <Heading size="md" mt="4" ml="80%">
            {user.username}
          </Heading>
          <Menu autoSelect="false">
            <MenuButton
              px={2}
              mx={2}
              my={2}
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.600' }}
            >
              <Icon as={FiMenu} w={8} h={8} />
            </MenuButton>
            <MenuList bgColor="#313848" autoSelect="false">
              <MenuItem
                _focus={{ bgColor: '#313848' }}
                _hover={{ bg: 'gray.600' }}
              >
                <Link to={`/write/${user && user.username}`}>Write</Link>
              </MenuItem>

              <MenuDivider />
              <MenuItem _hover={{ bg: 'gray.600' }}>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ) : (
        <Heading size="md" mt="4" className="login">
          <Link to="/login">Login</Link>
        </Heading>
      )}
    </Flex>
  );
};

export default Navbar;
