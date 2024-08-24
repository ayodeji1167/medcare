import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import img6 from '@/assets/images/avatar/avatar2.png';
import { ReactComponent as CallIcon } from '@/assets/icons/messages/call.svg';
import { ReactComponent as CalendarIcon } from '@/assets/icons/messages/calendar.svg';
import { ReactComponent as VideoIcon } from '@/assets/icons/messages/video.svg';
import { ReactComponent as GalleryIcon } from '@/assets/icons/messages/gallery.svg';
import { ReactComponent as SendIcon } from '@/assets/icons/messages/send.svg';
import { chats } from '@/data/messages';

export default function Chat() {
  return (
    <Box h={'100%'} position={'relative'}>
      <Flex justifyContent={'space-between'}>
        <Flex gap={'.5rem'} alignItems={'center'}>
          <Box w={'2.5rem'}>
            <Image h={'100%'} w={'100%'} src={img6} rounded={'100%'} />
          </Box>
          <Box>
            <Text fontWeight={600} fontSize=".875rem" lineHeight={'1rem'}>
              Daniella Fraser
            </Text>

            <Text
              fontStyle={'italic'}
              lineHeight={'1rem'}
              fontSize={'.5rem'}
              color={'primary.500'}
            >
              Typing...
            </Text>
          </Box>
        </Flex>

        <Flex gap={'.5rem'} alignItems={'center'}>
          <Center
            cursor={'pointer'}
            bg={'#E9F1FE'}
            boxSize={'2rem'}
            rounded={'.5rem'}
          >
            <Icon as={CallIcon} />
          </Center>
          <Center
            cursor={'pointer'}
            bg={'#E9F1FE'}
            boxSize={'2rem'}
            rounded={'.5rem'}
          >
            <Icon as={VideoIcon} />
          </Center>
          <Center
            cursor={'pointer'}
            bg={'#E9F1FE'}
            boxSize={'2rem'}
            rounded={'.5rem'}
          >
            <Icon as={CalendarIcon} />
          </Center>
        </Flex>
      </Flex>

      {/* =============================================== */}
      <Stack mt={'1.5rem'} spacing={'1.5rem'}>
        {chats.map((item, index) => {
          const isMe = index % 2 !== 0;
          return (
            <Box
              boxShadow={isMe ? '0px 4px 50px 0px #E9F1FEB2' : ''}
              key={item}
              bg={isMe ? 'white' : 'primary.500'}
              p={'.5rem'}
              rounded={isMe ? '.5rem .5rem 0 .5rem' : '.5rem .5rem .5rem 0'}
              alignSelf={isMe ? 'flex-end' : 'flex-start'}
              maxW={'55%'}
            >
              <Text fontSize={'.75rem'} color={isMe ? '#2F2F2F' : 'white'}>
                {item}
              </Text>
            </Box>
          );
        })}
      </Stack>

      <Flex w={'100%'} position={'absolute'} bottom={0} gap={'1rem'}>
        <InputGroup>
          <Input
            rounded={'.5rem'}
            border="1px solid #EAEAEA !important"
            placeholder="Type a message"
            boxShadow={'none !important'}
            outline={'none !important'}
            _placeholder={{ color: '#9F9F9F', fontSize: '.75rem' }}
            fontSize={'.75rem'}
          />
          <InputRightElement>
            <Icon as={GalleryIcon} />
          </InputRightElement>
        </InputGroup>

        <Center
          cursor={'pointer'}
          boxSize={'2.5rem'}
          rounded={'.5rem'}
          bg={'primary.500'}
        >
          <Icon as={SendIcon} />
        </Center>
      </Flex>
    </Box>
  );
}
