import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Schedule from '../dashboard/Schedule';
import NextAppointment from '../dashboard/NextAppointment';
import AppointmentList from '../dashboard/AppointmentList';
import ScheduleCalendar from './ScheduleCalendar';

export function Appointments() {
  return (
    <Box pt={'2.5rem'}>
      <Text fontSize={'1.5rem'} fontWeight={600}>
        Appointment
      </Text>
      <Flex mt={'1.5rem'} gap={'1.5rem'}>
        <Stack spacing={'1.5rem'} w={'21rem'}>
          <Schedule />
          <NextAppointment />
          <AppointmentList />
        </Stack>
        <Box flex={1}>
          <ScheduleCalendar />
        </Box>
      </Flex>
    </Box>
  );
}
