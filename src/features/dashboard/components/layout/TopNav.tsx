import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from '@chakra-ui/react';
import { Logo } from '@/components/Logo/Logo';
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg';
import { ReactComponent as MoonSvg } from '@/assets/icons/moon.svg';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as DropDownIcon } from '@/assets/icons/drop-down.svg';
import profileImg from '@/assets/profile-img.png';
export default function TopNav() {
  return (
    <Flex
      h={'5rem'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bg={'white'}
      px={'1.5rem'}
      borderBottom="1px solid #E9F1FE"
    >
      <Box>
        <Logo to="/" w={'7.7rem'} />
      </Box>

      <Box>
        <InputGroup borderRadius={'.5rem'} h={'2.5rem'} w={'26rem'}>
          <Input
            h={'100%'}
            w={'full'}
            border={'1px solid #EAEAEA !important'}
            outline={'none'}
            _focus={{
              boxShadow: 'none',
            }}
            bg={'white'}
            placeholder="Search"
            _placeholder={{
              color: '#9F9F9F',
              fontSize: '.7rem',
            }}
          />
          <InputRightAddon
            h={'100%'}
            border={'none'}
            cursor={'pointer'}
            bg={'primary.500'}
            children={<Icon as={SearchIcon} />}
          />
        </InputGroup>
      </Box>

      <Flex alignItems={'center'} gap={'1rem'}>
        <Center w={'1.5rem'} h={'1.5rem'} rounded={'100%'} bg={'#E9F1FE'}>
          <Icon boxSize={'.8rem'} as={MoonSvg} />
        </Center>
        <Icon boxSize={'1.3rem'} as={NotificationIcon} />
        <Flex
          h={'3.5rem'}
          p={'.5rem'}
          bg={'#E9F1FE'}
          rounded={'.5rem'}
          alignItems={'center'}
          gap={'.5rem'}
          pr={'.7rem'}
        >
          <Box rounded={'.3rem'} overflow={'hidden'}>
            <Image
              w={'100%'}
              h={'100%'}
              src={profileImg}
              alt="ayobami-israel"
            />
          </Box>
          <Box mr={'1.6rem'}>
            <Text fontSize={'.75rem'} color={'#2F2F2F'}>
              Dr Ayobami Israel
            </Text>
            <Text fontSize={'.5rem'} color={'#747474'}>
              Super Admin
            </Text>
          </Box>

          <Icon cursor={'pointer'} boxSize={'.5rem'} as={DropDownIcon} />
        </Flex>
      </Flex>
    </Flex>
  );
}
