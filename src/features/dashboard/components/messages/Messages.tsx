import { messages } from '@/data/messages';
import { Box, Center, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Chat from './Chat';

export function Messages() {
  return (
    <Box pt={'2.5rem'}>
      <Text fontSize={'1.5rem'} fontWeight={600}>
        Messages
      </Text>
      <Flex gap={'1.7rem'}>
        <Box
          boxShadow="0px 4px 50px 0px #E9F1FEB2"
          bg={'white'}
          p={'1.5rem'}
          rounded={'.5rem'}
          w={'21rem'}
        >
          <Flex gap={'.5rem'}>
            <Center
              w={'2rem'}
              h={'1.5rem'}
              color={'white'}
              bg={'primary.500'}
              rounded={'.25rem'}
              fontSize={'.875rem'}
            >
              All
            </Center>
            <Center
              w={'3.8rem'}
              h={'1.5rem'}
              bg={'#E9F1FE'}
              color={'primary.500'}
              rounded={'.25rem'}
              fontSize={'.875rem'}
            >
              Unread
            </Center>
          </Flex>
          <Stack mt={'1rem'} spacing={'1rem'}>
            {messages.map((item) => {
              return (
                <Flex
                  cursor={'pointer'}
                  alignItems={'center'}
                  gap={'.5rem'}
                  key={item.name}
                >
                  <Box w={'2.5rem'}>
                    <Image
                      h={'100%'}
                      w={'100%'}
                      rounded={'100%'}
                      src={item.avatar}
                      alt={item.name}
                    />
                  </Box>
                  <Box>
                    <Flex gap={'.5rem'} alignItems={'center'}>
                      <Text
                        fontWeight={600}
                        fontSize=".875rem"
                        lineHeight={'1rem'}
                      >
                        {item.name}
                      </Text>
                      {!!item.unread && (
                        <Center
                          boxSize={'.75rem'}
                          color={'white'}
                          bg={'primary.500'}
                          rounded={'100%'}
                          fontSize={'.5rem'}
                        >
                          {item.unread}
                        </Center>
                      )}
                    </Flex>
                    <Text
                      lineHeight={'1rem'}
                      fontSize={'.5rem'}
                      color={'#9F9F9F'}
                    >
                      {item.content}
                    </Text>
                  </Box>
                  <Text
                    marginLeft={'auto'}
                    color={'#9F9F9F'}
                    fontSize={'.5rem'}
                  >
                    {item.time}
                  </Text>
                </Flex>
              );
            })}
          </Stack>
        </Box>

        {/* ================================================ */}
        <Box
          bg={'white'}
          boxShadow={'0px 4px 50px 0px #E9F1FEB2'}
          flex={1}
          p={'1.5rem'}
          rounded={'.5rem'}
        >
          <Chat />
        </Box>
      </Flex>
    </Box>
  );
}
