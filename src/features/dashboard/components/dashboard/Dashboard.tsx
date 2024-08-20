import { Box, Grid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Chart from './Chart';
import Schedule from './Schedule';
import NextAppointment from './NextAppointment';
import AppointmentList from './AppointmentList';
import TodaySchedule from './TodaySchedule';

export function Dashboard() {
  return (
    <Box minHeight={'100vh'} pt={'2.5rem'}>
      <Box mb={'1.5rem'}>
        <Text fontWeight={400} color={'#9F9F9F'}>
          Welcome
        </Text>
        <Text fontWeight={600} color={'#2F2F2F'} fontSize={'1.5rem'}>
          Dr Ayobami Israel
        </Text>
      </Box>
      <Grid templateColumns={'3fr 1fr'} gap="1.5rem">
        <Stack spacing={'1.5rem'}>
          <Chart />
          <TodaySchedule />
        </Stack>
        <Stack spacing={'1.5rem'}>
          <Schedule />
          <NextAppointment />
          <AppointmentList />
        </Stack>
      </Grid>
    </Box>
  );
}
