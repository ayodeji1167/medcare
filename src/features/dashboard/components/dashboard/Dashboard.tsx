import { Box, Grid, Stack } from '@chakra-ui/react';
import React from 'react';
import Chart from './Chart';
import Schedule from './Schedule';
import NextAppointment from './NextAppointment';
import AppointmentList from './AppointmentList';
import TodaySchedule from './TodaySchedule';

export function Dashboard() {
  return (
    <Box minHeight={'100vh'}>
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
