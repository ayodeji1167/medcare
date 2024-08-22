import { Box, Center, Flex, Image, Stack, Text } from '@chakra-ui/react';
import avatar1 from '@/assets/images/appointment-avatar.png';
import avatar2 from '@/assets/images/avatar2.png';
import avatar3 from '@/assets/images/avatar3.png';
import avatar4 from '@/assets/images/avatar4.png';
import avatar5 from '@/assets/images/avatar/avatar6.png';
import avatar7 from '@/assets/images/avatar/avatar8.png';
function ListItem({ name, image, dr, status }) {
  const isOnline = status?.toLowerCase() === 'online';
  return (
    <Flex h={'2.5rem'} alignItems={'center'}>
      <Box mr={'.5rem'} w={'2.5rem'}>
        <Image h={'100%'} w={'100%'} rounded={'100%'} src={image} alt={name} />
      </Box>
      <Box>
        <Text fontWeight={600}>{name}</Text>
        <Flex gap={'.25rem'} alignItems={'center'}>
          <Text fontSize={'.5rem'} variant={'grey'}>
            Dr In-charge:
          </Text>
          <Text fontSize={'.5rem'} variant={'grey'}>
            {dr}
          </Text>
        </Flex>
      </Box>

      <Center
        ml={'auto'}
        h={'1.5rem'}
        bg={isOnline ? '#E9F1FE' : '#FCE8FF'}
        rounded={'.25rem'}
        px={'.3rem'}
      >
        <Text fontSize={'.5rem'} color={isOnline ? 'primary.500' : '#BB00BF'}>
          {status}
        </Text>
      </Center>
    </Flex>
  );
}
export default function AppointmentList() {
  return (
    <Box
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      p={'1.5rem'}
      rounded={'.5rem'}
      bg={'white'}
    >
      <Text mb={'1rem'} variant={'componentHeading'}>
        Appointment list
      </Text>

      <Stack spacing={'1rem'}>
        <ListItem
          name={'Josh Kelvin'}
          status={'Online'}
          dr={'Dr. Abel Damina'}
          image={avatar2}
        />
        <ListItem
          name={'Dr. Josh Kelvin'}
          status={'Physical'}
          dr={'Dr. Abel Damina'}
          image={avatar1}
        />
        <ListItem
          name={'Angel Jones'}
          status={'Online'}
          dr={'Dr. Abel Damina'}
          image={avatar4}
        />
        <ListItem
          name={'Josh Kelvin'}
          status={'Online'}
          dr={'Dr. Abel Damina'}
          image={avatar1}
        />
        <ListItem
          name={'Angel Jones'}
          status={'Physical'}
          dr={'Dr. Abel Damina'}
          image={avatar3}
        />

        <ListItem
          name={'Dr. Josh Kelvin'}
          status={'Physical'}
          dr={'Dr. Abel Damina'}
          image={avatar1}
        />
        <ListItem
          name={'Sophia Brown'}
          status={'Physical'}
          dr={'Dr. George Smith'}
          image={avatar5}
        />
        <ListItem
          name={'Emily Stones'}
          status={'Online'}
          dr={'Dr. Amanda Ray'}
          image={avatar7}
        />
      </Stack>
    </Box>
  );
}
