import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  HStack,
  Button,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import {
  FiFacebook,
  FiInstagram,
  FiLink,
  FiMail,
  FiSend,
  FiThumbsDown,
  FiThumbsUp,
  FiTwitter,
} from 'react-icons/fi';

const PostInfo = React.forwardRef(ref => {
  const { onOpen } = useDisclosure();
  return (
    <div className="postinfo">
      <Popover ref={ref}>
        <PopoverTrigger>
          <Button
            colorScheme="telegram"
            variant="ghost"
            _hover={{ bg: 'gray.600' }}
            onClick={onOpen}
          >
            <Icon as={FiSend} w={4} h={4} />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent bgColor="#393F4D">
            <PopoverArrow bgColor="#393F4D" />
            <PopoverHeader>Share this blog</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <HStack spacing={6} h={16}>
                <IconButton
                  h={8}
                  bgColor="transparent"
                  _hover={{ bg: 'gray.600' }}
                  as={FiLink}
                  ref={ref}
                />
                <IconButton
                  h={8}
                  bgColor="transparent"
                  _hover={{ bg: 'gray.600' }}
                  as={FiFacebook}
                  ref={ref}
                />
                <IconButton
                  h={8}
                  bgColor="transparent"
                  _hover={{ bg: 'gray.600' }}
                  as={FiMail}
                  ref={ref}
                />
                <IconButton
                  h={8}
                  bgColor="transparent"
                  _hover={{ bg: 'gray.600' }}
                  as={FiInstagram}
                  ref={ref}
                />
                <IconButton
                  h={8}
                  bgColor="transparent"
                  _hover={{ bg: 'gray.600' }}
                  as={FiTwitter}
                  ref={ref}
                />
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <HStack>
        <IconButton
          bgColor="#393F4D"
          _hover={{ bg: 'gray.600' }}
          icon={<FiThumbsUp />}
        />
        <IconButton
          bgColor="#393F4D"
          _hover={{ bg: 'gray.600' }}
          icon={<FiThumbsDown />}
        />
      </HStack>
    </div>
  );
});

export default PostInfo;
