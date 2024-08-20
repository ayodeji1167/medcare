import { Box, Flex, Image, Text } from '@chakra-ui/react';
import userBg from '@/assets/images/appointment-avatar.png';
export default function NextAppointment() {
  return (
    <Box
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      p={'1.5rem'}
      rounded={'.5rem'}
      h={'14rem'}
      bg={'white'}
    >
      <Text mb={'1rem'} fontWeight={500} fontSize={'.875rem'}>
        Next appointment
      </Text>
      <Flex alignItems={'center'}>
        <Box mr={'.5rem'} w={'2.8rem'}>
          <Image
            src={userBg}
            alt="doctor-image"
            rounded={'100%'}
            h={'100%'}
            w={'100%'}
          />
        </Box>
        <Box>
          <Text color={'#2F2F2F'} fontWeight={600}>
            Josh Kelvin
          </Text>
          <Flex gap={'.5rem'} color={'#9F9F9F'}>
            <Text fontSize={'.5rem'}>Gender: Male</Text>
            <Text fontSize={'.5rem'}>Age: 37</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
