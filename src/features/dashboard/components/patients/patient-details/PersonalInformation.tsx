import { Box, Center, Flex, Image, Stack, Text } from '@chakra-ui/react';
import dp from '@/assets/images/avatar/avatar2.png';
export default function PersonalInformation() {
  return (
    <Box
      p={'1.5rem'}
      bg={'white'}
      rounded={'.5rem'}
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
    >
      <Text mb={'1rem'} fontWeight={500} fontSize={'.875rem'}>
        Personal information
      </Text>
      <Flex
        mb={'1rem'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
      >
        <Box w={'5.4rem'}>
          <Image rounded={'100%'} h={'100%'} w={'100%'} src={dp} />
        </Box>
        <Center
          color={'#2075F6'}
          fontSize={'.75rem'}
          bg={'#E9F1FE'}
          w={'4rem'}
          h={'1.75rem'}
          rounded={'.25rem'}
        >
          Inpatient
        </Center>
      </Flex>
      <Text fontSize={'.75rem'} color={'#9F9F9F'}>
        Patient: #001923
      </Text>
      <Text fontWeight={'600'}>Josh Kelvin</Text>
      <Stack spacing={'1rem'} mt={'.6rem'}>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Blood type: O+ (Positive)
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          DOB: 2 July, 1990{' '}
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Age: 32
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Gender: Male
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Height: 5.9 ft
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Weight: 159.9 lb
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Phone number: 08102029392
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Email address: joshkelvin@gmail.com
        </Text>
        <Text lineHeight={'1.5rem'} fontSize={'.75rem'} color={'#9F9F9F'}>
          Home address: 123 GRA road, Appex Bus-stop Victoria Island, Lagos.
        </Text>
      </Stack>
    </Box>
  );
}
