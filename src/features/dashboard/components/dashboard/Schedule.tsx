import { Box, Icon, Stack, Text } from '@chakra-ui/react';
import { ReactComponent as CalendarIcon } from '@/assets/icons/dashboard/calendar.svg';

export default function Schedule() {
  return (
    <Box
      bg={'white'}
      h={'11rem'}
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      p={'1.5rem'}
      rounded={'.5rem'}
    >
      <Text variant={'componentHeading'} mb={'.2rem'}>
        Schedule an appointment
      </Text>
      <Text color={'#9F9F9F'} fontSize={'.75rem'}>
        Scheduling a patient visit
      </Text>
      <Stack
        bg={'primary.500'}
        alignItems={'center'}
        justifyContent={'center'}
        rounded={'.5rem'}
        h={'5rem'}
        spacing={'0rem'}
        mt={'1rem'}
        cursor={'pointer'}
      >
        <Box>
          <Icon as={CalendarIcon} />
        </Box>
        <Text color={'white'} fontWeight={500}>
          Schedule an appointment
        </Text>
      </Stack>
    </Box>
  );
}
